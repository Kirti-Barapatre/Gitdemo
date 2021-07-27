import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.css']
})
export class DataTypesComponent implements OnInit {

//declaring variables
name:string="SRI";
age:number;
hobbies:string[];
marks:Array<number>;
Istrue:boolean;
tupleval:[string,number,boolean];
dynamicvalue:any;
student:object; 
picture="assests/image/balls.jpg"


  constructor() { 
    this.age=30;
    this.hobbies=["Playing","Singing"];
    this.marks=[30,90,95];
    this.Istrue=true;
    this.tupleval=["PUNE",90,true];
    this.dynamicvalue=89;
    this.student={fathername:"RAJ",Address:"xyz"};
  }

  ngOnInit(): void {
  }

}
