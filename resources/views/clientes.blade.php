<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700" rel="stylesheet">
  <link rel="stylesheet" href="css/plantilla.css">
</head>
<body>
<div id="app">

@include('menu.sidebar')

<main>
	<header>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-3 col-sm-3 col-xs-4 text-left">
					<img src="img/menu.png" alt="" class="nav-icon">
				</div>
				<div class="col-md-6 col-sm-6 col-xs-4"></div>
				<div class="col-md-3 col-sm-3 col-xs-4 text-right">
					<img src="img/expand.png" alt="" class="nav-icon activar-fullscreen">
					<img src="img/full-screen-exit.png" class="nav-icon desactivar-fullscreen">
				</div>
			</div>
		</div>
	</header>
	<div class="contenido">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12 col-sm-12 col-xs-12">
					 <ol class="breadcrumb">
					    <li><a href="#">Home</a></li>
					    <li><a href="#">Private</a></li>
					    <li><a href="#">Pictures</a></li>
					    <li class="active">Vacation</li>        
					  </ol>
				</div>
			</div>
			<div class="row">
				<!--contenido-->
				@yield('clientes')
			</div>
		</div>
	</div>
	<div class="clear"></div>
</main>
</div>
<script src="js/app.js"></script>
<script src="js/plantilla.js"></script>
</body>
</html>