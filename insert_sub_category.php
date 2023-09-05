<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *"); // Allow all domains to access this proxy
header("Content-Type: application/json");

include('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $SubCategoryName = $_POST["sub_category_name"];

    $sql = "SELECT COUNT(Sub_Cat_Id) FROM Sub_Cat";
    $stmt = sqlsrv_query($conn, $sql);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    } else {
        while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_NUMERIC)) {
            $UserCounter = trim($row[0]);
        }
        $num = $UserCounter + 1;
        $num_padded = sprintf("%03d", $num);
    }
    $count = "SELECT COUNT(GoodId) from Good where sub_category = '$SubCategoryName'";
    $countstmt = sqlsrv_query($conn, $count);
    if ($countstmt === false) {
        die(print_r(sqlsrv_errors(), true));
    } else {
        while ($row = sqlsrv_fetch_array($countstmt, SQLSRV_FETCH_NUMERIC)) {
            $SubCount = trim($row[0]);
        }
    }

    $RegDate = date("M-d-Y");
    $SubCatId = 'SUBCAT' . $num_padded;
    $datetime = new DateTime();
    $date_posted = $datetime->format('Y-m-d H:i:s');

    $SubCategorySelect = $_POST["sub_category_select"];
    $SubCategoryIcon = $_FILES["sub_category_icon"]["name"];
    $SubCategoryIcon_new = uniqid('', true) . '.' . pathinfo($SubCategoryIcon, PATHINFO_EXTENSION);

    $SubCategoryIconTmp = $_FILES["sub_category_icon"]["tmp_name"];

    // Move uploaded image to a designated folder (make sure the folder exists)
    $uploadDirectory = "sub_cat_icons/";
    move_uploaded_file($SubCategoryIconTmp, $uploadDirectory . $SubCategoryIcon_new);

    $query = "INSERT INTO Sub_Cat ([Sub_Cat_Id]
    ,[Sub_Cat_Name]
    ,[Cat_Name]
    ,[Sub_Cat_Icon]
    ,[date_posted]
    ,[Count]) VALUES (?, ?, ?, ?, ?, ?)";
    $params = array($SubCatId, $SubCategoryName, $SubCategorySelect, $SubCategoryIcon_new, $date_posted, $SubCount);

    $result = sqlsrv_query($conn, $query, $params);

    if ($result === false) {
        die("Error: " . print_r(sqlsrv_errors(), true));
    } else {
        echo "Sub category created successfully!";
    }

    sqlsrv_close($conn);
}
