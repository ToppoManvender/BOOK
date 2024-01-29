import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div
      [style.position]="'absolute'"
      [style.top]="'100%'"
      [style.left]="'0'"
      [style.zIndex]="'1000'"
      [style.background-color]="'black'"
      [style.box-shadow]="'0 0 10px rgba(0, 0, 0, 0.1)'"
      [style.margin-left]="'1000px'"
      [style.padding]="'10px'"
      *ngIf="isOpen"
    >
      <p></p>
    </div>
  `,
})
export class SwaggerDropdownComponent {
  @Input() isOpen: boolean = false;
}
