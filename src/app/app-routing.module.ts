import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';

import { WaysComponent} from './filing/ways/ways.component';
import { OnlineComponent} from './filing/online/online.component';

import { TfsaComponent} from './shelters/tfsa/tfsa.component';
import { RrspComponent} from './shelters/rrsp/rrsp.component';
import { RespComponent} from './shelters/resp/resp.component';

import { CapitalComponent} from './investment/capital/capital.component';
import { DividendComponent} from './investment/dividend/dividend.component';

import { BracketsComponent} from './income/brackets/brackets.component';
import { DeductionsComponent} from './income/deductions/deductions.component';
import { BpaComponent} from './income/bpa/bpa.component';
import { ChildComponent} from './income/child/child.component';
import { MedicalComponent} from './income/medical/medical.component';
import { SchoolComponent} from './income/school/school.component';
import { UnionComponent} from './income/union/union.component';

import { WhatComponent} from './hst/what/what.component';
import { ExemptionsComponent} from './hst/exemptions/exemptions.component';

import { CitedComponent} from './cited/cited.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'filing/ways-to-file', component: WaysComponent},
  {path:'filing/online', component: OnlineComponent},
  {path:'shelters/tfsa', component: TfsaComponent},
  {path:'shelters/rrsp', component: RrspComponent},
  {path:'shelters/resp', component: RespComponent},
  {path:'investment/capital-gains', component: CapitalComponent},
  {path:'investment/dividend', component: DividendComponent},
  {path:'income/brackets', component: BracketsComponent},
  {path:'income/deductions', component: DeductionsComponent},
  {path:'income/bpa', component: BpaComponent},
  {path:'income/child-care', component: ChildComponent},
  {path:'income/medical', component: MedicalComponent},
  {path:'income/education', component: SchoolComponent},
  {path:'income/union-dues', component: UnionComponent},
  {path:'hst/what-is-hst', component: WhatComponent},
  {path:'hst/exemptions', component: ExemptionsComponent},
  {path:'works-cited', component: CitedComponent},
  {path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
