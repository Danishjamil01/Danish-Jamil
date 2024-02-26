import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  icons = [
    { name: 'bi bi-facebook', color: '#1877F2' },
    { name: 'bi bi-instagram', color: '#cd486b' },
    { name: 'bi bi-linkedin', color: '#0072b1' },
    { name: 'bi bi-twitter', color: '#1877F2' },
    { name: 'bi bi-github', color: '#fff' },
  ]
}
