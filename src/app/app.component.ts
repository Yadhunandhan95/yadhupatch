
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl, FormArray } from '@angular/forms';
import { __values } from 'tslib';
import * as _ from 'underscore';
// interface Info {
//   content: string;
//   id?: string;
//   datemodified?: Date;
//   isDone?: boolean;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items:FormArray;
  yadhuForm:FormGroup;
  showData:boolean = false;
  public value!: string;
  
 item_names = [
    "Sanjay",
    "Sedhu",
    "Aravinth",
    "Prabhu",
    "Prem",
    // "JayaPrasath",
    // "Sabari",
    // "Ram",
    // "Kumar",
    // "Gowtham"
    ];
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
  ind: any;
  i = -1;
 box = document.getElementById('box');
  info_input: any;
  infoCollection: any;
  editValue: boolean = false;
  inputId: any='';
  ngOnInit(): void {


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
        Validators.pattern('^[a-z0-9._%+-]+@[a-z]+.[a-z]{2,3}$')]),
       
        secondaryNumber: this.fb.array([])
        
    })
  
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

  get secondaryNumber()
  {
    return this.yadhuForm.get('secondaryNumber') as FormArray;
  }

  
  constructor(private fb: FormBuilder) {}
  
 nextName() {
      this.i = this.i >= this.item_names.length - 1 ? 0 : this.i + 1;
      this.item_names[this.i]
      this.yadhuForm.patchValue({
      name: this.item_names[this.i]
     });
      console.log("test", this.item_names[this.i])
    }
    addSecondaryNumber() {
      this.secondaryNumber.push(this.fb.control(''));
      }
      deleteSecondaryNumber(index: number) {
        this.secondaryNumber.removeAt(index);
      }
      // addInfo() {
      //   if (this.info_input.content != "") {
      //     var inputValue: Info={
      //       content:""
      //     };
      //     inputValue.datemodified = new Date();
      //     inputValue.isDone = false;
      //     inputValue.content = this.info_input.content;
      //     inputValue.id = _.uniqueId('info_');
      //     this.infoCollection.push(inputValue);
      //     this.info_input.content = ""
      //     console.log('added- ',this.infoCollection)
      //     this.openSnackBar("Added Successfuly!", "Dismiss");
      //   }
      // }
      // deleteItem(info_:any) {
      //   console.log('going to delete-',info_)
      //   var info_index = _.findIndex(this.infoCollection,info_)
      //   console.log('todo_index del-',info_index)
      //   this.infoCollection.splice(info_index,1);
      //   this.openSnackBar("Item Deleted!", "Dismiss");
      // }
      // editItem(info:any) {
      //   var inputValue: Info={
      //     content:""
      //   };
      //   this.info_input.content = info.content;
      //   this.editValue = true;
      //   this.inputId = info.id;
      // }


  // openSnackBar(arg0: string, arg1: string) {
  //   throw new Error('Method not implemented.');
  // }
      
    } 
    
