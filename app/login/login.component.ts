import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  moduleId: module.id
})
export class LoginComponent implements OnInit {


  constructor(private routerExtensions: RouterExtensions, private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  // tslint:disable-next-line:member-ordering
  user = {
    email: "",
    password: ""
  };

  login() {

    firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: this.user.email,
          password: this.user.password
        }
      })
      .then((result) => {
        JSON.stringify(result);
        console.log("##### successfully login #####");
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
      })
      .catch((error) => {
        dialogs.alert({
          title: "Error",
          message: "Incorrect username or password"
        }).then(() => {
          console.log("Dialog closed!");
        });
        console.log(error);
      });

  }
}
