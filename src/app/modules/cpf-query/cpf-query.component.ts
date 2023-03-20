import { Component, OnInit } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cpf-query',
  templateUrl: './cpf-query.component.html',
  styleUrls: ['./cpf-query.component.scss']
})
export class CpfQueryComponent implements OnInit {

  faUser = faUser;
  faCircleCheck = faCircleCheck;

  hasData: boolean = false;
  cpfName: string = 'Bruno da Silva Costa';
  cpfStatus: string = 'Regular';

  constructor() { }

  ngOnInit(): void {
  }

}
