<?php /* Smarty version Smarty-3.1.12, created on 2012-10-13 22:39:52
         compiled from "/var/www/rad-ufu/src/views/atividade.tpl" */ ?>
<?php /*%%SmartyHeaderCode:236887658507a16ce980713-13499561%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '281822306584aff94da1fc2734838fd1a7f3ddfd' => 
    array (
      0 => '/var/www/rad-ufu/src/views/atividade.tpl',
      1 => 1350178377,
      2 => 'file',
    ),
    '4aaab7a372257b6dec5cfec8052784b4519475b7' => 
    array (
      0 => '/var/www/rad-ufu/src/views/atividades.tpl',
      1 => 1350178185,
      2 => 'file',
    ),
    'c878dab7329ecdc79416d4decc91a0134320985d' => 
    array (
      0 => '/var/www/rad-ufu/src/views/layout.tpl',
      1 => 1350178745,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '236887658507a16ce980713-13499561',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_507a16cea0f532_41920246',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_507a16cea0f532_41920246')) {function content_507a16cea0f532_41920246($_smarty_tpl) {?><!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title> Items de Ensino </title>
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
     
  <ul class = "nav nav-tabs" id = "items">
  	<li class = "active" ><a href="#ensino" data-toggle = "tab">Ensino</a></li>
  	<li><a href="#orientacao" data-toggle = "tab">Orientação</a></li>
  	<li><a href="#producao" data-toggle = "tab">Produção</a></li>
  	<li><a href="#pesquisa" data-toggle = "tab">Pesquisa</a></li>
  	<li><a href="#extensao" data-toggle = "tab">Extensão</a></li>
  	<li><a href="#administracao" data-toggle = "tab">Administração</a></li>
  	<li><a href="#outras" data-toggle = "tab" tab = "outras">Outras</a></li>
  </ul>
  
<table class = "table table-hover">
  <thead>
    <tr>
      <th>Item</th> <th>Descrição</th> <th>Pontos</th> <th>Periodo</th>
    </tr>
  </thead>
  <tbody>
  	<?php  $_smarty_tpl->tpl_vars['atividade'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['atividade']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['atividades']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['atividade']->key => $_smarty_tpl->tpl_vars['atividade']->value){
$_smarty_tpl->tpl_vars['atividade']->_loop = true;
?>
  	  <tr>
  	      <td><?php echo $_smarty_tpl->tpl_vars['atividade']->value->item_n;?>
</td> <td><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['atividade']->value->descricao, ENT_QUOTES, 'UTF-8', true);?>
</td> <td><?php echo $_smarty_tpl->tpl_vars['atividade']->value->pontuacao;?>
</td> <td><?php echo $_smarty_tpl->tpl_vars['atividade']->value->data_inicio;?>
 - <?php echo $_smarty_tpl->tpl_vars['atividade']->value->data_fim;?>
</td>
  	  </tr>
  	<?php } ?>
  </tbody>
</table>



   </div>

   <script>
    $('#navtab a').click(function (e) {
      e.preventDefault();
      //$(this).tab('show');
      var text = $(this).text();
      document.getElementById('conteudo').innerHTML = text;
    })
   </script>
   
   

  </body>
</html>
<?php }} ?>