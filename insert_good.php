<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *"); // Allow all domains to access this proxy
header("Content-Type: application/json");

include('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sql = "SELECT COUNT(GoodId) FROM Good";
    $stmt = sqlsrv_query($conn, $sql);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    } else {
        while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_NUMERIC)) {
            $UserCounter = trim($row[0]);
        }
        $num = $UserCounter + 1;
        $num_padded = sprintf("%05d", $num);
    }

    $RegDate = date("M-d-Y");
    $GoodId = 'GD' . $num_padded;
    $datetime = new DateTime();
    $date_posted = $datetime->format('Y-m-d H:i:s');

    $productName = $_POST["product_name"];
    $storeName = $_POST["store_name"];
    $des = $_POST["des"];
    $subcat = $_POST["subcat"];
    $libraryName = $_POST["library"];
    $first_file_upload_btn = $_FILES["first_file_upload_btn"]["name"];
    $second_file_upload_btn = $_FILES["second_file_upload_btn"]["name"];
    $third_file_upload_btn = $_FILES["third_file_upload_btn"]["name"];
    $fourth_file_upload_btn = $_FILES["fourth_file_upload_btn"]["name"];

    $first_file_upload_btnTmp = $_FILES["first_file_upload_btn"]["tmp_name"];
    $second_file_upload_btnTmp = $_FILES["second_file_upload_btn"]["tmp_name"];
    $third_file_upload_btnTmp = $_FILES["third_file_upload_btn"]["tmp_name"];
    $fourth_file_upload_btnTmp = $_FILES["fourth_file_upload_btn"]["tmp_name"];

    $baseDirectory = "good_icons";
    $productDirectory = "{$baseDirectory}/{$GoodId}";

    if (!file_exists($productDirectory)) {
        mkdir($productDirectory, 0777, true);
    }

    // Now move the uploaded images to the product directory
    move_uploaded_file($first_file_upload_btnTmp, "{$productDirectory}/first_image.jpg");
    move_uploaded_file($second_file_upload_btnTmp, "{$productDirectory}/second_image.jpg");
    move_uploaded_file($third_file_upload_btnTmp, "{$productDirectory}/third_image.jpg");
    move_uploaded_file($fourth_file_upload_btnTmp, "{$productDirectory}/fourth_image.jpg");
    $commaSeparatedSizes = $_POST["commaSeparatedSizes"];
    $actualPrice = $_POST["actual_price"];
    $sellPrice = $_POST["sell_price"];
    $stock = $_POST["stock"];
    $discount = $_POST["discount"];
    $tags = $_POST["tags"];

    $query = "INSERT INTO Good ([GoodId]
    ,[product_name]
    ,[store_name]
    ,[description]
    ,[sub_category]
    ,[Library]
    ,[Image]
    ,[Sizes]
    ,[actual_price]
    ,[sell_price]
    ,[stock]
    ,[discount]
    ,[tags]
    ,[date_posted]) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $params = array($GoodId, $productName, $storeName, $des, $subcat, $libraryName, $productDirectory, $commaSeparatedSizes, $actualPrice, $sellPrice, $stock, $discount, $tags, $date_posted);
    echo $GoodId;
    echo $productName;
    echo $storeName;
    echo $des;
    echo $libraryName;
    echo $productDirectory;
    echo $commaSeparatedSizes;
    echo $actualPrice;
    echo $sellPrice;
    echo $stock;
    echo $discount;
    echo $tags;
    echo $date_posted;

    $result = sqlsrv_query($conn, $query, $params);

    if ($result === false) {
        die("Error: " . sqlsrv_errors());
    } else {
        echo "Good created successfully!";
    }

    sqlsrv_close($conn);
}
