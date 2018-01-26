import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CollegesComponent } from './colleges/colleges.component';
import { CommitteeComponent } from './committee/committee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupManagerComponent } from './group-manager/group-manager.component';
import { LoginComponent } from './login/login.component';
import { MinutesComponent } from './minutes/minutes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingsComponent } from './settings/settings.component';

import { PrivateComponent } from './layout/private/private.component';

import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '',
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  { path: '',
    component: PrivateComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'colleges', component: CollegesComponent },
      { path: 'committee', component: CommitteeComponent },
      { path: 'minutes', component: MinutesComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
