import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgSrc="../assets/images/header1.jpg"
  titleTxt = "Indian School of Yoga"
  subTitleTxt = "(An Institute of Yoga Research,Treatement & Training)"
  authorName = "Yoga Rathna Dr.A.S.Ashok Kumar, Ph.D.,(Y.Sc)"

  constructor() { }

  ngOnInit(): void {
  }

}
