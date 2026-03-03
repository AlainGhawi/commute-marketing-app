import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/i18n/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  protected readonly i18n = inject(TranslationService);

  protected readonly mobileMenuOpen = signal(false);
  protected readonly getStartedOpen = signal(false);

  protected readonly navLinks = [
    { key: 'nav.problem', fragment: 'problem' },
    { key: 'nav.solution', fragment: 'solution' },
    { key: 'nav.howItWorks', fragment: 'how-it-works' },
    { key: 'nav.roadmap', fragment: 'roadmap' },
    { key: 'nav.security', fragment: 'security' },
  ];

  protected readonly problemIcons = ['traffic', 'local_parking', 'eco', 'groups', 'local_bar'];

  protected readonly stepIcons = ['person_add', 'location_on', 'tune', 'handshake', 'check_circle'];

  protected readonly roadmapItems = [
    { key: 'roadmap.0', priority: 'P0' },
    { key: 'roadmap.1', priority: 'P0' },
    { key: 'roadmap.2', priority: 'P0' },
    { key: 'roadmap.3', priority: 'P0' },
    { key: 'roadmap.4', priority: 'P0' },
    { key: 'roadmap.5', priority: 'P0' },
    { key: 'roadmap.6', priority: 'P0' },
    { key: 'roadmap.7', priority: 'P0' },
    { key: 'roadmap.8', priority: 'P1' },
    { key: 'roadmap.9', priority: 'P1' },
  ];

  protected readonly trustIcons = ['shield', 'passkey', 'apartment'];

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  protected scrollTo(fragment: string): void {
    this.mobileMenuOpen.set(false);
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected openGetStarted(): void {
    this.mobileMenuOpen.set(false);
    this.getStartedOpen.set(true);
  }

  protected closeGetStarted(): void {
    this.getStartedOpen.set(false);
  }
}
