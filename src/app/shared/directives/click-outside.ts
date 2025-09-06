import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Output,
} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutside {
  @Output() clickOutside = new EventEmitter<void>();
  elementRef = inject(ElementRef);

  constructor() {}

  @HostListener('document:click', ['$event.target']) onDocumentClick(
    targetElement: EventTarget | null
  ) {
    if (
      targetElement instanceof HTMLElement &&
      !this.elementRef.nativeElement.contains(targetElement)
    ) {
      this.clickOutside.emit();
    }
  }
}
