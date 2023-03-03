import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    //ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ListModule { }
