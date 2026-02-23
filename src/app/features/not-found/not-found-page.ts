import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageShell } from '../../shared/components/page-shell/page-shell';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [PageShell, TranslatePipe, RouterLink],
  template: `
    <app-page-shell>
      <div class="not-found">
        <span class="material-symbols-outlined not-found-icon">explore_off</span>
        <h1>404</h1>
        <p>{{ 'notFound.message' | translate }}</p>
        <a class="not-found-link" routerLink="/">{{ 'notFound.backHome' | translate }}</a>
      </div>
    </app-page-shell>
  `,
  styles: `
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: var(--space-16) var(--space-6);
      min-height: 50vh;
    }
    .not-found-icon {
      font-size: 4rem;
      color: var(--color-gray-300);
      margin-bottom: var(--space-4);
    }
    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: var(--color-gray-900);
      margin: 0 0 var(--space-2);
    }
    p {
      font-size: 1.125rem;
      color: var(--color-gray-500);
      margin: 0 0 var(--space-8);
    }
    .not-found-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      background: var(--color-primary);
      color: #fff;
      border-radius: var(--radius-lg);
      font-weight: 600;
      transition: background 0.15s ease;
    }
    .not-found-link:hover {
      background: var(--color-primary-dark);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
