<?php /* Smarty version Smarty-3.1.12, created on 2012-10-13 21:51:08
         compiled from "/var/www/rad-ufu/src/views/tabela-de-atividades.tpl" */ ?>
<?php /*%%SmartyHeaderCode:889268962507a0a413920f5-01200921%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0f68f1b5a2d72e831d69ebaef80860982668785e' => 
    array (
      0 => '/var/www/rad-ufu/src/views/tabela-de-atividades.tpl',
      1 => 1350175865,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '889268962507a0a413920f5-01200921',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_507a0a413c13c6_18100072',
  'variables' => 
  array (
    'atividades' => 0,
    'atividade' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_507a0a413c13c6_18100072')) {function content_507a0a413c13c6_18100072($_smarty_tpl) {?><table class = "table table">
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
</table><?php }} ?>