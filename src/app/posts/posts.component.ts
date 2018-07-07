import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  posts;
  
  constructor(private logsService: LogsService) { }

  ngOnInit() {

    // Retrieve posts from the API
    this.logsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  

}
