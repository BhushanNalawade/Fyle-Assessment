import { Component,ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import { Router } from '@angular/router';
import { WorkoutDataService } from '../workout-data.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class UserComponent {
  
  submitted = false;

  

  
  constructor(private router: Router,private workoutDataService: WorkoutDataService){
      
   }

   ngOninit():void{
      
      // const data = localStorage.getItem('workoutDataService');
      // if(data){
      //   this.workoutDataService = JSON.parse(data);
      // }
   }

   registerForm = new FormGroup({
      userName:new FormControl("",[Validators.required]),
      workoutType:new FormControl("",[Validators.required]),
      workoutTiming:new FormControl("",[Validators.required])
   })

   

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  

  onSubmit() {
    const workoutEntry = {
      
        userName: this.registerForm.value.userName,
        workoutType: this.registerForm.value.workoutType,
        workoutTiming: this.registerForm.value.workoutTiming
      
     
    };
   
      this.workoutDataService.addWorkoutData(workoutEntry);


    console.log('Workout Data:', this.workoutDataService.getWorkoutData());
    
   
    this.registerForm.reset(); 
    
  }

  
    
    
  


  get UserName():FormControl{
    return this.registerForm.get("userName") as FormControl;
  }
  get WorkoutType():FormControl{
    return this.registerForm.get("workoutType") as FormControl;
  }
  get WorkoutTiming():FormControl{
    return this.registerForm.get("workoutTiming") as FormControl;
  }
  

 
}
