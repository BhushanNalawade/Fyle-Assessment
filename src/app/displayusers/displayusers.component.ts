import { Component  ,OnInit} from '@angular/core';
import { WorkoutDataService } from '../workout-data.service';



@Component({
  selector: 'app-displayusers',
  templateUrl: './displayusers.component.html',
  styleUrls: ['./displayusers.component.css']
})
export class DisplayusersComponent  implements OnInit{
  
  workoutData: any[] = [];
  filteredWorkoutData: any[] = [];
  searchTerm: string = '';
  selectedWorkoutType: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  constructor(private workoutDataService: WorkoutDataService) {
    
    
    
  }
 
  ngOnInit(): void {
    
    this.workoutData = this.workoutDataService.getWorkoutData();
    // localStorage.setItem("form-data", JSON.stringify(this.workoutData));
    this.applyFilter();
    localStorage.setItem("form-data", JSON.stringify(this.workoutData));
    let data = JSON.parse(localStorage.getItem("form-data")|| '{}');
    
    console.log(data)
    
  }

  
  applyFilter() {
    this.filteredWorkoutData = this.workoutData.filter(workout => {
      const matchesSearchTerm = workout.userName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesWorkoutType = this.selectedWorkoutType ? workout.workoutType === this.selectedWorkoutType : true;
      return matchesSearchTerm && matchesWorkoutType;
    });
  }

  pageChanged(event: number) {
    this.currentPage = event;
  }
  }


  
  

