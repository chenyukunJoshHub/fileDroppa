## Angular2 (ng2) Files droppable area including list of files which could be managed before upload

#### Installation:

```
npm install --save file-droppa
```

#### Demo:
[DEMO http://ptkach.github.io/fileDroppa/](http://ptkach.github.io/fileDroppa/)

#### Usage:

**Whole functionality with droppable area, files list and styles you can apply with:**

```
@Component({
    selector: 'my-app',
    directives: [FileDropZone],
    template: `<fileDropZone 
                    [config]="fileDroppaConfig"
                    (filesUpdated)="filesUpdated($event)"
                    (fileUploaded)="fileUploaded($event)"
                    >
               </fileDropZone>`
})
export class AppComponent {
    fileDroppaConfig;

    constructor() {
        this.fileDroppaConfig = {
            customClass:'super-awesome-custom-cls',//**Optional**Custom cls which will be applied instead of default styles
            overCls: "custom-dragging-over-cls",//**Optional**
            autoUpload: false,//**Optional**
            uploadUrl: "https://salty-taiga-80701.herokuapp.com/upload",
            beforeUpload: this.beforeUpload,//**Optional**function will be calles before upload to update formData parameters
            requestHeaders:{//**Optional**Request headers will be added in request
                'X-Content':'xxx',
                'X-Hello':'World'
            }
        };
    }

    //Return object which will be appended in formData or if you make any async changes here like FILE RESIZE return Promise
    //Read - https://developer.mozilla.org/ru/docs/Web/API/FormData/append
    beforeUpload(file){
        return ["nameYouLike", file];
        //OR return PROMISE
        //return new Promise((res, rej)=>{
        //   DO ANY ASYNC OPERATIONS 
        //   setTimeout(()=>{
        //       res(["nameYouLike", file]);
        //   },1000)
        //});
    }

    fileUploaded([success, response, file]){
        success && console.log("uploaded - awesome", response, file);
        success || console.log("not uploaded - very bad", response, file);
    }

    filesUpdated(files) {
        console.log("added", files)
    }

```

**If you are looking for just a droppable area and you want to apply you own styles and html markup:**

```
import {FileDroppa} from './FileDroppa';

@Component({
    selector: 'fileDropZone',
    directives: [FileDroppa],
    template: `
            <div fileDroppa (notifyFilesUpdated)="notifyFilesUpdated($event)">
                Any Text or content you want
            </div> `
})

```

### Contributors
Contributions are very welcomed.
If you want to help us, please fork this repo from [ptkach/fileDroppa](ptkach/fileDroppa) and create pull request after adding some code.
