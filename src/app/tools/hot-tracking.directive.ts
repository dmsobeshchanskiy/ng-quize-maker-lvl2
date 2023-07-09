import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHotTracking]'
})
export class HotTrackingDirective {

  @Input()
  public set keepSelected (val: boolean) {
    this._keepSelected = val;
    this._keepSelected ? this.onMouseEnter() : this.onMouseLeave();
  }

  private _keepSelected = false;
  
  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    if (!this._keepSelected) {
      this.renderer.removeStyle(this.elRef.nativeElement, 'backgroundColor');
    }
  }
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

}
