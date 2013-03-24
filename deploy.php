<?php
  require_once (__DIR__ . '/../src/RADUFU/Autoloader.php');

  use RADUFU\Service\CategoriaService,
      RADUFU\Service\AtividadeService;

  $atividadeService = new AtividadeService();
  $CategoriaService = new CategoriaService();

  $atividades = json_encode($atividadeService->searchAll(1));
  $categorias = json_encode($CategoriaService->searchAll());
?>

<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>RAD / UFU</title>
  <link rel="stylesheet" href="css/style.css">
</head>

<body style="padding-top: 40px;">

  <!-- Navbar -->
  <div class = "navbar navbar-fixed-top">
    <div class = "navbar-inner">
      <div class = "container-fluid">
        <div class="row-fluid">
          <div class="span10 offset1">
            <div id="navbar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Conteúdo -->
  <div class = "container-fluid">
    <div class="row-fluid">
      <div class="span10 offset1">
        <div id="content"></div>
      </div>
    </div>
  </div>
  <script type="text/javascript">
    var require = {
      config: {
        "app": {
          //$loggedUserJSON
          loggedUser: {
            "atividades": [],
            "id": 1,
            "nome": "Girafales",
            "siape": "12129idasdas"
          },
          categorias: <?php echo($categorias); ?>,
          atividades: <?php echo($atividades); ?>
        }
      }
    }
  </script>
  <script type="text/javascript" data-main="js/main.js" src="js/lib/require.js"></script>
</body>

</html>