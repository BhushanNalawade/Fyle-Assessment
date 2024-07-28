import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DisplayusersComponent } from './displayusers/displayusers.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
    
  },
  
  {
    path:'home',
    
    component:UserComponent,
    
  },
  
  {
    path:'users',
    component:DisplayusersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
