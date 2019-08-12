import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component'
const routes: Routes = [
  { path: 'User', component: UserinfoComponent },
  { path: 'Login', component:  LoginComponentComponent},
  { path: 'Signup', component:  ProfileEditorComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
