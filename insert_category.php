<?php
header("Access-Control-Allow-Origin: *"); // Allow all domains to access this proxy
header("Content-Type: application/json");

include ('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sql = "SELECT COUNT(Cat_Id) FROM category";
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

    $RegDate = date("M-d-Y");
    $CatId = 'CAT' . $num_padded;
    $datetime = new DateTime();
    $date_posted = $datetime->format('Y-m-d H:i:s');

    $CategoryName = $_POST["category_name"];
    $CategoryIcon = $_FILES["category_icon"]["name"];
    $CategoryIcon_new = uniqid('', true) . '.' . pathinfo($CategoryIcon, PATHINFO_EXTENSION);

    $CategoryIconTmp = $_FILES["category_icon"]["tmp_name"];

    // Move uploaded image to a designated folder (make sure the folder exists)
    $uploadDirectory = "category_icons/";
    move_uploaded_file($CategoryIconTmp, $uploadDirectory . $CategoryIcon_new);

    $query = "INSERT INTO category ([Cat_Id]
    ,[Cat_name]
    ,[Cat_icon]
    ,[date_posted]) VALUES (?, ?, ?, ?)";
    $params = array($CatId, $CategoryName, $CategoryIcon_new, $date_posted);

    $result = sqlsrv_query($conn, $query, $params);

    if ($result === false) {
        die("Error: " . sqlsrv_errors());
    } else {
        echo "Category created successfully!";
    }

    sqlsrv_close($conn);
}
