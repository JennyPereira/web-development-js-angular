import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CoffeeService } from './services/coffee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parrafo = 'Nuevo texto';
  buttonState = false;

  constructor(public coffeService: CoffeeService) { }

  changeValue(): void {
    this.coffeService.getAllCoffeeProducts();
    if (this.parrafo == 'Nuevo texto') {
      this.parrafo = 'Otro valor';
    } else {
      this.parrafo = 'Nuevo texto';
    }
  }
}
