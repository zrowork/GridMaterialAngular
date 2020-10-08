import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MondrianPaintingComponent } from './grid-examples/mondrian-painting/mondrian-painting.component';
import { MondrainPaintingByItselfComponent } from './grid-examples/mondrain-painting-by-itself/mondrain-painting-by-itself.component';
import { GridAreasWithMatAngularComponent } from './grid-examples/grid-areas-with-mat-angular/grid-areas-with-mat-angular.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const material = [MatButtonModule, MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [
    AppComponent,
    MondrianPaintingComponent,
    MondrainPaintingByItselfComponent,
    GridAreasWithMatAngularComponent,
  ],
  imports: [material, BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  exports: [material],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
