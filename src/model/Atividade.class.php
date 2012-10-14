<?php
abstract class Atividade {
    private $item_n;
    private $descricao;
    private $pontuacao;
    private $data_inicio;
    private $data_fim;

    abstract protected function calculaPontuacao();
  }
?>