import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../core/i18n/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-page-shell',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './page-shell.html',
  styleUrl: './page-shell.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageShell {
  protected readonly i18n = inject(TranslationService);
}
