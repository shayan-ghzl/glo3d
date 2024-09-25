import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatButtonModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  private _snackBar = inject(MatSnackBar);

  openSnackBar() {
    this._snackBar.open('Phone Number Copied to clipboard.', '', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
