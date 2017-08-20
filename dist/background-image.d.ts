import { ElementRef, OnInit } from '@angular/core';
export declare class BackgroundImageDirective implements OnInit {
    private ElementRef;
    private platform_id;
    url: any;
    server_url: boolean;
    pos_cover: boolean;
    shadow: boolean;
    resize: number;
    ENV: any;
    path_image: string;
    constructor(ElementRef: ElementRef, platform_id: any);
    ngOnInit(): void;
    SetBackgroundImage(url?: null): void;
    SetPositionSize(el: any): void;
}
