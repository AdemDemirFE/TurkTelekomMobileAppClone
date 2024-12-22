import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleCodePagePageRoutingModule } from './example-code-page-routing.module';

import { ExampleCodePagePage } from './example-code-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleCodePagePageRoutingModule
  ],
  declarations: [ExampleCodePagePage]
})
export class ExampleCodePagePageModule {}
