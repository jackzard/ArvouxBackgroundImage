import { Directive, ElementRef, Input } from '@angular/core';
var BackgroundImageDirective = (function () {
    function BackgroundImageDirective(ElementRef) {
        this.ElementRef = ElementRef;
        this.server_url = true;
        this.pos_cover = true;
        this.shadow = true;
        this.resize = 0;
    }
    BackgroundImageDirective.prototype.ngOnInit = function () {
        var el = this.ElementRef.nativeElement;
        this.SetBackgroundImage();
        if (this.pos_cover)
            this.SetPositionSize(el);
    };
    BackgroundImageDirective.prototype.SetBackgroundImage = function (url) {
        if (url === void 0) { url = null; }
        var el = this.ElementRef.nativeElement;
        var url_default = this.url ? this.url : this.ENV.no_image;
        this.path_image = this.server_url
            ? this.ENV.img_url + '/' + url_default
            : url_default;
        if (url)
            this.path_image = this.ENV.img_url + '/' + url;
        el.style.backgroundImage = "url('" + this.path_image + "')";
    };
    BackgroundImageDirective.prototype.SetPositionSize = function (el) {
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
    };
    BackgroundImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[background-image]',
                },] },
    ];
    /** @nocollapse */
    BackgroundImageDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    BackgroundImageDirective.propDecorators = {
        'url': [{ type: Input, args: ['bg-url',] },],
        'server_url': [{ type: Input, args: ['bg-server-url',] },],
        'pos_cover': [{ type: Input, args: ['bg-position-cover',] },],
        'shadow': [{ type: Input, args: ['bg-shadow',] },],
        'resize': [{ type: Input, args: ['bg-resize',] },],
        'ENV': [{ type: Input, args: ['ENV',] },],
    };
    return BackgroundImageDirective;
}());
export { BackgroundImageDirective };
//# sourceMappingURL=background-image.js.map