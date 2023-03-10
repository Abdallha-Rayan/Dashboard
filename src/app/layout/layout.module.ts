import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule ,
    RouterModule
  ] ,
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent
  ]
})
export class LayoutModule {}
