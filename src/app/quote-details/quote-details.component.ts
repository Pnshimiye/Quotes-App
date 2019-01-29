import { Component, OnInit,Input,Output,EventEmitter,} from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isViewed= new EventEmitter<boolean>();
  @Output()isDownvoted=new EventEmitter<boolean>();
  @Output()isUpvoted=new EventEmitter<boolean>();

  quoteViewed(viewed:boolean){
    this.isViewed.emit(viewed);
  }

  downVote(complete:boolean){
    this.isDownvoted.emit(complete);
  }
  upVote(complete:boolean){
    this.isUpvoted.emit(complete);
  }
    
      
    


    // goalDelete(complete:boolean){
    //   this.isComplete.emit(complete);

  
 
  constructor() { }

  ngOnInit() {
  }

}


