import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "~/login/login.component";
import { SignupComponent } from "~/signup/signup.component";
import { HomeComponent } from "./home/home.component";

export const COMPONENTS = [HomeComponent];

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },

    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "home", component: HomeComponent }

    // { path: "item/:id", component: ItemDetailComponent, outlet: "homeTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
