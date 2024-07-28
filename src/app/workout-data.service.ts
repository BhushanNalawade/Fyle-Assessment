import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDataService {
  userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    }
]

  constructor() { 
    this.workoutData = this.userData.flatMap(user => 
      user.workouts.map(workout => ({
        userName: user.name,
        workoutType: workout.type,
        workoutTiming: `${workout.minutes}`
      }))
    );
    console.log(this.workoutData);
  }
  private workoutData: any[] = [];

  addWorkoutData(data: any) {
   
    this.workoutData.push(data);
  }

  getWorkoutData() {
    return this.workoutData;
  }
}
