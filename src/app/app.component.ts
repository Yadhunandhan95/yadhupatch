
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl, FormArray } from '@angular/forms';
import { __values } from 'tslib';
import * as _ from 'underscore';
interface Info {
  content: string;
  id?: string;
  datemodified?: Date;
  isDone?: boolean;
}
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
  listData: any = [];
  displayval = "";
  
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
  
  names1:any
  numbers1:any
  emails1:any
  secnum:any
  i = -1;
 box = document.getElementById('box');
  info_input: any;
  editValue: boolean = false;
  infoCollection: Info[] = [];

  list_input:Info = {
    content:""
  };
  inputId: any='';
  str: any;
  yad1: any;
item: any;
  e : any;
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
       
        secondaryNumber: new FormArray([])
        
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

  
  constructor(private fb: FormBuilder) {

  

    this.yadhuForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      secondaryNumber: ['', Validators.required],
      email: ['', Validators.required],
    })
  }
  
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

    AddItem(){
      // alert(this.yadhuForm.value.name)
     
      this.listData.push({"name":this.names1,"number":this.numbers1,"secondaryNumber":this.secnum,"email":this.emails1})

    }
    
    Reset(){
      this.yadhuForm.reset();
    }


    // removeItem(){
    //   var list_index = this.listData.length;
    //   this.listData.splice(list_index,1);
    // }
    deleteItem(item:any) {
      console.log('going to delete-',item)
      var index = _.findIndex(this.listData,item)
    //   let index = this.listData.findIndex(e => e.item === item);
    //  if(index !== -1){
    //   this.listData.splice(index,1);
    //  }
     
    //  console.log(index); 
      console.log('list_index -del',index)
      this.listData.splice(index,1);
      
    }
    editItem(item: any) {
      debugger;
      this.listData.forEach((element: { isEdit: boolean; }) => {
        element.isEdit = false;
      });
      item.isEdit = true;
    }
      
    saveNewItem() {
      var inputValue: Info={
        content:""
      };
      if (this.listData.content != "") {
        inputValue.isDone = false;
        inputValue.datemodified = new Date();
        inputValue.content = this.listData.content
        var temp_id = this.inputId;
        
  
        var temp_index=_.findIndex(this.listData,{id:temp_id} )
        this.listData[temp_index] = inputValue
        this.editValue = false;
        this.listData.content = "";
        this.inputId = '';
        
      }
    }
    }
  
  
