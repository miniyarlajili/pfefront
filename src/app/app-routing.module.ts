import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RechercheresidentComponent } from './rechercheresident/rechercheresident.component';
import { RechercheresidentactuelleComponent } from './rechercheresidentactuelle/rechercheresidentactuelle.component';
import { VariablegeneraleComponent } from './variablegenerale/variablegenerale.component';
import { PromotionComponent } from './promotion/promotion.component';
import { UserComponent } from './front/user/user.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:UserComponent},
 // {path:'**',component:UserComponent},

  {path:'admin',component:DashboardComponent},
  {path:'recherche',component:RechercheresidentComponent},
  {path:'rechercheactuelle',component:RechercheresidentactuelleComponent},
  {path:'variablegenerale',component:VariablegeneraleComponent},
  {path:'promotion',component:PromotionComponent},
  {path:'user',component:UserComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
