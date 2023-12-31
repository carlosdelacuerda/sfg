import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { SponsoredComponent } from './components/sponsored/sponsored.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    SponsoredComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class ListModule { }
