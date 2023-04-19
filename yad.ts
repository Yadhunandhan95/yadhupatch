<form id="yad">
  <div [formGroup]="yadhuForm" class="row mt-4 user-form" id="yad1">
    <!-- <div formArrayName="items"> -->
      <div class="form-row">
        <!-- {{listData|json}} -->
    <div class="form-group col-4">
      <!-- <div *ngFor="let line of items.controls; let i=index"> -->
      
      <label for="name">Name:</label>
      <div class="form-row">
      <input type="text"id="name" placeholder="Name" class="form-control"
      formControlName="name" required>
   
      <div class="input-group p-7">
        
        <tr>
          <td colspan="2">
        
            <button class="form-control btn-outline-success waves-effect waves-light green" id="name" 
                  (click)="nextName()"> 
                  Next Name</button>
                  
        </tr>
        
       
  <div *ngIf="name?.invalid && (name?.dirty || name?.touched)"
    class="alert alert-danger">
  
  <div *ngIf="name?.errors?.['required']">
    Name is required.
  </div>
  <div *ngIf="name?.errors?.['minlength']">
    Name must be at least 4 characters long.
    
  
  </div>
  </div>
  </div>
  
  </div>
  </div>
  </div>
  <div class="form-row">
  <div class="form-group col-4">
    <label for="name">Number:</label>
    <div class="form-row">
    <input type="number" id="number" class="form-control" placeholder="Number"
    formControlName="number" required>
    <!-- <button type="button" class="btn-outline-success waves-effect waves-light green" (click)="addSecondaryNumber()">Add</button> -->
    <!-- <button type="button" class="btn-outline-danger  alert-danger waves-effect" (click)="deleteSecondaryNumber(i)">Remove</button> -->
    
  <div *ngIf="number?.invalid && (number?.dirty || number?.touched)"
  class="alert alert-danger">
  
  <div *ngIf="number?.errors?.['required']">
  Number is required.
  </div>
  <div *ngIf="number?.errors?.['minlength']">
  Number must be at least 10 characters long.
  </div>
  </div>
  </div>
  </div>
  </div>
  <div class="form-row">
   <div class="form-control" formArrayName="secondaryNumber" *ngFor="let yadhuForm of secondaryNumber.controls; let i=index">
     <label for="name">Secondary Number:</label>
     <div class="form-row">
   <input type="text" id="secondaryNumber"class="form-control" placeholder="Secondary Number" formControlName="secondaryNumber">
   </div>
   </div>
      
    <!-- </div> -->
    
   
  <div class="form-row">
  <div class="form-group col-4">
    <label for="name">Email:</label>
    <div class="form-row">
    <input type="text"  id="email" class="form-control" placeholder="Email"
    formControlName="email" required>
    <div *ngIf="email?.invalid && (email?.dirty || email?.touched)"
    class="alert alert-danger">
    <div *ngIf="email?.errors?.['required']">
      email is required.
    </div>
    <div *ngIf="email?.errors?.['email']">
     Enter a valid email.
    </div>
  </div>
    </div>
  </div>
  </div>
  <input type="button" #yad1 value="Add" class="btn btn-success" id="addfield" (click)="AddItem()"*ngIf="!editValue">&nbsp;
  <button mat-button (click)="saveNewItem()" *ngIf="editValue">Save</button>
  <input type="button" value="Reset" class="btn btn-primary" id="updatefield" (click)="Reset()">
  <div class="form-check col-4"></div>
    <label class="form-check-label">
      <input type="checkbox" id="check" class="form-check-input" value="" (click)="showData = !showData">show
      <label for="check" class="button"></label>
    </label>
  </div>
  
  </form>
  
  
  <div class="row mt-4" *ngIf="showData" ngClass="form-control">
    <!-- {{yadhuForm.value| json}} -->
    <!-- <p> Name of the Customer : {{names1}}</p>
  <p> Number of the Customer : {{numbers1}}</p>
  <p> Secondary number of the Customer : {{secnum}}</p>
  <p> Email Address of the Customer : {{emails1}}</p> -->
  <table width="200%" height="100px" border="4" id="data">
    <thead>
  <tr>
    <th>Sr.No</th>
    <th>Name</th>
    <th>Number</th>
    <th>Secondary Number</th>
    <th>Email</th>
    <th>Actions</th>
  </tr>
    </thead>
    <tbody>
      <!-- <tr *ngFor="let yadhuForm of listData">
      <td>
      <span>
      {{yadhuForm.name}}
      </span>
      </td>
      <td>
      <span>
      {{yadhuForm.number}}
      </span>
      </td>
      <td>
      <span>
      {{yadhuForm.secondaryNumber}}
      </span>
      </td>
      <td>
      <span>
      {{yadhuForm.email}}
      </span>
      </td>
      <td> -->
        
        <!-- <input type="button" name="button3" value="delete" class="btn btn-outline-danger" id="removefield" (click)="removeItem()"> -->
        <!-- <mat-icon class="btn btn-outline-primary" id="editfield" (click)="editItem(item)" class="btn"> edit</mat-icon>
          <mat-icon class="btn btn-outline-danger" (click)="deleteItem(item)">delete</mat-icon> -->
          <tr *ngFor="let yadhuForm of listData;let i= index">
            <td>{{i+1}}</td>
          <td>
            <div *ngIf="yadhuForm.isEdit">
                <input type="text" [(ngModel)]="yadhuForm.name" id="name" class="form-control"/>
            </div>
            <div *ngIf="!yadhuForm.isEdit">
              {{yadhuForm.name}}
            </div> 
        </td>
        <td><div *ngIf="yadhuForm.isEdit">
          <input type="text" [(ngModel)]="yadhuForm.number" id="number" class="form-control"/>
      </div>
      <div *ngIf="!yadhuForm.isEdit">
        {{yadhuForm.number}}
      </div> </td>
      <td>
        <div *ngIf="yadhuForm.isEdit">
            <input type="text" [(ngModel)]="yadhuForm.secnum" id="secondaryNumber" class="form-control"/>
        </div>
        <div *ngIf="!yadhuForm.isEdit">
          {{yadhuForm.secondaryNumber}}
        </div> 
    </td>
        <td>
            <div *ngIf="yadhuForm.isEdit">
                <input type="text" [(ngModel)]="yadhuForm.email" id="email"class="form-control"/>
            </div>
            <div *ngIf="!yadhuForm.isEdit">
              {{yadhuForm.email}}
            </div> 
        </td>
       
        
        <td style="width: 15%;" class="text-center">
            <div *ngIf="yadhuForm.isEdit">
                <!-- <button class="btn btn-sm btn-success" >Update</button>  -->
                <button class="btn btn-sm btn-primary" (click)="yadhuForm.isEdit = false">Update</button> 
            </div>
            <div *ngIf="!yadhuForm.isEdit">
                <button class="btn btn-sm btn-success" (click)="editItem(yadhuForm)">Edit</button>
                <button class="btn btn-sm btn-danger" (click)="deleteItem(yadhuForm)">Delete</button> 
            </div>
            
        </td>
      
      </tr>
    </tbody>
  </table>
  
  </div>
  <div class="row mt-4" *ngIf="showData" ngClass="form-control">
    {{yadhuForm.value| json}}
  </div>
