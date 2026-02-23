import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageShell } from '../../shared/components/page-shell/page-shell';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-privacy-page',
  imports: [PageShell, TranslatePipe],
  templateUrl: './privacy-page.html',
  styleUrl: './privacy-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPage {}
