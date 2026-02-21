import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rect } from './rect/rect';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rect, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  rectSize: { width: string, height: string } = {
    width: '100',
    height: '100',
  };
}
