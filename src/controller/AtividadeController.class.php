<?php
require_once(__DIR__.'/../renderer/Renderer.class.php');
require_once(__DIR__.'/../model/AtividadeDeEnsinoPtPorAula.class.php');
require_once(__DIR__.'/../model/AtividadeDeEnsinoPtPorAlunos.class.php');

class AtividadeController {
  public $renderer;

  function listaTodasAtividadesEnsino() {
    $a1 = new AtividadeDeEnsinoPtPorAula(
      '01'
      ,'Disciplina INF13: Organização de Computadores 2'
      ,'13/10/2012'
      ,'14/10/2012'
      ,4
      );

    $a2 = new AtividadeDeEnsinoPtPorAlunos(
      '05'
      ,'Aula teórica para turmas com mais de 45 alunos na disciplina INF13'
      ,'13/10/2012'
      ,'14/10/2012'
      ,62
      ,9
      ,45
      );

    $a3 = new AtividadeDeEnsinoPtPorAlunos(
      '06'
      ,'Aula prática de Ciências Humanas, Ciências Sociais Aplicadas, Letras e Lingüística para turmas'
      ,'14/10/2012'
      ,'15/10/2012'
      ,17
      ,2.5
      ,12
      );

    $renderer = new Renderer();
    $renderer->render('atividade_ensino', 
      array(
        'atividades' => array($a1,$a2,$a3)
        )
      );
  }
/*
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
 */
}
?>