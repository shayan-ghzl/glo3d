import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { TrendingComponent } from './shared/components/trending/trending.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TrendingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
