import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactPage } from './contact-page';
import { TranslationService } from '../../core/i18n/translation.service';

describe('ContactPage', () => {
  let i18n: TranslationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPage],
      providers: [provideRouter([])],
    }).compileComponents();

    i18n = TestBed.inject(TranslationService);
    i18n.setLocale('en');
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ContactPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the contact page title', async () => {
    const fixture = TestBed.createComponent(ContactPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Contact Us');
  });

  it('should render all three contact cards', async () => {
    const fixture = TestBed.createComponent(ContactPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.contact-card');
    expect(cards.length).toBe(3);
  });

  it('should switch to French when locale is changed', async () => {
    const fixture = TestBed.createComponent(ContactPage);
    await fixture.whenStable();

    i18n.setLocale('fr');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Nous contacter');
  });
});
