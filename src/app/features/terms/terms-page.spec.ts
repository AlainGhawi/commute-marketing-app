import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TermsPage } from './terms-page';
import { TranslationService } from '../../core/i18n/translation.service';

describe('TermsPage', () => {
  let i18n: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsPage],
      providers: [provideRouter([])],
    }).compileComponents();

    i18n = TestBed.inject(TranslationService);
    i18n.setLocale('en');
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TermsPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the terms of service title', async () => {
    const fixture = TestBed.createComponent(TermsPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Terms of Service');
  });

  it('should switch to French when locale is changed', async () => {
    const fixture = TestBed.createComponent(TermsPage);
    await fixture.whenStable();

    i18n.setLocale('fr');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Conditions d');
  });
});
