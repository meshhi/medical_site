import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custombutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custombutton.component.html',
  styleUrl: './custombutton.component.scss'
})
export class CustombuttonComponent implements OnInit {
  @Input() title: string = 'custom button';
  @Input() pictureSrc?: string;
  @Input() color: string = 'default';

  hasPicture: boolean = false;

  ngOnInit(): void {
    if (this.pictureSrc !== undefined) {
      this.hasPicture = true;
    }
  }
} 
