import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  toogle(){
    const dropDownMenu = document.querySelector('.dropdown_menu');
    console.log(dropDownMenu)
    dropDownMenu?.classList.toggle('open');
    
    
  }
}
