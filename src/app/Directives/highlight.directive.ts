import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') defaultColor: string = 'transparent';
  @Input() hoverColor: string = 'blue';

  constructor(private eleref: ElementRef,private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  ngOnInit() {
    // this.eleref.nativeElement.style.backgroundColor = 'yellow';
    // this.renderer.setStyle(this.eleref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.eleref.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.eleref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
