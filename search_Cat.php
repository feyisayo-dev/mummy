<?php
include 'db.php';


$query = "SELECT Cat_Id, Cat_name, Cat_icon, CONVERT(VARCHAR, date_posted, 120) AS date_posted FROM category 
    ORDER BY date_posted DESC";
$result = sqlsrv_query($conn, $query);

if ($result === false) {
    die(json_encode(array('error' => "Error executing query: " . sqlsrv_errors()[0]['message'])));
}

$posts = array();

while ($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
    $posts[] = array(
        'Cat_Id' => $row['Cat_Id'],
        'Cat_name' => $row['Cat_name'],
        'Cat_icon' => $row['Cat_icon'],
        'date_posted' => $row['date_posted']
    );
}

// Encode the results as JSON
echo json_encode(array('results' => $posts));
