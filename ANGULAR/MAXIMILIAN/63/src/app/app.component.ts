import { Component } from "@angular/core";

interface IonServerAdded {
  serverName: string;
  serverContent: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    {
      type: "server",
      name: "Test server",
      content: "just a test server",
    },
  ];

  onServerAdded(serverData: IonServerAdded) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: IonServerAdded) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
}
