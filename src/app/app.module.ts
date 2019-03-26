import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import {DataService} from './data.service';
import { WorkerComponent } from './worker/worker.component';
import {WorkerService} from './worker.service';
import { GithubComponent } from './github/github.component';
import {GihubService} from './gihub.service';
import {FormsModule} from '@angular/forms';
import { DekanatComponent } from './dekanat/dekanat.component';
import {DekanatService} from './dekanat.service';
import { GroupComponent } from './group/group.component';
import {GroupService} from './group.service';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    WorkerComponent,
    GithubComponent,
    DekanatComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, WorkerService, GihubService, DekanatService, GroupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
