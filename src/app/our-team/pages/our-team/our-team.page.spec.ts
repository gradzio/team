import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamPage } from './our-team.page';

describe('OurTeamComponent', () => {
  let component: OurTeamPage;
  let fixture: ComponentFixture<OurTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OurTeamPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
