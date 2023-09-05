<?php
include('db.php'); // Include your database connection

$query = "
    SELECT
        SC.Sub_Cat_Id,
        SC.Sub_Cat_Name,
        SC.Cat_Name AS Sub_Cat_Cat_Name,
        SC.Sub_Cat_Icon,
        SC.date_posted AS Sub_Cat_date_posted,
        SC.Count,
        C.Cat_Id,
        C.Cat_name AS Cat_Cat_name,
        C.Cat_icon,
        C.date_posted AS Cat_date_posted
    FROM
        Sub_Cat SC
    JOIN
        category C ON SC.Cat_Name = C.Cat_name;
";

$result = sqlsrv_query($conn, $query);

if ($result === false) {
    die(print_r(sqlsrv_errors(), true));
}

$data = array();
while ($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
    $product = array(
        'name' => $row['Sub_Cat_Name'],
        'stock' => $row['Count']
    );

    if (!isset($data[$row['Cat_Cat_name']])) {
        $data[$row['Cat_Cat_name']] = array(
            'Cat_icon' => $row['Cat_icon'],
            'Cat_Cat_name' => $row['Cat_Cat_name'],
            'products' => array($product)
        );
    } else {
        $data[$row['Cat_Cat_name']]['products'][] = $product;
    }
}

// Encode the results as JSON
echo json_encode(array('results' => $data));
