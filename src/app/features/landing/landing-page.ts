import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [FormsModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  protected readonly mobileMenuOpen = signal(false);
  protected readonly email = signal('');
  protected readonly snackbarVisible = signal(false);

  protected readonly navLinks = [
    { label: 'Problem', fragment: 'problem' },
    { label: 'Solution', fragment: 'solution' },
    { label: 'How it works', fragment: 'how-it-works' },
    { label: 'Roadmap', fragment: 'roadmap' },
    { label: 'Security', fragment: 'security' },
  ];

  protected readonly problems = [
    {
      icon: 'traffic',
      title: 'Traffic congestion',
      description: 'Employees waste hours in gridlock. Fewer cars on the road means shorter commutes for everyone.',
      solution: 'Fewer cars on the road = shorter commutes',
    },
    {
      icon: 'local_parking',
      title: 'Parking costs',
      description: 'Companies spend $2,400-$6,000 per parking spot per year — a hidden budget drain.',
      solution: 'Reduce parking demand by 30-40%',
    },
    {
      icon: 'eco',
      title: 'ESG / Scope 3 compliance',
      description: 'Employee commuting (Category 7) is hard to measure and harder to reduce.',
      solution: 'Automated Category 7 emissions reporting',
    },
    {
      icon: 'groups',
      title: 'Team cohesion',
      description: 'Remote and hybrid work eroded the organic connections between teammates.',
      solution: 'Organic bonding during shared commutes',
    },
    {
      icon: 'local_bar',
      title: 'Corporate event safety',
      description: 'After-work events create liability when employees drive after drinking.',
      solution: 'Designated driver coordination built in',
    },
  ];

  protected readonly steps = [
    {
      icon: 'person_add',
      number: 1,
      title: 'Onboard',
      description: 'Sign up with your company SSO. Your profile is set up in seconds.',
    },
    {
      icon: 'location_on',
      number: 2,
      title: 'Set your zone',
      description: 'Pick your home zone — a privacy-safe approximate area, never your exact address.',
    },
    {
      icon: 'tune',
      number: 3,
      title: 'Set preferences',
      description: 'Choose your commute days, time windows, and whether you drive, ride, or both.',
    },
    {
      icon: 'handshake',
      number: 4,
      title: 'Get matched',
      description: 'Our algorithm pairs you with colleagues on similar routes each day.',
    },
    {
      icon: 'check_circle',
      number: 5,
      title: 'Confirm & go',
      description: 'Confirm your ride the evening before. Get a notification when your driver is on the way.',
    },
  ];

  protected readonly roadmapItems = [
    { feature: 'Employee onboarding & profile setup', priority: 'P0' },
    { feature: 'Home zone selection (privacy-safe)', priority: 'P0' },
    { feature: 'Commute preferences (days, times, role)', priority: 'P0' },
    { feature: 'Next-day batch ride matching', priority: 'P0' },
    { feature: 'Ride confirmation / cancellation', priority: 'P0' },
    { feature: 'Real-time notifications', priority: 'P0' },
    { feature: 'PWA with push notifications', priority: 'P0' },
    { feature: 'SSO / OIDC authentication', priority: 'P0' },
    { feature: 'Company admin dashboard', priority: 'P1' },
    { feature: 'Ride history & stats', priority: 'P1' },
  ];

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  protected scrollTo(fragment: string): void {
    this.mobileMenuOpen.set(false);
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected submitEmail(): void {
    if (!this.email()) return;
    this.snackbarVisible.set(true);
    this.email.set('');
    setTimeout(() => this.snackbarVisible.set(false), 4000);
  }
}
