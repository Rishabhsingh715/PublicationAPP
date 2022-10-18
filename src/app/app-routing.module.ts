import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPublicationsComponent } from './modules/add-publications/add-publications.component';
import { AddResourcesComponent } from './modules/add-resources/add-resources.component';
import { ListAllComponent } from './modules/list-all/list-all.component';

const routes: Routes = [
  {path: '',
  component: ListAllComponent 
  },
  {path: 'addResource',
   component: AddResourcesComponent     
  },
  {path: 'addPublications',
   component: AddPublicationsComponent     
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
