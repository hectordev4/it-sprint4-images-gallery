import { Component, signal } from '@angular/core';
import { Image } from '../../models/image.model';
import { ImageItemComponent } from '../image-item/image-item';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItemComponent],
  template: `
    <div class="gallery-container">
      <header class="gallery-header">
        <h1>AuraGallery</h1>
        <p>A curated minimal space to organize, view, and reorder visual moments seamlessly.</p>
      </header>

      <main class="gallery-grid">
        @for (img of images(); track img.id; let first = $first) {
          <app-image-item 
            [image]="img" 
            [isFeatured]="first"
          />
        }
      </main>
    </div>
  `,
  styles: [`
    /* Temporary basic styles until Iteration 2 (Tailwind) */
    .gallery-container { padding: 2rem; font-family: sans-serif; }
    .gallery-header { margin-bottom: 2rem; }
    .gallery-header h1 { font-size: 2.5rem; margin: 0 0 0.5rem 0; color: #111; }
    .gallery-header p { color: #666; font-size: 1.1rem; margin: 0; }
    .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
  `]
})
export class GalleryComponent {
  // Using an Angular Signal to store our mock data reactively
  images = signal<Image[]>([
    { id: '1', url: 'https://picsum.photos/id/10/600/600', alt: 'Beautiful seashore landscape' },
    { id: '2', url: 'https://picsum.photos/id/16/600/600', alt: 'Rocky mountain view' },
    { id: '3', url: 'https://picsum.photos/id/28/600/600', alt: 'Forest hiking path' },
    { id: '4', url: 'https://picsum.photos/id/42/600/600', alt: 'Mist over a lake' },
    { id: '5', url: 'https://picsum.photos/id/48/600/600', alt: 'Log cabin in mountains' },
    { id: '6', url: 'https://picsum.photos/id/54/600/600', alt: 'Scenic desert highway' },
  ]);
}