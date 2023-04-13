import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { __values } from 'tslib';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  yadhuForm:FormGroup;
  showData:boolean = false;
  public value!: string;
 item_names = [
    "Sanjay",
    "Sedhu",
    "Aravinth",
    "Prabhu",
    "Prem",
    "JayaPrasath",
    "Sabari",
    "Ram",
    "Kumar",
    "Gowtham"
    ]
    // item_number = [
    // "9098786865",
    // "9098786908",
    // "9098345963",
    // "9898786455",
    // "8768986465",
    // "9983475084",
    // "7892365024",
    // "8279346201",
    // "9823623402",
    // "7234952695"
    // ]
    // item_email = [
    //   "sanjay@link.com",
    //   "sedhu@kin.com",
    //   "arvinth@gmail.com",
    //   "prabhu@fun.com",
    //   "prem@job.com",
    //   "jp@gin.com",
    //   "sabari@eol.com",
    //   "ram@qli.com",
    //   "kumar@right.com",
    //   "gowtham@yarn.com"
    // ]
  isValidFormSubmitted: boolean;

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
  get name() 
  {
    return this.yadhuForm.get('name');
  }
  get number()
  {
    return this.yadhuForm.get('number');
  }
  get email()
  {
    return this.yadhuForm.get('email');
  }

      patchUserValues() {
        
      
        this.yadhuForm.patchValue({
          
          name: this.item_names[0]
          // , number: this.item_number[0], email: this.item_email[0]
          
        });
        var name_index = _.findIndex(this.item_names)
        // var number_index = _.findIndex(this.item_number)
        // var email_index = _.findIndex(this.item_email)
        this.item_names.splice(name_index,1);
        // this.item_number.splice(number_index,1);
        // this.item_email.splice(email_index,1);
      }
      
  }
    


    