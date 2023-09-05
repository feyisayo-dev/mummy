<?php
include 'db.php';


$query = "SELECT Lib_Id, Lib_name, Lib_icon, CONVERT(VARCHAR, date_posted, 120) AS date_posted, Count FROM Library 
    ORDER BY date_posted DESC";
$result = sqlsrv_query($conn, $query);

if ($result === false) {
    die(json_encode(array('error' => "Error executing query: " . sqlsrv_errors()[0]['message'])));
}

$posts = array();

while ($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
    $posts[] = array(
        'Lib_Id' => $row['Lib_Id'],
        'Lib_name' => $row['Lib_name'],
        'Lib_icon' => $row['Lib_icon'],
        'date_posted' => $row['date_posted'],
        'Count' => $row['Count'],
    );
}

// Encode the results as JSON
echo json_encode(array('results' => $posts));
