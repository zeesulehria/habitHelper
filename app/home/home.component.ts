import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, IDataItem } from "../core/data.service";

import { Vibrate } from 'nativescript-vibrate';
import * as LocalNotifications from "nativescript-local-notifications";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;
    vibrator;

    constructor(private itemService: DataService, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.vibrator  = new Vibrate();
        LocalNotifications.hasPermission();
        LocalNotifications.cancelAll();

        LocalNotifications.addOnMessageReceivedCallback(
            function (notification) {
              console.log("ID: " + notification.id);
              console.log("Title: " + notification.title);
              console.log("Body: " + notification.body);
            }
        ).then(
            function() {
              console.log("Listener added");
            }
        )
        // this.items = this.itemService.getItems();

    }

    pattern1(args) {
        setTimeout(() => {
            this.vibrator.vibrate([400, 300, 400, 300, 400, 300, 400, 300, 400, 300, 400]);
        }, 5000);

        LocalNotifications.schedule([{
            id: 1,
            title: 'Lets Straighten that Spine',
            body: 'We give you a gentle nudge to help with your posture',
            ticker: 'The ticker',
            badge: 1,
            groupedMessages:["Straighten you back", "Straighten you neck", "Put your hands on knee", "Here you go..."], //android only
            groupSummary:"Posture Rank: EXPERT", //android only
            ongoing: false, // makes the notification ongoing (Android only)
            // smallIcon: 'res://heart',
            interval: 'minute',
            channel: 'My Channel', // default: 'Channel'
            sound: null, // falls back to the default sound on Android
            at: new Date(new Date().getTime() + (5 * 1000)) // 10 seconds from now
          }]).then(
              function() {
                console.log("Notification scheduled");
              },
              function(error) {
                console.log("scheduling error: " + error);
              }
          )
    }

    pattern2(args) {
        setTimeout(() => {
            this.vibrator.vibrate([1000, 200, 1000, 200, 1000, 200, 1000, 200, 1000]);
        }, 5000);

        LocalNotifications.schedule([{
            id: 1,
            title: 'Lets Straighten that Spine',
            body: 'We give you a gentle nudge to help with your posture',
            ticker: 'The ticker',
            badge: 1,
            groupedMessages:["Straighten you back", "Straighten you neck", "Put your hands on knee", "Here you go..."], //android only
            groupSummary:"Posture Rank: EXPERT", //android only
            ongoing: false, // makes the notification ongoing (Android only)
            // smallIcon: 'res://heart',
            interval: 'minute',
            channel: 'My Channel', // default: 'Channel'
            sound: null, // falls back to the default sound on Android
            at: new Date(new Date().getTime() + (5 * 1000)) // 10 seconds from now
          }]).then(
              function() {
                console.log("Notification scheduled");
              },
              function(error) {
                console.log("scheduling error: " + error);
              }
          )
    }
}
