import { SignupFormComponent } from './signup-form/signup-form.component';
import { FavoriteService } from './favorite.service';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { FollowersService } from './services/followers.service';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileService } from './github-profile.service';





@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponentComponent,
    ChangePasswordComponent,
    PostComponent,
    GitHubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent

  ],

  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent             
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent         
      },
      {
        path: 'followers',
        component: GitHubFollowersComponent    
      },


      {
        path: 'posts',
        component: PostComponent                
      },
      {
        path: '**',
        component: NotFoundComponent           
      },



    ])


  ],
  providers: [
    CoursesService,
    AuthorsService,
    FavoriteService,
    PostService,
    FollowersService,
    GithubProfileService,
    { provide: ErrorHandler, useClass: AppErrorHandler },

  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
