import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubFollowersComponent } from './git-hub-followers.component';

describe('GitHubFollowersComponent', () => {
  let component: GitHubFollowersComponent;
  let fixture: ComponentFixture<GitHubFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubFollowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
