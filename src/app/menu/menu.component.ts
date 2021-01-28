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
      link: 'home',
    },
    {
      title: 'Filing Process',
      expanded: false,
      children: [
        {
          title: 'Ways To File',
          link: 'filing/ways-to-file',
        },
        {
          title: 'Filing Online',
          link: 'filing/online',
        },
      ],
    },
    {
      title: 'Tax Shelters',
      expanded: false,
      children: [
        {
          title: 'TFSA',
          link: 'shelters/tfsa',
        },
        {
          title: 'RRSP',
          link: 'shelters/rrsp',
        },
        {
          title: 'RESP',
          link: 'shelters/resp',
        },
      ],
    },
    {
      title: 'Investment Taxes',
      expanded: false,
      children: [
        {
          title: 'Capital Gains Tax',
          link: 'investment/capital-gains',
        },
        {
          title: 'Dividend Tax',
          link: 'investment/dividend',
        },
      ],
    },
    {
      title: 'Income Taxes',
      expanded: false,
      children: [
        {
          title: 'Tax Brackets',
          link: 'income/brackets',
        },
        {
          title: 'Tax Deductions',
          expanded: false,
          children: [
            {
              title: 'General',
              link: 'income/deductions',
            },
            {
              title: 'Basic Personal Amount',
              link: 'income/bpa',
            },
            {
              title: 'Eligible Medical Expenses',
              link: 'income/medical',
            },
            {
              title: 'Tuition & Education',
              link: 'income/education',
            },
            {
              title: 'Child Care Expenses',
              link: 'income/child-care',
            },
      ],
        },
      ],
    },
    {
      title: 'Harmonized Sales Tax (HST)',
      expanded: false,
      children: [
        {
          title: 'What is HST',
          link: 'hst/what-is-hst',
        },
        {
          title: 'Exemptions',
          link: 'hst/exemptions',
        },
      ],
    },
    {
      title: 'Works Cited',
      link: 'works-cited',
    },
  ];

}
