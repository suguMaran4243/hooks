import { Component,Input } from '@angular/core';
import { Demo2Component } from './demo2/demo2.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [Demo2Component,CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title:string='Demo Component';
 products=[{
  id:1,
  name:'Watch',
  desc:"Men's Watch"
 },
{
  id:2,
  name:'Watch',
  desc:"Women's Watch"
}]
  @Input() 
  message:string='Hello';
  
constructor()
{
  console.log("Demo constructor is called")
}
}
