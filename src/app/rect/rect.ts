import { Component, input, Input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  imports: [],
  templateUrl: './rect.html',
  styleUrl: './rect.css',
})
export class Rect implements OnInit {
  //@Input({required: true}) rectSize!: { width: string, height: string };
  rectSize = input.required<{ width: string, height: string }>();
  rectSizeChange = output<{ width: string, height: string }>();

  ngOnInit(): void {
    console.log('rectsize ', this.rectSize());    
  }

  onReset() {
    this.rectSizeChange.emit({ width: '150', height: '150' });
  }
}
