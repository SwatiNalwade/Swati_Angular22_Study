import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [UpperCasePipe,TitleCasePipe,DatePipe],
  selector: 'app-pipes-ex',
  styleUrl: './pipes-ex.css',
  templateUrl: './pipes-ex.html',
})
export class PipesEX {

  courseName: string = "angular full stack course";

  currentDate = new Date();

}
