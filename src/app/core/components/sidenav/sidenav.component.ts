import { Component, OnInit } from '@angular/core';

import { faBars, faMagnifyingGlass, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faStar, faMessage } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faStar = faStar;
  faMessage = faMessage;
  faBuildingColumns = faBuildingColumns;

  sideNavStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(): void {
    this.sideNavStatus = !this.sideNavStatus;
  }

}
