<?php /* Smarty version Smarty-3.1.12, created on 2012-10-13 19:46:11
         compiled from "/var/www/rad-ufu/src/views/items-ensino.tpl" */ ?>
<?php /*%%SmartyHeaderCode:20318423705079d28f0b0164-92143784%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3bfe36967876aa4ba0966459d44b3e484516fa91' => 
    array (
      0 => '/var/www/rad-ufu/src/views/items-ensino.tpl',
      1 => 1350168364,
      2 => 'file',
    ),
    'c878dab7329ecdc79416d4decc91a0134320985d' => 
    array (
      0 => '/var/www/rad-ufu/src/views/layout.tpl',
      1 => 1350168369,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20318423705079d28f0b0164-92143784',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_5079d28f117446_95308994',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5079d28f117446_95308994')) {function content_5079d28f117446_95308994($_smarty_tpl) {?><!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title> Items de Ensino </title>
    <link rel="stylesheet" href="static/lib/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="static/lib/bootstrap/css/bootstrap-responsive.min.css">
  </head>
  <body style = "padding-top: 40px;">
    <div class = "navbar navbar-fixed-top">
      <div class = "navbar-inner">
        <div class = "container">
          <a class = "brand" href = "#">RAD/UFU</a>
          <ul class = "nav pull-right">
            <li><a href = "#">Relatório</a></li>
            <li><a href = "#">Ajuda</a></li>
            <li><a href = "#">Sair</a></li>
            </ul>
        </div>
      </div>
   </div>
   <div class = "container" style = "padding-top: 10px;">
     
  <ul class = "nav nav-tabs" id = "items">
  	<li class = "active" ><a href="#ensino" data-toggle = "tab">Ensino</a></li>
  	<li><a href="#orientacao" data-toggle = "tab">Orientação</a></li>
  	<li><a href="#producao" data-toggle = "tab">Produção</a></li>
  	<li><a href="#pesquisa" data-toggle = "tab">Pesquisa</a></li>
  	<li><a href="#extensao" data-toggle = "tab">Extensão</a></li>
  	<li><a href="#administracao" data-toggle = "tab">Administração</a></li>
  	<li><a href="#outras" data-toggle = "tab">Outras</a></li>
  </ul>

  <div class = "tab-content">
  	<div class = "tab-pane active" id = "ensino">ajax_geraview_atividades_ensino</div>
  	<div class = "tab-pane" id = "orientacao">ajax_geraview_atividades_orientacao</div>
  	<div class = "tab-pane" id = "producao">ajax_geraview_atividades_producao</div>
  	<div class = "tab-pane" id = "pesquisa">ajax_geraview_atividades_pesquisa</div>
  	<div class = "tab-pane" id = "extensao">ajax_geraview_atividades_extensao</div>
  	<div class = "tab-pane" id = "administracao">ajax_geraview_atividades_administracao</div>
  	<div class = "tab-pane" id = "outras">ajax_geraview_atividades_outras</div>
  </div>

   </div>
   <script type = "text/javascript" src = "static/lib/jquery/jquery-1.8.1.min.js"></script>
   <script type = "text/javascript" src = "static/lib/bootstrap/js/bootstrap.min.js"></script>
   
  </body>
</html><?php }} ?>