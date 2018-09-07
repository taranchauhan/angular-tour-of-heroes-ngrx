import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@app/services/in-memory-data/in-memory-data.service';

import { AppComponent } from './app.component';
import * as pages from '@app/containers';
import * as common from '@app/components';

import { AppRoutingModule } from '@app/router/app-routing.module';
import { RootStoreModule } from '@app/root-store';

@NgModule({
  declarations: [
    AppComponent,
    Object.keys(common).map(c => common[c]),
    Object.keys(pages).map(p => pages[p]),
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
