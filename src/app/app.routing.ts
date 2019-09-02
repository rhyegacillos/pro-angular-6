import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./core/form/form.component";
import {TableComponent} from "./core/table/table.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {ProductCountComponent} from "./core/product-count/product-count.component";
import {CategoryCountComponent} from "./core/category-count/category-count.component";


const routes: Routes = [
  {path: 'form/:mode/:id', component: FormComponent},
  {path: 'form/create', component: FormComponent},
//  { path: 'does', redirectTo: '/form/create', pathMatch: 'prefix' },
  {
    path: 'table',
    component: TableComponent,
    children: [
      {path: 'products', component: ProductCountComponent},
      {path: 'categories', component: CategoryCountComponent}
    ]
  },
  { path: 'table/:category', component: TableComponent },
  { path: 'table', component: TableComponent },
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: "**", component: NotFoundComponent}
];
export const routing = RouterModule.forRoot(routes);
