import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { NewsComponent } from './components/news/news.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"services",
    loadComponent:()=>import('./components/services/services.component').then(m=>m.ServicesComponent)
  },
  {
    path:"specialities",
    loadComponent:()=>import('./components/specialities/specialities.component').then(m=>m.SpecialitiesComponent)    
  },
  {
    path:"news",
    loadComponent:()=>import('./components/news/news.component').then(m=>m.NewsComponent)
    
  },
  {
    path:"contact_us",
    loadComponent:()=>import('./components/contact-us/contact-us.component').then(m=>m.ContactUsComponent)
    
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
