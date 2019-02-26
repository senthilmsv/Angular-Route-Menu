import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { DevelopmentComponent } from './development/development.component';
import { ItSoftwareComponent } from './it-software/it-software.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      CoursesComponent,
      CourseCardsComponent,
      CourseCategoryComponent,
      CategoriesMenuComponent,
      DevelopmentComponent,
      ItSoftwareComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
