import { IMAGE_LOADER, ImageLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sang',
  templateUrl: './sang.component.html',
  styleUrls: ['./sang.component.scss']
})
export class SangComponent {

  yourScore!: number | null;
  robotScore!: number | null;
  chooseYou!: number | null;
  chooseRobot!: number | null;

  constructor() {
    this.yourScore = 0;
    this.robotScore = 0;

    this.chooseYou = 0;
    this.chooseRobot = 0;
  }

  public selectRobot() {
    this.chooseRobot = 1 + Math.floor(Math.random() * 3);

    if (this.chooseRobot == 1) {
      var sang = document.getElementById("imagesang");
      sang!.hidden = false;

      var kaghaz = document.getElementById("imagekaghaz");
      kaghaz!.hidden = true;

      var gheychi = document.getElementById("imagegheychi");
      gheychi!.hidden = true;
    }
    else if (this.chooseRobot == 2) {
      var sang = document.getElementById("imagesang");
      sang!.hidden = true;

      var kaghaz = document.getElementById("imagekaghaz");
      kaghaz!.hidden = false;

      var gheychi = document.getElementById("imagegheychi");
      gheychi!.hidden = true;
    }
    else {
      var sang = document.getElementById("imagesang");
      sang!.hidden = true;

      var kaghaz = document.getElementById("imagekaghaz");
      kaghaz!.hidden = true;

      var gheychi = document.getElementById("imagegheychi");
      gheychi!.hidden = false;

    }
  }

  public calcScore() {
    // let shomarande = 0;
    // let tedadbazi = 3;
    // while(shomarande<tedadbazi){

    if ((this.chooseYou == 1 && this.chooseRobot == 3) || (this.chooseYou == 2 && this.chooseRobot == 1) || (this.chooseYou == 3 && this.chooseRobot == 2)) {
      this.yourScore!++;
    }
    else if (this.chooseYou == this.chooseRobot) {
      this.yourScore = this.yourScore;
      this.robotScore = this.robotScore;
    }
    else {
      this.robotScore!++;
    }

    if (this.yourScore == 3 || this.robotScore == 3) {
      if (this.yourScore == 3)
        alert("afffffarin bordiiiiiiiii:)\n\n dokme reset ro bezan va dobare bazi kon.");
      else
        alert("bakhti vali eshkal nadare:(\n\n dokme reset ro bezan va dobare bazi kon.");
    }
  }

  public showImageSang() {
    var gheychi = document.getElementById("image3");
    gheychi!.hidden = true;

    var kaghaz = document.getElementById("image2");
    kaghaz!.hidden = true;

    var sang = document.getElementById("image1");
    sang!.hidden = false;

    this.chooseYou = 1;
  }

  public showImageKaghaz() {
    var element3 = document.getElementById("image3");
    element3!.hidden = true;

    var element1 = document.getElementById("image1");
    element1!.hidden = true;

    var element2 = document.getElementById("image2");
    element2!.hidden = false;

    this.chooseYou = 2;
  }

  public showImageGheychi() {
    var element1 = document.getElementById("image1");
    element1!.hidden = true;

    var element2 = document.getElementById("image2");
    element2!.hidden = true;

    var element3 = document.getElementById("image3");
    element3!.hidden = false;

    this.chooseYou = 3;
  }

  public resetGame() {
    this.yourScore = 0;
    this.robotScore = 0;

    var element3 = document.getElementById("image3");
    element3!.hidden = true;

    var element1 = document.getElementById("image1");
    element1!.hidden = true;

    var element2 = document.getElementById("image2");
    element2!.hidden = true;

    var sang = document.getElementById("imagesang");
    sang!.hidden = true;

    var kaghaz = document.getElementById("imagekaghaz");
    kaghaz!.hidden = true;

    var gheychi = document.getElementById("imagegheychi");
    gheychi!.hidden = true;
  }
}