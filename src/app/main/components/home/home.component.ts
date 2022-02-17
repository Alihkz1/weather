import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SeachCityComponent } from '../seach-city/seach-city.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(SeachCityComponent, { height: '30%', width: '80%' });
  }

  ngOnInit(): void {}
}
