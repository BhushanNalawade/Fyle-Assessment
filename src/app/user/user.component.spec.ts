import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutDataService } from '../workout-data.service';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let workoutDataService: WorkoutDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: WorkoutDataService}],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    workoutDataService = TestBed.inject(WorkoutDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const userNameControl = component.registerForm.get('userName');
    const workoutTypeControl = component.registerForm.get('workoutType');
    const workoutTimingControl = component.registerForm.get('workoutTiming');

    expect(userNameControl).toBeTruthy();
    expect(workoutTypeControl).toBeTruthy();
    expect(workoutTimingControl).toBeTruthy();
  });

  it('should validate form controls', () => {
    const userNameControl = component.registerForm.get('userName');
    const workoutTypeControl = component.registerForm.get('workoutType');
    const workoutTimingControl = component.registerForm.get('workoutTiming');

    expect(userNameControl?.valid).toBeFalsy();
    expect(workoutTypeControl?.valid).toBeFalsy();
    expect(workoutTimingControl?.valid).toBeFalsy();

    userNameControl?.setValue('John Doe');
    workoutTypeControl?.setValue('Running');
    workoutTimingControl?.setValue('30');

    expect(userNameControl?.valid).toBeTruthy();
    expect(workoutTypeControl?.valid).toBeTruthy();
    expect(workoutTimingControl?.valid).toBeTruthy();
  });

  it('should not submit invalid form', () => {
    spyOn(workoutDataService, 'addWorkoutData');
    component.onSubmit();

    expect(workoutDataService.addWorkoutData).not.toHaveBeenCalled();
  });

  it('should submit valid form and reset it', () => {
    spyOn(workoutDataService, 'addWorkoutData').and.callThrough();

    component.registerForm.get('userName')?.setValue('John Doe');
    component.registerForm.get('workoutType')?.setValue('Running');
    component.registerForm.get('workoutTiming')?.setValue('30');

    component.onSubmit();

    expect(workoutDataService.addWorkoutData).toHaveBeenCalledWith({
      userName: 'John Doe',
      workoutType: 'Running',
      workoutTiming: '30'
    });

    expect(component.registerForm.valid).toBeFalsy();
    expect(component.registerForm.get('userName')?.value).toBeNull();
    expect(component.registerForm.get('workoutType')?.value).toBeNull();
    expect(component.registerForm.get('workoutTiming')?.value).toBeNull();
  });
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
