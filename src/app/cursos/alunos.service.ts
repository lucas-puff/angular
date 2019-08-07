import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: string[] = [];

  constructor() { 
    this.alunos=['lucas', 'gustavo', 'Pedro', 'Daniel', 'Leonardo'];

  }

  getAlunos(){
    return this.alunos;
  }
}
