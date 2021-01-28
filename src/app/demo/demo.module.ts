import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from './default/default.component';
import {RouterModule} from '@angular/router';
import {routes} from './demo-routing.module';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DemoModule { }
