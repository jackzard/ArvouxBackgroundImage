import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageDirective } from "./background-image";
var ArvouxBackgroundImageModule = (function () {
    function ArvouxBackgroundImageModule() {
    }
    ArvouxBackgroundImageModule.forRoot = function () {
        return {
            ngModule: ArvouxBackgroundImageModule
        };
    };
    ArvouxBackgroundImageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BackgroundImageDirective],
                    imports: [CommonModule],
                    exports: [BackgroundImageDirective]
                },] },
    ];
    /** @nocollapse */
    ArvouxBackgroundImageModule.ctorParameters = function () { return []; };
    return ArvouxBackgroundImageModule;
}());
export { ArvouxBackgroundImageModule };
//# sourceMappingURL=arvoux-background-image.module.js.map