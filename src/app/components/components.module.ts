import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { HomesliderComponent } from './homeslider/homeslider.component';



@NgModule({
  declarations: [LogoComponent, HomesliderComponent],
  exports: [LogoComponent, HomesliderComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
