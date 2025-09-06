import { Component } from '@angular/core';
import { mockData } from './mock-data';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  sidebarItems = mockData;
}
