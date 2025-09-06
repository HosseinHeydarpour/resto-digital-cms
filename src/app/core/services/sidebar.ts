import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isSidebarOpen = signal<boolean>(true);
  readonly isSidebarOpenReadonly = this.isSidebarOpen.asReadonly();

  toggleSidebar() {
    this.isSidebarOpen.update((value) => !value);
  }
}
