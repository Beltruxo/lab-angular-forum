import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ThreadListComponent } from './threadList/threadList.component';
import { MyServiceService } from './my-service.service';
import { RouterModule } from '@angular/router';
import { routes } from './my-route.routing';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutesService } from './authRoutes.service';


@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    LoginComponent,
    SignupComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  
  ],
  providers: [MyServiceService,AuthRoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
