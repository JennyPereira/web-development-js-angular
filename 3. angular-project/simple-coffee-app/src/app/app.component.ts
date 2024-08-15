import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CoffeeCatalogComponent } from './components/coffee-catalog/coffee-catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoffeeCatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
