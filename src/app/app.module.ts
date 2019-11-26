import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MainRouteComponent, } from './components/main-route/main-route.component';
import { MainRoutingModule, routingComponent } from './main-routing/main-routing.module';
import { LoginService } from './services/login.service';
import { HighlightDirective } from './highlight.directive';
import { FirstModule } from './first/first.module';
import { FileUploadedWithNodeComponent } from './file-uploaded-with-node/file-uploaded-with-node.component';
import { FormsModule } from '@angular/forms';
import { NgSmartTableComponent } from './components/ng-smart-table/ng-smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HighlightDirective,
    FileUploadedWithNodeComponent,
    NgSmartTableComponent,    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MainRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FirstModule,
    Ng2SmartTableModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule { }
