import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


//   constructor(private el: ElementRef) {
//     console.log("1");
//     el.nativeElement.style.backgroundColor = 'yellow';
//  }
 
//  @Input('appHighlight') highlightColor: string;
//  @HostListener('mouseenter') onMouseEnter() {
//    console.log("2");
//   this.highlight('red');
// }

// @HostListener('mouseleave') onMouseLeave() {
//   console.log("3");
  
//   this.highlight(null);
// }
// //@Input() highlightColor: string;
// @Input() appHighlight: string;
// @Input('appHighlight') highlightColor: string;

// private highlight(color: string) {
//   console.log("4",color);
//   this.el.nativeElement.style.backgroundColor = color;
// }

constructor(private el: ElementRef) { 
  console.log("1");
  
}

@Input('appHighlight') highlightColor: string;
@Input() defaultColor: string;x
@HostListener('mouseenter') onMouseEnter() {
  console.log("2",this.highlightColor);
  this.highlight(this.highlightColor || this.defaultColor || 'red');
  
}

@HostListener('mouseleave') onMouseLeave() {
  console.log("3");
  
  this.highlight(null);
}

private highlight(color: string) {
  console.log("4");
  this.el.nativeElement.style.backgroundColor = color;
}
}
