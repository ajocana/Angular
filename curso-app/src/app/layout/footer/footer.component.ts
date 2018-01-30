import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public autor: string;
  public lugar: string;
  public fecha: Date;

  constructor() {}

  ngOnInit() {
    this.autor = 'Tú mismo...';
    this.lugar = 'Donde tú estás';
    this.fecha = new Date();
  }
}
