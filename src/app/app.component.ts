import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [];
  selectedImage: any;
  selecteImageIndex: number;

 constructor(){
   this.images.push({src:'https://www.artsfon.com/large/201412/38406.jpg?img='+ Math.random()});
   this.images.push({src:'https://wallpapersite.com/images/wallpapers/forest-3000x1875-path-hd-4221.jpg?img='+ Math.random()});
   this.images.push({src:'https://www.artsfon.com/large/201412/38406.jpg?img='+ Math.random()});
   this.images.push({src:'https://wallpapersite.com/images/wallpapers/forest-3000x1875-path-hd-4221.jpg?img='+ Math.random()});
   this.images.push({src:'https://www.artsfon.com/large/201412/38406.jpg?img='+ Math.random()});
   this.images.push({src:'https://wallpapersite.com/images/wallpapers/forest-3000x1875-path-hd-4221.jpg?img='+ Math.random()});
   this.images.push({src:'https://www.artsfon.com/large/201412/38406.jpg?img='+ Math.random()});
   this.images.push({src:'https://wallpapersite.com/images/wallpapers/forest-3000x1875-path-hd-4221.jpg?img='+ Math.random()});
   this.images.push({src:'https://www.artsfon.com/large/201412/38406.jpg?img='+ Math.random()});
   this.images.push({src:'https://wallpapersite.com/images/wallpapers/forest-3000x1875-path-hd-4221.jpg?img='+ Math.random()});
   this.images.push({src:'https://www.artsfon.com/large/201412/38406.jpg?img='+ Math.random()});
   this.images.push({src:'https://wallpapersite.com/images/wallpapers/forest-3000x1875-path-hd-4221.jpg?img='+ Math.random()});
   this.images.push({src:'https://www.artsfon.com/large/201412/38406.jpg?img='+ Math.random()});
   this.images.push({src:'https://wallpapersite.com/images/wallpapers/forest-3000x1875-path-hd-4221.jpg?img='+ Math.random()});
   
 }



  displayImage(i):  void{
    console.log(i, this.images[i]);
    this.selecteImageIndex = i;
    this.selectedImage = this.images[i];
  }

  prevImage() : void{
    this.selecteImageIndex = this.selecteImageIndex == 0 ? this.images.length - 1 : this.selecteImageIndex - 1; 
    this.selectedImage = this.images[this.selecteImageIndex];
  }

  nextImage(): void{
    this.selecteImageIndex = this.selecteImageIndex == this.images.length - 1 ? 0 : this.selecteImageIndex + 1; 
    this.selectedImage = this.images[this.selecteImageIndex];
  }

  imageLoad() : void{
    console.log('imageLoading');
  }

  removeSpinner(divId: string): void{
      document.getElementById(divId).setAttribute('style','display:none;');
  }

}
