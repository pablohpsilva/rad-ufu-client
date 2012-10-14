<?php
  class Atividade {
    public $item_n;
    public $descricao;
    public $pontuacao;
    public $data_inicio;
    public $data_fim;

    function __construct($item_n, $descricao, $pontuacao, $data_inicio, $data_fim) {

    	$this->item_n      = $item_n;
    	$this->descricao   = $descricao;
    	$this->pontuacao   = $pontuacao;
    	$this->data_inicio = $data_inicio;
    	$this->data_fim    = $data_fim;
    }
  }
?>