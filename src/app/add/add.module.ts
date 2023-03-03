import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    //AddComponent
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AddModule { }
