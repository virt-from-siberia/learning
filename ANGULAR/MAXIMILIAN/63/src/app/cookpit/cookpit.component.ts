import { Component, EventEmitter, OnInit, Output } from "@angular/core";

interface IServerCreated {
  serverName: string;
  serverContent: string;
}

@Component({
  selector: "app-cookpit",
  templateUrl: "./cookpit.component.html",
  styleUrls: ["./cookpit.component.css"],
})
export class CookpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<IServerCreated>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<IServerCreated>();

  newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
