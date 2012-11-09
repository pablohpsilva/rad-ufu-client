<div class="modal hide fade" id="NovaAtividadeModal">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h3>Nova Atividade</h3>
  </div>
  <div class="modal-body">
    <form class="form-horizontal">
      <div class="control-group">
        <label class="control-label" for="itemN">Tipo</label>
        <div class="controls">
          <select id="itemN">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="control-group">
        <label class="control-label" for="descricao">Descriacao</label>
        <div class="controls">
          <input type="text" id="descricao" placeholder="Breve descricao">
        </div>
      </div>
      <div class="control-group">
        <label class="control-label" for="dataInicio">Inicio</label>
        <div class="controls">
          <input type="text" id="dataInicio" placeholder="10/10/2010">
        </div>
      </div>
      <div class="control-group">
        <label class="control-label" for="dataInicio">Fim</label>
        <div class="controls">
          <input type="text" id="dataFim" placeholder="10/10/2010">
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancela</a>
    <a href="#" class="btn btn-primary" id="novaAtividade">Ok</a>
  </div>
</div>