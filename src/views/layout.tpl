<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>{block name=titulo}Rad-UFU{/block}</title>
    <link rel="stylesheet" href="static/lib/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="static/lib/bootstrap/css/bootstrap-responsive.min.css">

    <script type = "text/javascript" src = "static/lib/jquery/jquery-1.8.1.min.js"></script>
    <script type = "text/javascript" src = "static/lib/bootstrap/js/bootstrap.min.js"></script>
  </head>
  <body style = "padding-top: 40px;">
    <div class = "navbar navbar-fixed-top">
      <div class = "navbar-inner">
        <div class = "container">
          <a class = "brand" href = "#">RAD/UFU</a>
          <ul class = "nav pull-right">
            <li><a href = "#"> <i class="icon-info-sign"></i> Relatório </a></li>
            <li><a href = "#"> <i class="icon-question-sign"></i> Ajuda</a></li>
            <li><a href = "#"> <i class="icon-share"></i> Sair</a></li>
            </ul>
        </div>
      </div>
   </div>
   
    <ul class="nav nav-tabs" id="navtab">
    <li><a href="#home" data-toggle="tab">Ensino</a></li>
    <li><a href="#profile" data-toggle="tab">Orientacao</a></li>
    <li><a href="#messages" data-toggle="tab">Producao</a></li>
    <li><a href="#settings" data-toggle="tab">Pesquisa</a></li>
    <li><a href="#settings" data-toggle="tab">Extensao</a></li>
    <li><a href="#settings" data-toggle="tab">Administracao</a></li>
    <li><a href="#settings" data-toggle="tab">Outras</a></li>
    </ul>

    <div id="conteudo">
    </div>

   <div class="container" style = "padding-top: 10px;">
     {block name=conteudo}Hello Smarty!{/block}
   </div>

   <script>
    $('#navtab a').click(function (e) {
      e.preventDefault();
      //$(this).tab('show');
      var text = $(this).text();
      document.getElementById('conteudo').innerHTML = text;
    })
   </script>
   
   {block name=scripts}{/block}

  </body>
</html>
