import { Component, effect, inject } from '@angular/core';
import { mockData } from './mock-data';
import { SidebarService } from '../../core/services/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  sidebarItems = mockData;
  sidebarService = inject(SidebarService);
  isSidebarOpen: boolean = true;

  constructor() {
    effect(() => {
      this.isSidebarOpen = this.sidebarService.isSidebarMinimizedReadonly();
      console.log('Sidebar minimized state changed:', this.isSidebarOpen);
      // Perform any side effect here, e.g., update UI, call a method, etc.
    });
  }
}
