import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPublicationsComponent } from './modules/add-publications/add-publications.component';
import { ListAllComponent } from './modules/list-all/list-all.component';
import { AddResourcesComponent } from './modules/add-resources/add-resources.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddPublicationsComponent,
    ListAllComponent,
    AddResourcesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
