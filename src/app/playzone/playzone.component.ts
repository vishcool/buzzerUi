import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playzone',
  templateUrl: './playzone.component.html',
  styleUrls: ['./playzone.component.css'],
})
export class PlayzoneComponent implements OnInit {
  constructor() {}
  time: number = 20;
  ngOnInit(): void {
    // let timer = setInterval(() => {
    //   if (this.time <= 1) clearInterval(timer);

    //   this.time = this.time - 1;
    // }, 1000);
  }

   movetoGamePage() {

  }
}
