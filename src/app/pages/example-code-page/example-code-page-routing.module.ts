import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleCodePagePage } from './example-code-page.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleCodePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleCodePagePageRoutingModule {}
