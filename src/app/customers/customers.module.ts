import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox/filter-textbox.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  exports: [
    CustomersComponent
  ],
  imports: [
    CommonModule
  ]

})
export class CustomersModule{
}
