import { Component, inject } from '@angular/core';
import { ImageService } from './data-access/images.service';
import { ComponentListState, LIST_STATE_VALUE } from '../utils/list-state.type';
import { Image } from './model/Image';
import { ImagesListComponent } from './ui/images-list.component';

@Component({
  selector: 'app-image-list-page',
  standalone: true,
  imports: [ImagesListComponent],
  template: `
    <p>image-list-page works!</p>
    @switch (listState.state) {
      @case (listStateValue.SUCCESS) {
        <app-images-list class="block mt-4" [images]="listState.results" />
      }
      @case (listStateValue.ERROR) {
        {{ listState.error.message }}
      }
      @case (listStateValue.LOADING) {
        Loading...
      }
      @default {
        Problem
      }
    }
  `,
  styles: ``,
})
export class ImageListPageComponent {
  private imageService = inject(ImageService);
  listState: ComponentListState<Image> = { state: LIST_STATE_VALUE.IDLE };
  listStateValue = LIST_STATE_VALUE;
  getAllImages(): void {
    this.listState = { state: LIST_STATE_VALUE.LOADING };
    const source$ = this.imageService.getAll();

    source$.subscribe({
      next: (response) => {
        console.log(response.body);
        this.listState = {
          state: LIST_STATE_VALUE.SUCCESS,
          results: response.body!,
        };
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        console.log('Get all images completed');
      },
    });
  }
  addImage(): void {}
  ngOnInit() {
    this.getAllImages();
  }
}
