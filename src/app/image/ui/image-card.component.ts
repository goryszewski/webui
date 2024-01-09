import { Component, Input } from '@angular/core';
import { Image } from '../model/Image';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [],
  template: ` <p>{{ image.name }} {{ image.version }}</p> `,
  styles: ``,
})
export class ImageCardComponent {
  @Input({ required: true }) image!: Image;
}
