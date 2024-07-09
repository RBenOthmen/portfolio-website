import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navigateToLink() {
    window.open('https://drive.google.com/file/d/12JhQMB4mFew9Mld_FGUxxI9XQUTBj0jv/view?usp=sharing', '_blank');
  }
  
}
