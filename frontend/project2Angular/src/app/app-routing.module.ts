import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';


const routes: Routes = [
  { path: 'User', component: UserinfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
