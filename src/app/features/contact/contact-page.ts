import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageShell } from '../../shared/components/page-shell/page-shell';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-contact-page',
  imports: [PageShell, TranslatePipe],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  protected readonly contactCards = [
    { key: 'contact.sales', icon: 'campaign', emailKey: 'contact.sales.email' },
    { key: 'contact.support', icon: 'support_agent', emailKey: 'contact.support.email' },
    { key: 'contact.general', icon: 'mail', emailKey: 'contact.general.email' },
  ];
}
