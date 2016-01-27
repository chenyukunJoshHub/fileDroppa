## Angular2 (ng2) Files droppable area including list of files which could be managed before upload

#### Installation:

```
npm install file-droppa
```

#### Usage:

You can choose between two types of approaches when you use this component:

- First of all, you can simply export FileDropZone directive, append it to your component and provide uploadUrl in config and that's it. 
  It's working, files could be selected or dropped, they can be managed and they can be easily uploaded to the service at url you have provided in config.

The whole list of config params you can find below in detailed information. 

```
@Component({
    selector: 'my-app',
    directives: [FileDropZone],
    template: `<fileDropZone [config]="config"></fileDropZone>`
}) 
```

- Or you can export fileDroppa or fileList and following the API use them. 
  This approach you will need to use in case you need some specific styles to the component, create component complex hierarchy or let's say you don't need fileList.

```
        <div fileDroppa (fileUploaded)="updateFileList($event, 'added')">
            Drop files here or click to select
        </div>
        <FileList
            [uploadFiles]="uploadFiles"
            [removeAllFiles]="removeAllFiles">
        </FileList>
        
```
```
        <li fileDroppa (fileUploaded)="updateFileList($event, 'added')">
            Some specific text
        </li>
        <FileList
            [uploadFiles]="uploadFiles"
            [removeAllFiles]="removeAllFiles">
        </FileList>

```        
```
        <li fileDroppa (fileUploaded)="updateFileList($event, 'added')">
            <span>
                <b>Bla-Bla-Bla</b>
            </span>
        </li>
        <FileList
            [uploadFiles]="uploadFiles"
            [removeAllFiles]="removeAllFiles">
        </FileList>
``` 
---------

#### Detailed information:

##### fileDropZone

```
import {FileDropZone} from 'file-droppa';

@Component({
    selector: 'my-app',
    directives: [FileDropZone],
    template: `
        <fileDropZone 
            [config]="config"
            (filesUploaded)="uploadHandler($event)">
        </fileDropZone>
    `
})

export class App {
    public config:Object = {
        customClass: 'customClass',
        overCls: 'overCls',
        autoUpload: true, 
        uploadUrlL: 'http://yorApiUrl/upload'
    };
    
    filesUploaded() {
       //Your stuff
    }
}
```
Config:

1. customClass?:string - css class which will be gived to the dom element wrapper
2. overCls?:string - css class which will be gived to the drop area when dragging is right over the element
3. autoUpload?:boolean - in case you want to upload files right after drop set true
4. uploadUrl:string - url which will be posted with uploaded files


API:

1. [config] - input parameter
2. (filesUploaded)?:EventEmitter - function which will be called on successful files uploading


##### fileDroppa

```
import {FileDroppa} from 'file-droppa';

@Component({
    selector: 'my-app',
    directives: [fileDroppa],
    template: `
        <fileDroppa 
            [class]="fileDroppaClass"
            [overCls]="overCls"
            (filesUploaded)="uploadHandler($event)">
        </fileDroppa>
    `
})

export class App {
    public fileDroppaClass:string = 'fileDroppaClass';
    public overCls:string = 'overCls';
    
    filesUploaded() {
       //Your stuff
    }
}
```

API:

1. [class] - input parameter custom class
2. [overCls] - input parameter custom over css class
3. (fileUploaded)?:EventEmitter - function which will be called with list of files which were selected by user



##### fileList


```
import {FileList} from 'file-droppa';

@Component({
    selector: 'my-app',
    directives: [FileList],
    template: `
        <FileList
            [uploadFiles]="uploadFiles"
            [removeAllFiles]="removeAllFiles">
        </FileList>
        <div>
            <button (click)="upload($event)">Upload All Files</button>
            <button (click)="remove($event)">Remove All Files</button>
        </div>

    `
})

export class App {
    public uploadFiles = new EventEmitter();
    public removeAllFiles = new EventEmitter();
    
    upload(){
            this.uploadFiles.emit(true);
    }

    remove(){
        this.removeAllFiles.emit(true);
    }    
}
```

API:

1. (uploadFiles)?:EventEmitter - function that will be called when "uploadFiles" event will be fired from parent component
2. (removeAllFiles)?:EventEmitter - function that will be called when "removeAllFiles" event will be fired from parent component

 
### Contributors
Contributions are very welcomed.
If you want to help us, please fork this repo from [ptkach/fileDroppa](ptkach/fileDroppa) and create pull request after adding some code.