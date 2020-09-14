import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  homeImg="../assets/images/home.jpg"
  
  constructor() { }

  ngOnInit(): void {
  }

}
