import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PrivacyPage } from './privacy-page';
import { TranslationService } from '../../core/i18n/translation.service';

describe('PrivacyPage', () => {
  let i18n: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPage],
      providers: [provideRouter([])],
    }).compileComponents();

    i18n = TestBed.inject(TranslationService);
    i18n.setLocale('en');
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PrivacyPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the privacy policy title', async () => {
    const fixture = TestBed.createComponent(PrivacyPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Privacy Policy');
  });

  it('should switch to French when locale is changed', async () => {
    const fixture = TestBed.createComponent(PrivacyPage);
    await fixture.whenStable();

    i18n.setLocale('fr');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Politique de confidentialit');
  });
});
