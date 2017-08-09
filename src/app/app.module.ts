import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './header/slider/slider.component';
import { FeaturesComponent } from './features/features.component';
import { MapComponent } from './contact/map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    StaffComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    SliderComponent,
    FeaturesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqDIm1tJ087ZlyPjhMyxivfnOwN2difCE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
