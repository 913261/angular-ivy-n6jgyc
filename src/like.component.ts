export class LikeComponent {
    //likeCount: number;
    //isSelected: boolean;

    constructor(public likeCount: number, public isSelected: boolean){

    }

    onClick(){
   /*   if (this.isSelected){
          this.likeCount--;
          this.isSelected = false;
      }
      else {
          this.likeCount++;
          this.isSelected = true;
      }*/
      this.likeCount += (this.isSelected) ? 1 : -1; 
      this.isSelected = !this.isSelected;
    }
}