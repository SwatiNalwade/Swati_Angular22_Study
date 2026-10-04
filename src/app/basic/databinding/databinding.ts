import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-databinding',
  styleUrl: './databinding.css',
  templateUrl: './databinding.html',
})
export class Databinding {

  studentName:string ="swati";
  batchNo:string = "B35";
  courseName:string =".net Full stack developer";
  isStudentActive:boolean = true;


  selectedCityName : String ="pune";
}
