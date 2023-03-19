import { Component, OnInit } from '@angular/core';

import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBell = faBell;
  faUser = faUser;

  notifications: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
