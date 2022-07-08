import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomHttpInterceptorService } from "./CustomHttpInterceptorService";
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [EmployeeService,{provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true},],
  bootstrap: [AppComponent],
})
export class AppModule { }
