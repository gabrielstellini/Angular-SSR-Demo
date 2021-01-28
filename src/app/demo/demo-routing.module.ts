import {Routes} from '@angular/router';
import {SampleComponent} from '../lazy/sample/sample.component';
import {DefaultComponent} from './default/default.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  }
];
