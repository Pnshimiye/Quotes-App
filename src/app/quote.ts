export class Quote {
  public showDetails:boolean;
  constructor(public Author:string, public Narration:string,public Postedby: string, public upvote:number,public downvote:number){this.showDetails=false}
  
}
