import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchCitiesByNameComponent } from '../search-cities-by-name/search-cities-by-name.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(SearchCitiesByNameComponent, {
      height: '30%',
      width: '60%',
    });
  }

  ngOnInit(): void {}
}
