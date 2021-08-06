import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listPost: Array<Post> = [];
  postClicked: Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getListPost();
  }

  getListPost() {
    this.postService.getListPost().subscribe((res) => {
      if (res.data) {
        this.listPost.push(...res.data);
      } else {
        this.listPost = [];
      }
    }, (error) => {
      console.log(error);
    })
  }

  onMoonIconClick(post: Post) {
    this.postClicked = post;
  }
}
