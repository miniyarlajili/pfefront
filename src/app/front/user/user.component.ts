import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  constructor(private route:Router){}
  ngOnInit(): void {
 //   throw new Error('Method not implemented.');
  }
  about(){
    this.route.navigate(['/about'])
  }
}
