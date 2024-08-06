import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { translationProviders } from './app/translation.config';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), ...translationProviders],
}).catch((err) => console.error(err));
