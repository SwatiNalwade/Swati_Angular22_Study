import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {User} from './user.model'

@Component({
  imports: [],
  selector: 'app-get-api',
  styleUrl: './get-api.css',
  templateUrl: './get-api.html',
})
export class GetApi {

//  private  httpobject = inject(HttpClient);
userList: User[] = [];

todoList = signal<any>([])
 constructor(private http:HttpClient){}
// this api response we saved in normal ts variable and showed in html 
 getUserList(){
    debugger
   this.http.get<User[]>("https://jsonplaceholder.typicode.com/users").subscribe({
    
    next :(result)=>{

      console.log(result);
      this.userList = result;
    },
    error:(err : any)=>{
      console.log(err)
    }
    
     })
  }

  // now use signal to strored the data 

  getTodoList(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe({
      next: (res:any)=>{
        debugger
        this.todoList.set(res);
       // console.log(this.todoList)
      },
      error: (err:any)=>{
         alert(err);
      }

    })
  }

}
