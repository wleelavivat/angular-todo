import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/* tslint:disable:directive-selector */
@Directive({
  selector: '[autofocus]'
})
/* tslint:enable:directive-selector */
export class AutofocusDirective implements OnInit {
  private _autofocus;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this._autofocus || typeof this._autofocus === 'undefined') {
      this.el.nativeElement.focus();
    }
  }

  @Input() set autofocus(condition: any) {
    this._autofocus = condition !== false
      && condition !== null
      && condition !== undefined
      && condition !== 0
      && condition !== 'false'
      && condition !== 'null'
      && condition !== 'undefined'
      && condition !== '0';
  }
}
