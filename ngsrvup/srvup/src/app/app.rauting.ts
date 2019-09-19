import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyComponentComponent } from './my-component/my-component.component';

const appRoutes: Routes = [
  {
    path: 'videos',
    component: MyComponentComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
