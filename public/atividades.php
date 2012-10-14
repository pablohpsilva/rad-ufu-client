<?php
  require_once(__DIR__.'/../src/controller/AtividadeController.class.php');
  $controller = new AtividadeController();
  if(isset($_GET['t'])){
  	switch ($_GET['t']) {
  		case 'ensino':
  			$controller->listaTodasAtividadesEnsino();
  			break;
  		
  		default:
  			$controller->listaTodasAtividadesEnsino();
  			break;
  	}
  } else {
  	$controller->listaTodasAtividadesEnsino();
  }
?>