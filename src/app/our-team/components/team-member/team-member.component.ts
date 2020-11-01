import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageUrls } from 'src/app/core/models/common';
import { TeamMember } from 'src/app/core/models/presentation/our-team';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent {
  @Input() teamMember: TeamMember;
  constructor(private sanitizer: DomSanitizer) {}

  mailto(email: string): string {
    return `mailto:${email}`;
  }

  srcset(images: ImageUrls) {
    return Object.keys(images)
      .map((key) => {
        return `${key} ${this.sanitizer.bypassSecurityTrustUrl(images[key])}`;
      })
      .reduce((prev, next) => {
        return `${prev} ${next}`;
      }, '');
  }
}
