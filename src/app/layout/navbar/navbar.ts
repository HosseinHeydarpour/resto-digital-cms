import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-navbar',
  imports: [InputTextModule, FloatLabel],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
