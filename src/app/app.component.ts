import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first_project';
  list:any[]=[];
  listd:any[]=[];
  
  EnterSubmit(item:String,bo:any,date:any)
    {
      
      if(item!="")
this.list.push({item});
this.listd.push({date});
bo.value=""

}
  remove(i:number)
  {
this.list.splice(i,1);
this.listd.splice(i,1);
  }}