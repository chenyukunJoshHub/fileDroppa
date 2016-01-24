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
    template: `<fileDropZone [config]="config">
               </fileDropZone>`
}) 
```

- Or you can export fileDroppa or fileList and following the API use them. 
  This approach you will need to use in case you need some specific styles to the component, create component complex hierarchy or let's say you don't need fileList.

```
        <div fileDroppa (fileUploaded)="updateFileList($event, 'added')">
                Drop files here or click to select
        </div>
        <fileList [files]="files" (fileRemoved)="updateFileList($event, 'removed')"></fileList>
        
```
```
        <li fileDroppa (fileUploaded)="updateFileList($event, 'added')">
                Some specific text
        </li>
        <fileList [files]="files" (fileRemoved)="updateFileList($event, 'removed')"></fileList>
```        
```
        <li fileDroppa (fileUploaded)="updateFileList($event, 'added')">
                <span>
                        <b>Bla-Bla-Bla</b>
                </span>
        </li>
        <fileList [files]="files" (fileRemoved)="updateFileList($event, 'removed')"></fileList>
``` 
---------

#### Detailed information:

##### fileDropZone

```
import {FileDropZone} from 'fileDroppa';

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
import {FileDroppa} from 'fileDroppa';

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
3. (fileUploaded)?:EventEmmiter - function which will be called with list of files which were selected by user



##### fileList


```
import {FileList} from 'fileDroppa';

@Component({
    selector: 'my-app',
    directives: [FileList],
    template: `
        <FileList 
            [files]="files"
            (fileRemoved)="fileRemovedHandler($event)">
        </FileList>
    `
})

export class App {
    public files = [];//Here should be array with elements with type "File"
    public overCls:string = 'overCls';
    
    fileRemovedHandler() {
       //Your stuff
    }
}
```

API:

1. [files]:Array<File> - input parameter which always provides all files currently selected/dropped by user
2. (fileRemoved)?:EventEmitter - function which will be called when any files from filesList was removed by user

 
