import { Component, OnInit } from "@angular/core";
import { UserModel } from "../models/user.model";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  private users: UserModel[];
  flag: boolean = false;
  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(
      data => {
        // console.log(data);
        this.users = data;
        if (this.users) {
          this.flag = true;
        }
      },
      error => {
        console.log("ERROR!!!");
      }
    );
  }
}
