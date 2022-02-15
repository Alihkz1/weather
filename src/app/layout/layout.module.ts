import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from 'src/shared/modules/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HomeComponent],
})
export class LayoutModule {}
