import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './core/api/api-client.service';
import { mapToOurTeamPage } from './core/mappers/our-team-mapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private apiClient: ApiClientService) {}
  ngOnInit(): void {
    this.apiClient.fetchTeamMembers().subscribe((result) => {
      console.log(mapToOurTeamPage(result));
    });
  }
  title = 'Team';
}
