
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home",
    component: HomeComponent
  },
  {
    path: "add-book",
    loadChildren: () => import("./add/add.module").then(x => x.AddModule)
  },
  {
    path: "book-list",
    loadChildren: () => import("./list/list.module").then(x => x.ListModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
