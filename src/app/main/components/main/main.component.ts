import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(InputComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  ngOnInit(): void {}
}
