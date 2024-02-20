import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {
  @Input()
  product:
  {
      id :number;
      name:string,
      desc:string,
  }

}
