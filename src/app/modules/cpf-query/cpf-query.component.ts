import { Component, OnInit } from '@angular/core';

import { faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cpf-query',
  templateUrl: './cpf-query.component.html',
  styleUrls: ['./cpf-query.component.scss']
})
export class CpfQueryComponent implements OnInit {

  faUser = faUser;
  faCircleCheck = faCircleCheck;
  faWallet = faWallet;

  hasData: boolean = true;
  cpfName: string = 'Bruno da Silva Costa';
  cpfStatus: string = 'Regular';
  checkingAccount: string = '3453673-2';

  constructor() { }

  ngOnInit(): void {
  }

}
