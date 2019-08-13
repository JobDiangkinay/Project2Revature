import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component'
import { AppmainComponent } from './appmain/appmain.component';
const routes: Routes = [
  { path: '',     component: AppmainComponent},
  { path: 'User', component: UserinfoComponent },
  { path: 'Login', component:  LoginComponentComponent},
  { path: 'Login', component:  ProfileEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
