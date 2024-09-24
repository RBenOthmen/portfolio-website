import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navigateToLink() {
    window.open('https://drive.google.com/file/d/1Bqx7DMta6h0f1pcwqycfhCCo_vJHmIB-/view?usp=sharing', '_blank');
  }
  
}
