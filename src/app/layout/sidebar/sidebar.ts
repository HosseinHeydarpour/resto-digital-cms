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
      this.isSidebarOpen = this.sidebarService.isSidebarOpenReadonly();
    });
  }
}
