import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrendingComponent {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(title: string) {
    this._snackBar.open(title + ' No Copied to clipboard.', '', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
