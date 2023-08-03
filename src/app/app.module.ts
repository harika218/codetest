import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RevenueComponentComponent } from './revenue-component/revenue-component.component';
import { MapComponentComponent } from './map-component/map-component.component';

const pageRouting:Routes = [
   {path:'', component: RevenueComponentComponent },
   {path:'maps', component:MapComponentComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    RevenueComponentComponent,
    MapComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(pageRouting),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
