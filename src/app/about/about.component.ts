import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private route:Router){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
about(){
    this.route.navigate(['/about'])
  }
}
