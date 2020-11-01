import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './core/api/api-client.service';
import { mapToOurTeam } from './core/mappers/our-team-mapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private apiClient: ApiClientService) {}
}
