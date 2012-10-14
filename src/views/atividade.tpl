{*extends file = 'atividades.tpl'*}
{*block name=tabela*}
<table class = "table table-hover">
  <thead>
    <tr>
      <th>Item</th> <th>Descrição</th> <th>Pontos</th> <th>Periodo</th>
    </tr>
  </thead>
  <tbody>
  	{foreach $atividades as $atividade}
  	  <tr>
  	      <td>{$atividade->item_n}</td> <td>{$atividade->descricao}</td> <td>{$atividade->pontuacao}</td> <td>{$atividade->data_inicio} - {$atividade->data_fim}</td>
  	  </tr>
  	{/foreach}
  </tbody>
</table>
{*/block*}