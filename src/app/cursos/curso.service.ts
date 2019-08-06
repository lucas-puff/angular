import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  private cursos: string[] = [];

  constructor() {
    this.cursos = ['Tecnico em Informatica', 
                   'Tecnico em Rede', 
                   'Tecnico em Análise e Desenvolvimento'];
   }

   getCursos(){
    return this.cursos;
   }
  
}
