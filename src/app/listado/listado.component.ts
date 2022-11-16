import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  title: string = 'Listado de alumnos';

  students: string[] = ['Sergio', 'Javier', 'Pilar', 'Vicente'];
  
  passing_students: string[] = [];

  pass(): void {
    let student = this.students.pop();
    if(student!==undefined) {
      this.passing_students.push(student);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
