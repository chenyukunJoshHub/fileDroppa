## Angular2 (ng2) Files droppable area including list of files which could be managed before upload

#### Installation:

```
npm install --save file-droppa
```

#### Demo:
[DEMO http://ptkach.github.io/fileDroppa/](http://ptkach.github.io/fileDroppa/)

#### Usage:

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
            customClass:'super-awesome-custom-cls',
            overCls: "customDrop",
            autoUpload: false,
            uploadUrl: "https://salty-taiga-80701.herokuapp.com/upload"
        };
    }

    fileUploaded([success, response, file]){
        success && console.log("uploaded - awesome", response, file);
        success || console.log("not uploaded - very bad", response, file);
    }

    filesUpdated(files) {
        console.log("added", files)
    }

```

### Contributors
Contributions are very welcomed.
If you want to help us, please fork this repo from [ptkach/fileDroppa](ptkach/fileDroppa) and create pull request after adding some code.
