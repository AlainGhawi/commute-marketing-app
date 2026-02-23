import { TestBed } from '@angular/core/testing';
import { LandingPage } from './landing-page';
import { TranslationService } from '../../core/i18n/translation.service';

describe('LandingPage', () => {
  let i18n: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPage],
    }).compileComponents();

    i18n = TestBed.inject(TranslationService);
    i18n.setLocale('en');
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LandingPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the hero headline in English', async () => {
    const fixture = TestBed.createComponent(LandingPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const headline = compiled.querySelector('.hero-headline');
    expect(headline?.textContent).toContain('The corporate commute, reimagined.');
  });

  it('should have a "Request a demo" CTA button in the hero', async () => {
    const fixture = TestBed.createComponent(LandingPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const heroCtas = compiled.querySelectorAll('.hero-actions .btn');
    const demoBtn = Array.from(heroCtas).find(btn =>
      btn.textContent?.includes('Request a demo')
    );
    expect(demoBtn).toBeTruthy();
  });

  it('should switch to French when locale is changed', async () => {
    const fixture = TestBed.createComponent(LandingPage);
    await fixture.whenStable();

    i18n.setLocale('fr');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const headline = compiled.querySelector('.hero-headline');
    expect(headline?.textContent).toContain('Le trajet professionnel, réinventé.');
  });

  it('should show snackbar after email submission', async () => {
    const fixture = TestBed.createComponent(LandingPage);
    const component = fixture.componentInstance as any;
    await fixture.whenStable();

    component.email.set('test@company.com');
    component.submitEmail();
    fixture.detectChanges();

    const snackbar = (fixture.nativeElement as HTMLElement).querySelector('.snackbar');
    expect(snackbar?.textContent).toContain("Thanks! We'll reach out soon.");
  });
});
