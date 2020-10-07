import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MondrianPaintingComponent } from './grid-examples/mondrian-painting/mondrian-painting.component';
import { MondrainPaintingByItselfComponent } from './grid-examples/mondrain-painting-by-itself/mondrain-painting-by-itself.component';

@NgModule({
  declarations: [AppComponent, MondrianPaintingComponent, MondrainPaintingByItselfComponent],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
