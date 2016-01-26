import { ElementRef, Renderer, EventEmitter } from 'angular2/core';
import { FileParser } from "../Services/FileParser.service";
export declare class FileDroppa {
    private el;
    private renderer;
    private fileParser;
    private _url;
    private _overCls;
    private hiddenFileInput;
    private fs;
    constructor(el: ElementRef, renderer: Renderer, fileParser: FileParser);
    url: string;
    overCls: string;
    notifyFilesUpdated: EventEmitter<{}>;
    onClick(e: any): void;
    drop(e: any): void;
    dragenter(e: any): void;
    dragover(e: any): void;
    dragleave(e: any): void;
    OnDestroy(): void;
    updateStyles(dragOver?: boolean): void;
    updateFilesStore(files: Array<File>): void;
    createHiddenInput(): void;
}
