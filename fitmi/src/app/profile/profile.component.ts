import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { CircleProgressComponent } from 'ng-circle-progress';
import { User } from 'src/model/user';
import { Badge } from 'src/model/badge';
import { Session } from 'src/model/session';
import { serverAddress } from 'src/server-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit, AfterViewInit {

  @ViewChild(CircleProgressComponent, { static: false }) progress!: CircleProgressComponent;


  user: User;
  badges: Badge<User | Session>[];
  server = serverAddress;

  constructor(private auth: AuthService) {

    if (auth) {
      this.user = this.auth.getUser();

    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.progress.animate(0, this.user.score % 100);
  }


  logout() {
    this.auth.logout();
  }

  // tslint:disable-next-line: variable-name
  calculateAge(_birthDate: Date): number {
    const birthDate = new Date(_birthDate);
    const year = birthDate.getFullYear();
    const month = birthDate.getMonth();
    const day = birthDate.getDate();
    const date = new Date();

    let age = date.getFullYear() - year;
    if (((date.getMonth() + 1) - month < 0)
      || ((date.getMonth() + 1) === month && date.getDate() - day < 0)) {
      age -= 1;
    }
    return age;
  }

}
