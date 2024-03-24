import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private route:Router){}
  ngOnInit(): void {

  }
  title = 'pfe';
  rechercheresident(){
    this.route.navigate(['/recherche'])
  }
  dashboard(){
    this.route.navigate(['/admin'])
  }
  rechercheresidentactuelle(){
    this.route.navigate(['/rechercheactuelle'])
  }
  variablegenerale(){
    this.route.navigate(['/variablegenerale'])
  }
  promotion(){
    this.route.navigate(['/promotion'])
  }
}
