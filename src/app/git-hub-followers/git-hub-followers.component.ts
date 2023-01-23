import { Component, OnInit } from '@angular/core';
import { FollowersService } from './../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { observable, switchMap } from 'rxjs';
import { timer, combineLatest , of } from 'rxjs';

@Component({
  selector: 'githubfollowers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.css']
})
export class GitHubFollowersComponent implements OnInit {
  followers: any;


  constructor(  private route : ActivatedRoute, private service : FollowersService) { }

  ngOnInit(): void {
   
   
  
    combineLatest([this.route.paramMap,this.route.queryParamMap])
   .pipe(switchMap(combined=>{
    let id =   combined[0].get('id'); 
    let page =- combined[1].get('page');
    
    return this.service.getAll();
   }))
   .subscribe(followers => this.followers = followers);
  }
}

    






  