import { Component, OnInit,Output} from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote('Albert Einstein','Imagination is more important than knowledge', 'Pauline Nshimiye',0,0),
    new Quote('Shakespeare','If music be the food of love, play on','Pauline Nshimiye',0,0),
    new Quote('Henry Ford','Obstacles are those frightful things you see when you take your eyes off the goal','Pauline Nshimiye',0,0),
    new Quote(' Socrates','The life which is unexamined is not worth living','Pauline Nshimiye',0,0),
    new Quote(' M.K. Gandhi','Live as if you were to die tomorrow. Learn as if you were to live forever','Pauline Nshimiye',0,0),

]
toogleDetails(index){
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}


// addNewQuote(quote){
//   let quoteLength = this.quotes.length;
//   quote.id=quoteLength+1;
//   quote.postDate = new Date(quote.postDate)
//   this.quotes.push(quote)
// }   

viewQuote(isViewed,index){
  if (isViewed){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].Author}? If Not please refresh the page.`)
    if(toDelete){
      this.quotes.splice(index,1);
    }
     
      };
 
    };


    downVote(isDownvoted,index){
      if (isDownvoted){       
        let dislike=this.quotes[index].downvote
          dislike+= 1
          this.quotes[index].downvote= dislike
    }
   
  }

  upVote(isUpvoted,index){
    if (isUpvoted){       
      let like=this.quotes[index].upvote
        like+= 1
        this.quotes[index].upvote=like
  }
 
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
 
  // goal.completeDate = new Date(goal.completeDate)
  this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }

}
