import { ItSoftwareComponent } from './it-software/it-software.component';
import { DevelopmentComponent } from './development/development.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: 'courses',
      component: CoursesComponent,
      children: [
          {
              path: '',
              component: CourseCardsComponent
          },
          {
            path: 'development',
            component: DevelopmentComponent
          },
          {
            path: 'it-software',
            component: ItSoftwareComponent
          },          
          {
            path: ':id',
            component: CourseCategoryComponent
          },
          {
              path: '',
              outlet: 'sidemenu',
              component: CategoriesMenuComponent
          },
          {
              path: ':id',
              outlet: 'sidemenu',
              component: CategoriesMenuComponent
          }
      ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
