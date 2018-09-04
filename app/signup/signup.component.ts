import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  moduleId: module.id
})
export class SignupComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions, private _page: Page) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  // tslint:disable-next-line:member-ordering
  registerUser = {
    email: "",
    password: ""
  };

  register() {

    firebase.createUser({
      email: this.registerUser.email,
      password: this.registerUser.password
    }).then((result) => {
      dialogs.alert({
        title: "User created"
      }).then(() => {
        console.log("Dialog closed!");
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
      });

    }, (errorMessage) => {
      dialogs.alert({
       title: "No user created",
       message: errorMessage,
       okButtonText: "OK, got it"
      });

    }
    );
  }

}
