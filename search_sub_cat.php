<?php
include 'db.php';


$query = "SELECT Sub_Cat_Id, Sub_Cat_Name, Cat_Name, Sub_Cat_Icon, CONVERT(VARCHAR, date_posted, 120) AS date_posted, Count FROM Sub_Cat
    ORDER BY date_posted DESC";
$result = sqlsrv_query($conn, $query);

if ($result === false) {
    die(json_encode(array('error' => "Error executing query: " . sqlsrv_errors()[0]['message'])));
}

$posts = array();

while ($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
    $posts[] = array(
        'Sub_Cat_Id' => $row['Sub_Cat_Id'],
        'Sub_Cat_Name' => $row['Sub_Cat_Name'],
        'Sub_Cat_Icon' => $row['Sub_Cat_Icon'],
        'date_posted' => $row['date_posted'],
        'Count' => $row['Count'],
        'Cat_Name' => $row['Cat_Name'],
    );
}

// Encode the results as JSON
echo json_encode(array('results' => $posts));
