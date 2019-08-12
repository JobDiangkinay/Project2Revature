import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { UserarticleComponent } from './userarticle/userarticle.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { EditorHandleArticleComponent } from './editor-handle-article/editor-handle-article.component';
import { AppmainComponent } from './appmain/appmain.component';


@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    NavbarComponent,
    ProfileEditorComponent,
    UserarticleComponent,
    LoginComponentComponent,
    EditorHandleArticleComponent,
    AppmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
