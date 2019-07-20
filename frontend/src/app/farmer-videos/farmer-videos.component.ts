import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { from } from 'rxjs';

@Component({
  selector: 'app-farmer-videos',
  templateUrl: './farmer-videos.component.html',
  styleUrls: ['./farmer-videos.component.scss']
})
export class FarmerVideosComponent implements OnInit {

  urls = [
    'https://www.youtube.com/embed/PhlsZTvSbVk',
  ];

  constructor(private sanitizer: DomSanitizer) { 

    
  }

  
  safeurls = [this.sanitizer.bypassSecurityTrustResourceUrl(this.urls[0])];
  

  
  ngOnInit() {

    for(let i = 1; i < this.urls.length; i++)
    {
      this.safeurls.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.urls[i]));
    }


  }

}
