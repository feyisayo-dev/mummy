<?php
include 'db.php';

$query = "SELECT [GoodId]
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
    , CONVERT(VARCHAR, date_posted, 120) AS date_posted FROM Good 
    ORDER BY date_posted DESC";
$result = sqlsrv_query($conn, $query);

if ($result === false) {
    die(json_encode(array('error' => "Error executing query: " . sqlsrv_errors()[0]['message'])));
}

$posts = array();

while ($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
    $posts[] = array(
        'product_name' => $row['product_name'],
        'store_name' => $row['store_name'],
        'description' => $row['description'],
        'sub_category' => $row['sub_category'],
        'Library' => $row['Library'],
        'Image' => $row['Image'],
        'Sizes' => $row['Sizes'],
        'actual_price' => $row['actual_price'],
        'sell_price' => $row['sell_price'],
        'stock' => $row['stock'],
        'discount' => $row['discount'],
        'tags' => $row['tags'],
        'date_posted' => $row['date_posted'],
    );
}

// Encode the results as JSON
echo json_encode(array('results' => $posts));
