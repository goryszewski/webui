import { Component, Input } from '@angular/core';
import { Image } from '../model/Image';
import { ImageCardComponent } from './image-card.component';

@Component({
  selector: 'app-images-list',
  standalone: true,
  imports: [ImageCardComponent],
  template: `
    <ul>
      @for (image of images; track image.id) {
        <li class="mb-2">
          <app-image-card [image]="image" />
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class ImagesListComponent {
  @Input({ required: true }) images: Image[] = [];
}
