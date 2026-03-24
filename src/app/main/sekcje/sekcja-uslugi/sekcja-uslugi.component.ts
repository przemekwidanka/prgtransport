import { Component } from '@angular/core';

@Component({
  selector: 'app-sekcja-uslugi',
  templateUrl: './sekcja-uslugi.component.html',
  styleUrls: ['./sekcja-uslugi.component.scss'],
  host: { 'class': 'd-flex flex-column szachownica' },
})
export class SekcjaUslugiComponent {
  uslugi = [
    { ikonka: 'tv', tytul: 'Transport mebli i sprzętu AGD', opis: 'Specjalizujemy się w bezpiecznym i precyzyjnym transporcie mebli oraz sprzętu AGD, dostarczając je do nowego miejsca bez uszczerbku.' },
    { ikonka: 'home', tytul: 'Przeprowadzki domów', opis: 'Zapewnimy profesjonalną pomoc w przewozie Twojego majątku podczas zmiany miejsca zamieszkania, dbając o bezpieczeństwo i skuteczność całego procesu.' },
    { ikonka: 'business', tytul: 'Przeprowadzki biur', opis: 'Specjalizujemy się w efektywnym przewozie biurowego wyposażenia, dokumentów i sprzętu, zapewniając bezpieczny transport, dzięki czemu Twoja firma może szybko wznowić pełną operacyjność w nowym miejscu.' },
    { ikonka: 'flag', tytul: 'Przeprowadzki krajowe', opis: 'Realizujemy przeprowadzki na terenie kraju, gwarantując szybki i sprawnie zorganizowany transport do nowej lokalizacji, niezależnie od odległości.' },
    // { ikonka: 'public', tytul: 'Przeprowadzki międzynarodowe', opis: 'Nasza firma specjalizuje się w przeprowadzkach międzynarodowych, oferując kompleksową obsługę od pakowania po dostarczenie mienia do nowego kraju, zapewniając spokojny start w nowym otoczeniu.' },
    { ikonka: 'weekend', tytul: 'Utylizacja starych mebli', opis: 'Nasza firma transportowa oferuje kompleksową usługę utylizacji starych mebli, pomagając klientom pozbyć się niepotrzebnego wyposażenia w sposób ekologiczny i zgodny z obowiązującymi przepisami.' },
    { ikonka: 'construction', tytul: 'Wywóz odpadów po remoncie', opis: 'Zrealizujemy wywóz odpadów powstałych podczas remontu. Zadbamy o bezpieczny transport wszelkiego rodzaju odpadów budowlanych, takich jak gruz, stare materiały czy opakowania.' },
  ]
}
