import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CompanyReviewsCommentModel } from 'src/app/Models/CompanyReviewsComment';
import { Comment } from 'src/app/Models/Comment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments!: CompanyReviewsCommentModel[];
  //items!: CompanyReviewsCommentModel[];


  ngOnInit() {
    debugger
    console.log("comments")
    console.log(this.comments);
  }
  // toggleCollapse(index: number) {
  //   debugger  
  //   const commentContainer = document.getElementById(index.toString());
  //   if (commentContainer) {
  //     const commentReplies = commentContainer.nextElementSibling as HTMLElement;
  //     if (commentReplies) {
  //       commentReplies.style.display = commentReplies.style.display === 'none' ? 'block' : 'none';
  //     }
  //   }
  // }

  toggleCollapse(commentId: string) {
    debugger
    const commentContainer = document.getElementById("comment1Replies"+commentId) as HTMLElement;

    
    if (commentContainer) {
      commentContainer.style.display = commentContainer.style.display === 'none' ? 'block' : 'none';
        // const commentReplies = commentContainer.nextElementSibling as HTMLElement;
        // if (commentReplies) {
        //     commentReplies.style.display = commentReplies.style.display === 'none' ? 'block' : 'none';
        // }
    }
}



}
