import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: ` <p>This is Danger</p> `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
        border-radius: 10px;
      }
    `,
  ],
})
export class WarningAlertComponent {}
