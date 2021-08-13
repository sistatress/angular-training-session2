import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SignUpComponent } from "./component/signup/signUp.component";
import { MenuComponent } from "./component/cards/menu/menu.component";
import { CardComponent } from "./component/cards/card/card.component";
import { PlayerComponent } from "./component/cards/player/player.component";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MenuComponent,
    CardComponent,
    PlayerComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
