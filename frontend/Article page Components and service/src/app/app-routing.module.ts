import { ArticleContentComponent } from './article-content/article-content.component';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: 'articles',
component: TableComponent
},
{path: 'Article/:Title', component:ArticleContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
