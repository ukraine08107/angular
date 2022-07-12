import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersListComponent
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
