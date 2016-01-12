# FileDroppa
## Angular2 (ng2) Files DropZone

#### Usage/Directives:
---------
##### fileDroppa
Initialize the plugin

```
        <div fileDroppa>
        </div>
```


##### url
Provides url to post

```
        <div fileDroppa [url]="'/someUrl'">
        </div>
```

##### overCls
Class that will be given to the element when you will be dragging over it

```
        <div fileDroppa [overCls]="'some-fancy-style'">
        </div>
```

##### fileUploaded
Output param which provides all current files uploaded. Can be used to update the list of files. All files will be provided to the callback

```
        <div fileDroppa (fileUploaded)="fileUploaded($event)">
        </div>
```

##### fireUpdate
Input param which fires upload action in directive. You can provide listener to the button or on key press or whatever fits you better.
You can refer to example for more detailed instructions.
```
...
this.uploadEvent = new EventEmitter();
this.uploadEvent.emit();
...
                <div fileDroppa
                    (fileUploaded)="fileUploaded($event)"
                    [overCls]="'customDrop'"
                    [fireUpdate]="uploadEvent">
                </div>`
```
