import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  constructor() { }

  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '',
    },
    {
      title: 'Filing Process',
      expanded: false,
      children: [
        {
          title: 'Ways To File',
        },
        {
          title: 'T4 | T4E | T4A',
        },
      ],
    },
    {
      title: 'Tax Shelters',
      expanded: false,
      children: [
        {
          title: 'TFSA',
        },
        {
          title: 'RRSP',
        },
        {
          title: 'RESP',
        },
      ],
    },
    {
      title: 'Investment Taxes',
      expanded: false,
      children: [
        {
          title: 'Bond Tax',
        },
        {
          title: 'Capital Gains Tax',
        },
        {
          title: 'Dividend Tax',
        },
      ],
    },
    {
      title: 'Income Taxes',
      expanded: false,
      children: [
        {
          title: 'Tax Brackets',
        },
        {
          title: 'Basic Personal Amount',
        },
      ],
    },
    {
      title: 'Works Cited',
    },
  ];

}
