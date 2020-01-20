import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { UserService } from "./service/user.service";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "user-detail/:id", component: UserDetailComponent },
  { path: "", redirectTo: "/user", pathMatch: "full" },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
