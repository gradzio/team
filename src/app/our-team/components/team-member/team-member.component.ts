import { Component, Input, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/core/models/presentation/our-team';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent {
  @Input() teamMember: TeamMember;
  constructor() {}
  mailto(email: string): string {
    return `mailto:${email}`;
  }
}
