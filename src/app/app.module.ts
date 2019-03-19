import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstService } from './first.service';
import { DataComponent } from './data/data.component';
import {DataService} from './data.service';
import { WorkerComponent } from './worker/worker.component';
import {WorkerService} from './worker.service';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, WorkerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
