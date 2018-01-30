import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public logo: string;
  constructor() {}

  ngOnInit() {
    this.title = 'Angular avanzado';
    this.logo = '../../../assets/logo.svg';
  }
}
