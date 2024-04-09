import { Component } from '@angular/core';
import { CustombuttonComponent } from '../components/ui/custombutton/custombutton.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CustombuttonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
