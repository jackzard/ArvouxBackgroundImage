import { ElementRef, OnInit } from '@angular/core';
export declare class BackgroundImageDirective implements OnInit {
    private ElementRef;
    url: any;
    server_url: boolean;
    pos_cover: boolean;
    shadow: boolean;
    resize: number;
    ENV: any;
    path_image: string;
    constructor(ElementRef: ElementRef);
    ngOnInit(): void;
    SetBackgroundImage(url?: null): void;
    SetPositionSize(el: any): void;
}
