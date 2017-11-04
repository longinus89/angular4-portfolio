import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ShowAuthedDirective } from './show-authed.directive';
import { Tab, Tabs } from './tabs';
import { ModalComponent } from './modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    ShowAuthedDirective,
    Tab,
    Tabs,
    ModalComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    ShowAuthedDirective,
    Tab,
    Tabs,
    ModalComponent
  ]
})
export class SharedModule {}
