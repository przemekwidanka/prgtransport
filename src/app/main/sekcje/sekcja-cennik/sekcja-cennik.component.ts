import { Component } from '@angular/core';

interface CennikFeature {
  text: string;
  included: boolean;
}

interface CennikPlan {
  title: string;
  price: number;
  unit: string;
  features: CennikFeature[];
  highlighted: boolean;
}

@Component({
  selector: 'app-sekcja-cennik',
  templateUrl: './sekcja-cennik.component.html',
  styleUrls: ['./sekcja-cennik.component.scss'],
})
export class SekcjaCennikComponent {
  plans: CennikPlan[] = [
    {
      title: 'Przewóz rzeczy małogabarytowych w Trójmieście',
      price: 199,
      unit: 'PLN / Godzina',
      highlighted: false,
      features: [
        { text: 'Bez opłat za dojazd', included: true },
        { text: 'Przewóz mebli i wyposażenia', included: true },
        { text: 'Ochrona mebli pasami i kocami', included: true },
        { text: 'Polisa na przewożone przedmioty', included: true },
        { text: 'Wnoszenie i znoszenie przez nasz zespół', included: false },
        { text: 'Pakowanie folią stretch', included: false },
        { text: 'Rozkładanie i składanie mebli', included: false },
      ],
    },
    {
      title: 'Przeprowadzka z jedną osobą w Gdyni, Gdańsku i Sopocie',
      price: 249,
      unit: 'PLN / Godzina',
      highlighted: false,
      features: [
        { text: 'Bez opłat za dojazd', included: true },
        { text: 'Przewóz mebli i wyposażenia', included: true },
        { text: 'Ochrona mebli pasami i kocami', included: true },
        { text: 'Polisa na przewożone przedmioty', included: true },
        { text: 'Wnoszenie i znoszenie przez nasz zespół', included: true },
        { text: 'Pakowanie folią stretch', included: false },
        { text: 'Rozkładanie i składanie mebli', included: false },
      ],
    },
    {
      title: 'Przeprowadzka z ekipą dwuosobową na terenie Trójmiasta',
      price: 299,
      unit: 'PLN / Godzina',
      highlighted: true,
      features: [
        { text: 'Bez opłat za dojazd', included: true },
        { text: 'Przewóz mebli i wyposażenia', included: true },
        { text: 'Ochrona mebli pasami i kocami', included: true },
        { text: 'Polisa na przewożone przedmioty', included: true },
        { text: 'Wnoszenie i znoszenie przez nasz zespół', included: true },
        { text: 'Pakowanie folią stretch', included: true },
        { text: 'Rozkładanie i składanie mebli', included: true },
      ],
    }
  ];
}
