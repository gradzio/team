import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { OurTeam, TeamMember } from 'src/app/core/models/presentation/our-team';
import { OurTeamService } from '../../services/our-team.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.page.html',
  styleUrls: ['./our-team.page.scss'],
})
export class OurTeamPage implements OnInit, OnDestroy {
  teamMembers: TeamMember[] = [];
  title = '';
  isLoading = true;
  subscriber = new Subscriber();
  constructor(private ourTeamService: OurTeamService) {}

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.subscriber.add(
      this.ourTeamService.ourTeam$().subscribe((ourTeam) => {
        this.title = ourTeam.title;
        this.teamMembers = ourTeam.teamMembers;
        this.isLoading = false;
      })
    );
  }
}
