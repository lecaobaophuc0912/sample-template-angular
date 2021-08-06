import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('postData') postData: Post;
  @Output('clickOnMoon') clickOnMoon: EventEmitter<Post> = new EventEmitter();

  moonState: boolean = false;
  numberOfCharUpper: number = 3;
  randomIndexUpper: Array<number> = [];
  crescentMoon: string = 'https://img.icons8.com/emoji/452/crescent-moon-emoji.png';
  fullMoonIcon: string = 'https://i.pinimg.com/originals/bd/04/b1/bd04b127af3560468fe5af5484f40236.png';

  get stateOfMoon() {
    return this.moonState ? this.fullMoonIcon : this.crescentMoon;
  }

  getRandomIndexUpper(): Array<number> {
    let arrUpperIndex: Array<number> = [];
    if (this.postData) {
      for (let i = 0; i < this.numberOfCharUpper; i++) {
        arrUpperIndex.push(Utils.getRandomInt(0, this.postData.name.length - 1));
      }
    }
    return arrUpperIndex;
  }

  constructor() { }

  ngOnInit() {
    this.randomIndexUpper.push(...this.getRandomIndexUpper());
  }

  onClickMoonIcon() {
    this.moonState = !this.moonState;
    this.clickOnMoon.emit(this.postData);
  }
}
