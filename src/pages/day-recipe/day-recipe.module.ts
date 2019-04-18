import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayRecipePage } from './day-recipe';

@NgModule({
  declarations: [
    DayRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(DayRecipePage),
  ],
})
export class DayRecipePageModule {}
