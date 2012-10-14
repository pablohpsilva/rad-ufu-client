<?php
  require_once(__DIR__.'/../src/controller/AtividadeController.class.php');
  $controller = new AtividadeController();
  if(isset($_GET['t'])){
  	switch ($_GET['t']) {
  		case 'ensino':
  			$controller->listaTodasAtividadesEnsino();
  			break;
/*
      case 'orientacao':
        $controller->listaTodasAtividadesOrientacao();
        break;
 */  		
  		default:
  			header("HTTP/1.0 404 Not Found");
  			break;
  	}
  } else {
  	$controller->listaTodasAtividadesEnsino();
  }
?>