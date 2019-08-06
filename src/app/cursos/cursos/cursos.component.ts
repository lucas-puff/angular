import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers:[CursoService] 
})
export class CursosComponent implements OnInit {

  cursos:string[] = [];
  
  private service: CursoService;

  constructor(service: CursoService) { 
    this.service = service;

  }

  ngOnInit() {
    this.cursos = ['Tecnico em Informatica', 
                   'Tecnico em Rede', 
                   'Tecnico em Análise e Desenvolvimento'];
  }

}
