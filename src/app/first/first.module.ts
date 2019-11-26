import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondInputOutputComponent } from './second-input-output/second-input-output.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstComponent, SecondInputOutputComponent],
  exports : [FirstComponent]
})
export class FirstModule { }
