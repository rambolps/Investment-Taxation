import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbIconModule, NbActionsModule, NbInputModule,} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CitedComponent } from './cited/cited.component';
import { WaysComponent } from './filing/ways/ways.component';
import { OnlineComponent } from './filing/online/online.component';
import { TfsaComponent } from './shelters/tfsa/tfsa.component';
import { RrspComponent } from './shelters/rrsp/rrsp.component';
import { RespComponent } from './shelters/resp/resp.component';
import { CapitalComponent } from './investment/capital/capital.component';
import { DividendComponent } from './investment/dividend/dividend.component';
import { BracketsComponent } from './income/brackets/brackets.component';
import { WhatComponent } from './hst/what/what.component';
import { ExemptionsComponent } from './hst/exemptions/exemptions.component';
import { DeductionsComponent } from './income/deductions/deductions.component';
import { CalculatorComponent } from './investment/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CitedComponent,
    WaysComponent,
    OnlineComponent,
    TfsaComponent,
    RrspComponent,
    RespComponent,
    CapitalComponent,
    DividendComponent,
    BracketsComponent,
    WhatComponent,
    ExemptionsComponent,
    DeductionsComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbMenuModule,
    NbButtonModule,
    NbActionsModule,
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
