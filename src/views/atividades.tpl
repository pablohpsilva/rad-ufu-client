{extends file = 'layout.tpl'}
{block name=titulo} Items de Ensino {/block}
{block name=conteudo}
  <ul class = "nav nav-tabs" id = "items">
  	{block name=active_tab}
      <li class = "active" ><a href="?t=ensino">Ensino</a></li>
  	  <li><a href="?t=orientacao">Orientação</a></li>
  	  <li><a href="?t=producao">Produção</a></li>
  	  <li><a href="?t=pesquisa">Pesquisa</a></li>
  	  <li><a href="?t=extensao">Extensão</a></li>
  	  <li><a href="?t=administracao">Administração</a></li>
  	  <li><a href="?t=outras">Outras</a></li>
    {/block}
  </ul>
  {block name=tabela}{/block}
{*
  <div class = "tab-content">
  	<div class = "tab-pane active" id = "ensino">{block name=atividades_ensino}{/block}</div>
  	<div class = "tab-pane" id = "orientacao">ajax_geraview_atividades_orientacao</div>
  	<div class = "tab-pane" id = "producao">ajax_geraview_atividades_producao</div>
  	<div class = "tab-pane" id = "pesquisa">ajax_geraview_atividades_pesquisa</div>
  	<div class = "tab-pane" id = "extensao">ajax_geraview_atividades_extensao</div>
  	<div class = "tab-pane" id = "administracao">ajax_geraview_atividades_administracao</div>
  	<div class = "tab-pane" id = "outras">ajax_geraview_atividades_outras</div>
  </div> *}
{/block}