{extends file = 'layout.tpl'}
{block name=titulo} Atividades Realizadas {/block}
{block name=conteudo}
  <ul class = "nav nav-tabs" id = "items">
      <li class = "active" ><a href="ensino" data-toggle = "tab">Ensino</a></li>
  	  <li><a href="orientacao" data-toggle = "tab">Orientação</a></li>
  	  <li><a href="producao" data-toggle = "tab">Produção</a></li>
  	  <li><a href="pesquisa" data-toggle = "tab">Pesquisa</a></li>
  	  <li><a href="extensao" data-toggle = "tab">Extensão</a></li>
  	  <li><a href="administracao" data-toggle = "tab">Administração</a></li>
  	  <li><a href="outras" data-toggle = "tab">Outras</a></li>
  </ul>
  <div id = "error-wrapper"></div>
  <div id="tabela-atividades-wrapper"></div>
{/block}
{block name=scripts}
  <script type="text/javascript" src="static/rad-ufu/errorReporter.js"></script>
  <script type="text/javascript" src="static/rad-ufu/ativLoader.js"></script>
  <script type="text/javascript">
    $('#items a:first').click();
  </script>
{/block}