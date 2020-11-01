import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamPage } from './pages/our-team/our-team.page';
import { RouterModule, Routes } from '@angular/router';
import { TeamMemberComponent } from './components/team-member/team-member.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'our-team',
    pathMatch: 'full',
  },
  {
    path: 'our-team',
    component: OurTeamPage,
  },
];

@NgModule({
  declarations: [OurTeamPage, TeamMemberComponent, TeamMemberComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class OurTeamModule {}
