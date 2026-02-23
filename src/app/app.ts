import { Component, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { SeoService } from './core/services/seo.service';
import { TranslationService } from './core/i18n/translation.service';
import { SeoMetadata } from './models/seo-metadata.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly i18n = inject(TranslationService);
  private readonly doc = inject(DOCUMENT);

  constructor() {
    // Update <html lang=""> when locale changes
    effect(() => {
      this.doc.documentElement.lang = this.i18n.locale();
    });

    // Update SEO metadata on navigation
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route.snapshot.data;
        }),
        filter((data) => !!data['seo'])
      )
      .subscribe((data) => {
        this.seo.updateMetadata(data['seo'] as SeoMetadata);
      });
  }
}
