import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '../services/translate.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule, HeaderComponent],
  providers: [LanguageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private languageService: LanguageService) {}

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
}
