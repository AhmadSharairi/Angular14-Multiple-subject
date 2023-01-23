import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { PostService } from './../services/post.service';
import { NotFoundError } from './../common/NotFoundError';
import { BadInput } from './../common/bad-input';



@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
  data: any;

  constructor(private service: PostService) { }

  


  ngOnInit() {
    this.service.getAll()
      .subscribe(data => this.data = data);

  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    this.data.splice(0, 0, post); //add to the first field


    input.value = '';

    this.service.create(post)
      .subscribe(
        (newPost) => {
          post['id'] = newPost.id;



        }, (error: AppError) => {
          this.data.splice(0, 1);

          if (error instanceof BadInput) { //this.form.setErrors(error.orginalError);} 
          } else throw error;
        });



  }
  updatePost(post: any) {
    this.service.update(post)
      .subscribe(
        (updatedPost) => {
          console.log(updatedPost);

        });


  }

  deletePost(post) {
    let index = this.data.indexOf(post);
    this.data.splice(index, 1);

    this.service.delete(post).subscribe(
      () => { null },
      (error: AppError) => {
        this.data.splice(index, 0, post);
        if (error instanceof NotFoundError)
          alert('This Post has already been deleted');
        else {
          throw error;

        }


      }

    );



  }
}
















