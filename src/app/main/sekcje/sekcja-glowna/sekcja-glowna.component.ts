import { Component } from '@angular/core';

@Component({
  selector: 'app-sekcja-glowna',
  templateUrl: './sekcja-glowna.component.html',
  styleUrls: ['./sekcja-glowna.component.scss'],
  host: {
    'class': 'd-flex flex-column szachownica overflow-hidden',
},
})
export class SekcjaGlownaComponent {

  callNumber1(){
    window.location.href = 'tel:780719067';
  }

  scrollTo(): void {
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
