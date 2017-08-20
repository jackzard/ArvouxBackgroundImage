import {Directive, ElementRef, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core'
import {isPlatformBrowser} from "@angular/common";

@Directive({
  selector: '[background-image]',
})
export class BackgroundImageDirective implements OnInit {
  @Input('bg-url') url
  @Input('bg-server-url') server_url: boolean = true
  @Input('bg-position-cover') pos_cover: boolean = true
  @Input('bg-shadow') shadow: boolean = true
  @Input('bg-resize') resize: number = 0
  @Input('ENV') ENV

  path_image: string

  constructor(
    private ElementRef: ElementRef,
    @Inject(PLATFORM_ID) private platform_id
  ) {
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platform_id)) return
    const el = this.ElementRef.nativeElement

    this.SetBackgroundImage()

    if (this.pos_cover) this.SetPositionSize(el)
  }

  SetBackgroundImage(url = null) {
    const el = this.ElementRef.nativeElement
    const url_default = this.url ? this.url : this.ENV.no_image

    this.path_image = this.server_url
      ? this.ENV.img_url + '/' + url_default
      : url_default

    if (url) this.path_image = this.ENV.img_url + '/' + url

    el.style.backgroundImage = `url('${this.path_image}')`
  }

  SetPositionSize(el) {
    el.style.backgroundSize = 'cover'
    el.style.backgroundPosition = 'center'
  }

}
