<?php
require_once(__DIR__.'/AtividadeDeEnsino.class.php');

class AtividadeDeEnsinoPtPorAlunos extends AtividadeDeEnsino {
  private $quantAlunos;
  private $tamGrupo;
  private $minAlunos;

  function __construct(
    $item_n, $descricao, $data_inicio, $data_fim, $alunos, $grupo, $min){

    parent::__construct($item_n, $descricao, $data_inicio, $data_fim);
    $this->quantAlunos = $alunos;
    $this->tamGrupo    = $grupo;
    $this->minAlunos   = $min;
    $this->calculaPontuacao();
  }

  protected function calculaPontuacao() {
    $this->pontuacao = 
        (int)(($this->quantAlunos - $this->minAlunos) / $this->tamGrupo);
  }
}
?>