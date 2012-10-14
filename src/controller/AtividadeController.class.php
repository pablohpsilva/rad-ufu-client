<?php
require_once(__DIR__.'/../renderer/Renderer.class.php');
require_once(__DIR__.'/../model/Atividade.class.php');
class AtividadeController {
  public $renderer;

  function listaTodasAtividadesEnsino() {
    $a1 = new Atividade(
      '01'
      ,'Disciplina INF13: Organização de Computadores 2'
      ,'40'
      ,'13/10/2012'
      ,'14/10/2012'
      );

    $a2 = new Atividade(
      '05'
      ,'Aula teórica para turmas com mais de 45 alunos na disciplina INF13'
      ,'1'
      ,'13/10/2012'
      ,'14/10/2012'
      );

    $renderer = new Renderer();
    $renderer->render('atividade_ensino', 
      array(
        'atividades' => array($a1,$a2)
        )
      );
  }

  function listaTodasAtividadesOrientacao() {
    $a1 = new Atividade(
      '11'
      ,'Orientação de alunos de graduação em Estágio Supervisionado'
      ,'4'
      ,'13/10/2012'
      ,'14/10/2012'
      );

    $a2 = new Atividade(
      '12'
      ,'Orientação de aluno PET'
      ,'8'
      ,'13/10/2012'
      ,'14/10/2012'
      );

    $renderer = new Renderer();
    $renderer->render('atividade_orientacao', 
      array(
        'atividades' => array($a1,$a2)
        )
      );
  }
}
?>