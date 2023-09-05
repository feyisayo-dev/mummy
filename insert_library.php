<?php
header("Access-Control-Allow-Origin: *"); // Allow all domains to access this proxy
header("Content-Type: application/json");

include ('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sql = "SELECT COUNT(Lib_Id) FROM Library";
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
    $LibId = 'LIB' . $num_padded;
    $datetime = new DateTime();
    $date_posted = $datetime->format('Y-m-d H:i:s');

    $libraryName = $_POST["library_name"];
    $libraryIcon = $_FILES["library_icon"]["name"];
    $libraryIcon_new = uniqid('', true) . '.' . pathinfo($libraryIcon, PATHINFO_EXTENSION);

    $libraryIconTmp = $_FILES["library_icon"]["tmp_name"];

    // Move uploaded image to a designated folder (make sure the folder exists)
    $uploadDirectory = "library_icons/";
    move_uploaded_file($libraryIconTmp, $uploadDirectory . $libraryIcon_new);

    $query = "INSERT INTO Library ([Lib_Id]
    ,[Lib_name]
    ,[Lib_icon]
    ,[date_posted]) VALUES (?, ?, ?, ?)";
    $params = array($LibId, $libraryName, $libraryIcon_new, $date_posted);

    $result = sqlsrv_query($conn, $query, $params);

    if ($result === false) {
        die("Error: " . sqlsrv_errors());
    } else {
        echo "Libary created successfully!";
    }

    sqlsrv_close($conn);
}
