import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UpdatepopupComponent,
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    AppRoutingModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSort
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
