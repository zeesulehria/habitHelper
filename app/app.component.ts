import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        firebase.init({
          // Optionally pass in properties for database, authentication and cloud messaging,
          // see their respective docs.
        }).then(
          () => {
                console.log("#######################################firebase.init lkdjfdslfs lfjsl  done");
            },
          (error) => {
            console.log(`############################################firebase.init error: ${error}`);
          }
        );
      }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
