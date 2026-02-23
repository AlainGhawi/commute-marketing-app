import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageShell } from '../../shared/components/page-shell/page-shell';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-terms-page',
  imports: [PageShell, TranslatePipe],
  templateUrl: './terms-page.html',
  styleUrl: './terms-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsPage {}
