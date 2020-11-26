import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo of Two way data binding in Angular';
  name: string='';
  upper: string='';
  lower: string='';
  
  isUpperCase = (s:string) => /^[A-Z]*$/.test(s);
  isLowerCase = (s:string) => /^[a-z]*$/.test(s);

  checkUpperAndLower(val:string):void{
    this.upper='';this.lower='';
    for(let i=0;i<val.length;i++){
      if(this.isUpperCase(val[i]))
        this.upper+=val[i];
    }
    for(let i=0;i<val.length;i++){
      if(this.isLowerCase(val[i]))
        this.lower+=val[i];
    }
    }

     
  }
