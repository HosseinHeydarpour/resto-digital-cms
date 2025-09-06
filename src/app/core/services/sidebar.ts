import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isSidebarMinimized = signal<boolean>(true);
  readonly isSidebarMinimizedReadonly = this.isSidebarMinimized.asReadonly();

  toggleSidebar() {
    this.isSidebarMinimized.update((value) => !value);
  }
}
