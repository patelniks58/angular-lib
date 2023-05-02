import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    CommonComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    CommonComponent
  ]
})
export class CommonModule { }
