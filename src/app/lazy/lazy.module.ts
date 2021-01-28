import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample/sample.component';
import {RouterModule} from '@angular/router';
import {routes} from './lazy-routing.module';


@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
