import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[ngxSVGMask]",
})
export class NgxXBrowserSVGMaskDirective {

  @Input("ngxSVGMask") private readonly mask: string;

  /**
   * Host binding to apply the svg image element node type attribute.
   */
  @HostBinding("attr.mask")
  private get svgMaskImage(): string | undefined {
    if (this.el.nativeElement.nodeName.toLowerCase() === "image") {
      return this.maskImage;
    } else {
      return undefined;
    }
  }

  /**
   * Host binding to apply the standard css style to non-image type element nodes.
   */
  @HostBinding("style.mask-image")
  private get cssMaskImage(): string | undefined {
    if (this.el.nativeElement.nodeName.toLowerCase() !== "image") {
      return this.maskImage;
    } else {
      return undefined;
    }
  }

  /**
   * Host binding to apply the webkit style to non-image type element nodes.
   */
  @HostBinding("style.-webkit-mask-image")
  private get cssWebkitMaskImage(): string | undefined {
    if (this.el.nativeElement.nodeName.toLowerCase() !== "image") {
      return this.maskImage;
    } else {
      return undefined;
    }
  }

  /**
   * Read only property that calculates the direct url path for the image mask that we want to use.
   *
   * @return The mask with full url route designated.
   */
  private get maskImage(): string {
    return "url(" + window.location.pathname.slice(1) + this.mask + ")";
  }

  constructor(private el: ElementRef) {
    this.mask = "";
  }

}
