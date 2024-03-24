import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechercheresidentComponent } from './rechercheresident/rechercheresident.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { format } from 'path';
import { RechercheresidentactuelleComponent } from './rechercheresidentactuelle/rechercheresidentactuelle.component';
import { VariablegeneraleComponent } from './variablegenerale/variablegenerale.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './front/user/user.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RechercheresidentComponent,
    RechercheresidentactuelleComponent,
    VariablegeneraleComponent,
    PromotionComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule


  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
