import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  employee:any[]=[
    {"name":"Kirti","age":"21","dept":"HR"},
    {"name":"Raj","age":"20","dept":"Admin"},
    {"name":"Abi","age":"22","dept":"Admin"},
    {"name":"Banu","age":"24","dept":"UI"},
    {"name":"Rekha","age":"20","dept":"UI"}

  ];
  Cars:any[]=["Tesla","BMW","Ferrari","Ford"];
  ngOnInit(): void {
  }

}
