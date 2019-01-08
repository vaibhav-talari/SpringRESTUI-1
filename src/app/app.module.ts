import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './component/index/index.component';
import { AddbookComponent } from './component/addbook/addbook.component';
import { ViewallbooksComponent } from './component/viewbooks/viewallbooks/viewallbooks.component';
import { ViewsinglebookComponent } from './component/viewbooks/viewsinglebook/viewsinglebook.component';


const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: IndexComponent },
 { path: 'addbook', component: AddbookComponent},
 { path: 'viewall', component: ViewallbooksComponent},
 { path: 'viewbook/:bookid', component: ViewsinglebookComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AddbookComponent,
    ViewallbooksComponent,
    ViewsinglebookComponent
  ],
  imports: [
    FormsModule,//add this then buildin form modules of angular can be used such as ngModel etc.
    RouterModule.forRoot(APP_ROUTES),//add this then router module will work
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
