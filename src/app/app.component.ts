import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  yadhuForm:FormGroup;
  showData:boolean = false;
  public value!: string;

  names = ['Sedhu','Sanjay','Aravinth','Prabhu'];
 

  ngOnInit(): void {
    function my(){
       var i: any
      if (i === getLocaleDayNames.length) {
       const i = 0;
      
      }
    }
    this.yadhuForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)//
      ]),
      number: new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9]'),
        Validators.minLength(10)//
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z]+.[a-z]{2,3}$')])
    });

  }

  deleteTask(_names:any) {
    console.log('going to delete-',_names)
    var _: any
    var values = _.findIndex(this.names,_names)
    this.names.splice(values,1);
  }
 
  get name() { return this.yadhuForm.get('name'); }
  get number() { return this.yadhuForm.get('number'); }
  get email() { return this.yadhuForm.get('email'); }

}

