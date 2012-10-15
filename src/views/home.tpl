{extends file = 'layout.tpl'}
{block name=titulo} Home {/block}
{block name=conteudo}
<h1 align = "center">Bem Vindo!</h1>
<button href="#NovaAtividadeModal" class="btn" data-toggle="modal">Nova Atividade</button>
<table class = "table table-hover">
  <thead>
    <tr>
      <th>Item</th> <th>Descrição</th> <th>Pontos</th> <th>Periodo</th>
    </tr>
  </thead>
  <tbody id ="tabela-atividades"></tbody>
</table>
{include file = 'novaAtividadeModal.tpl'}
{/block}
{block name=scripts}
<script type="text/template">
</script>
<script type="text/template" id = "atividade-tpl">
<td><%=item_n%></td> <td><%=descricao%></td> <td><%=pontuacao%></td> <td><%=data_inicio%> - <%=data_fim%></td>
</script>
<script type="text/javascript" src = "static/lib/underscore/underscore-1.4.2.js"></script>
<script type="text/javascript" src = "static/lib/backbone/backbone-0.9.2.js"></script>
<script type="text/javascript" src = "static/rad-ufu/main.js"></script>
{/block}