import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  @ViewChild('video') video;
  blur: boolean;
  sepia: boolean;
  invert: boolean;
  flip: boolean;
  saturate: boolean;
  opacity: boolean;

  constructor() {
   }

  ngOnInit() {
    const videoElement: HTMLVideoElement = this.video.nativeElement;

    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' }
    }).then(stream => {
      videoElement.srcObject = stream;
    });
  }

  getStyles(){
    let filter = '';
    let transform = '';

    if(this.blur){
      filter += 'blur(5px)';
    }
    if(this.saturate){
      filter += 'saturate(350%)';
    }
    if(this.opacity){
      filter += 'opacity(50%)';
    }
    if(this.sepia){
      filter += 'sepia(50%)';
    }
    if(this.invert){
      filter += 'invert(1)';
    }
    if(this.flip){
      transform += 'scaleX(-1)';
    }

    return {
      filter,
      transform
    }
  }

  setOpacity(opacity){
      console.log(opacity)
  }

}