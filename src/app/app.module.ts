import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { SekcjaGlownaComponent } from './main/sekcje/sekcja-glowna/sekcja-glowna.component';
import { SekcjaONasComponent } from './main/sekcje/sekcja-o-nas/sekcja-o-nas.component';
import { SekcjaUslugiComponent } from './main/sekcje/sekcja-uslugi/sekcja-uslugi.component';
import { SekcjaOfertaComponent } from './main/sekcje/sekcja-oferta/sekcja-oferta.component';
import { SekcjaKontaktComponent } from './main/sekcje/sekcja-kontakt/sekcja-kontakt.component';
import { SekcjaWspolpracaComponent } from './main/sekcje/sekcja-wspolpraca/sekcja-wspolpraca.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CiasteczkaComponent } from './ciasteczka/ciasteczka.component';
import { SekcjaOpinieComponent } from './main/sekcje/sekcja-opinie/sekcja-opinie.component';
import { SekcjaCennikComponent } from './main/sekcje/sekcja-cennik/sekcja-cennik.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    SekcjaGlownaComponent,
    SekcjaONasComponent,
    SekcjaUslugiComponent,
    SekcjaOfertaComponent,
    SekcjaKontaktComponent,
    SekcjaWspolpracaComponent,
    FooterComponent,
    CiasteczkaComponent,
    SekcjaOpinieComponent,
    SekcjaCennikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
