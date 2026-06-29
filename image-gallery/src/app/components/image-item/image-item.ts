import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush, // Highly optimized performance
  template: `
    <div class="image-card" [class.featured]="isFeatured()">
      <img [src]="image().url" [alt]="image().alt" />
      <div class="image-overlay">
        <span>{{ image().alt }}</span>
      </div>
    </div>
  `,
  styles: [`
    .image-card { position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .image-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
    
    /* Featured state logic styling */
    .image-card.featured { grid-column: span 2; grid-row: span 2; }
    .image-card.featured img { height: 416px; } /* Fits perfectly on grid space */
    
    .image-overlay { position: absolute; bottom: 0; background: rgba(0,0,0,0.6); color: white; width: 100%; padding: 0.5rem; font-size: 0.85rem; opacity: 0; transition: opacity 0.2s; }
    .image-card:hover .image-overlay { opacity: 1; }
  `]
})
export class ImageItemComponent {
  // Modern input signals syntax (Angular 17.1+)
  image = input.required<Image>();
  isFeatured = input<boolean>(false);
}