<!DOCTYPE html>
<html>
<head>
	<title>BMI CALC</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <style type="text/css">
    	body{
    		font-family: monospace;
    		margin-top: 5%;
    		background-image: url(../bootstrap/bmi.jpg);
    	}
    	.h1{
    		font-size: 20px;
    		font-weight: bold;
    	}
    </style>
</head>
<body>
	<div class="container">
		<div class="card bg-secondary">
			<div class="card-header" style="font-size: 25px; text-align: center;">BMI CALCULATOR</div>
			<div class="card-body">
				
				<form class="h1">
					<div class="form-group" onsubmit="return false">
						<label for="weight">Enter Your Weight:</label>
						<input type="text" id="weight" placeholder="Enter in kgs" class="form-control">

					</div><br>
					<div>
						<label for="height">Enter Your Height:</label>
						<input type="text" id="height" placeholder="Enter in Ft" class="form-control">

					</div><br>
					<div>
						<label for="bmi">Your BMI is:</label>
						<input type="text" id="bmi" class="form-control">
					</div>


					<br>



						
                    <div>
                    	<button type="button" onclick="get()" class="btn btn-success"  >CHECK BMI</button>
                    </div>
						
					 
				</form>
			</div>
			<div class="card-footer" style="font-size: 25px; text-align: center;">A Healthy BMI is in the range 19 to 25</div>
		</div>
	</div>


	<script type="text/javascript">
		function get(){
			var w=document.getElementById("weight").value;
			var h=document.getElementById("height").value;

			h=h*12*0.025

			var bmi=w/(h*h);
			var a=Math.round(bmi);

			document.getElementById('bmi').value=a;
		}
	</script>

</body>
</html>
