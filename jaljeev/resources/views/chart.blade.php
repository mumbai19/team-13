<?php
$dataPoints = array();
foreach($new as $row)
{
    array_push($dataPoints, array("x" => $row->month, "y"=>$row->cost));
}
?>
<!DOCTYPE HTML>
<html>
<head>
<script>
window.onload = function () {
 
var chart = new CanvasJS.Chart("chartContainer", {
	title: {
		text: "Profit to the farmers"
	},
	height: 480,
	axisY: {
		title: "Amount in rupees"
	},
	axisX: {
		title: "Months"
	},
	
	data: [{
		type: "bar",
		dataPoints:<?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
	}]
});
chart.render();
 
}
</script>
</head>
<body>
<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</body>
</html>