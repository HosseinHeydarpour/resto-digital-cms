import { Component, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { BadgeModule } from 'primeng/badge';
import { Tooltip } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [InputTextModule, FloatLabel, BadgeModule, Tooltip, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  langSwitcherOpen = signal<boolean>(false);

  onFullScreenClicked() {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        // Safari
        (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).msRequestFullscreen) {
        // IE11
        (elem as any).msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        // Safari
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        // IE11
        (document as any).msExitFullscreen();
      }
    }
  }

  onLangSwitcherClicked() {
    this.langSwitcherOpen.set(!this.langSwitcherOpen());
  }
}
