import { NgModule } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        NgForOf
    ],
  exports: [
   SidebarComponent
  ]
})
export class SharedModule { }
