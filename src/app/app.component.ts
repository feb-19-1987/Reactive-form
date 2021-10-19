import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  exform!:FormGroup;
  ngOnInit(){
    this.exform=new FormGroup({
      
      'name' :new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'number':new FormControl(null,[Validators.required,Validators.minLength(10),
        Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
      'message':new FormControl(null,[Validators.required,Validators.minLength(10)])

    })
  }
  submit(){
    console.log(this.exform.value)
    this.exform.reset()
  }

  get name(){
    return this.exform.get('name')
  }
}
