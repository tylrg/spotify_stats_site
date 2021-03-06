import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, HelpDialog } from './home/home.component';
import {DialogOverviewExampleDialog} from './home/home.component'

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatCardModule} from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackComponent } from './track/track.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackComponent,
    ArtistComponent,
    DialogOverviewExampleDialog,
    HelpDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [DialogOverviewExampleDialog,HelpDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
