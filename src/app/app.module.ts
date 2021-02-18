import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
    imports: [
        BrowserModule,
      // I commented this before video-12th in section:1
        // FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
