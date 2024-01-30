import Timeout from "./Timeout.js";
export default class Slide {
    container: Element;
    slides: Element[];
    controls: Element;
    time: number;
    index: number;
    slide: Element;
    timeout: Timeout | null;
    pausedTimeout: Timeout | null;
    paused: boolean;
    thumbItems: HTMLElement[] | null;
    thumb: HTMLElement | null;
    constructor(container: Element, slides: Element[], controls: Element, time?: number);
    hide(el: Element): void;
    show(index: number): void;
    autoVideo(video: HTMLVideoElement): void;
    auto(time: number): void;
    pause(): void;
    continue(): void;
    prev(): void;
    next(): void;
    private addControls;
    private addTumbItems;
    private init;
}
