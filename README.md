# FileDroppa
## Angular2 (ng2) Files DropZone

#### Directives:
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
        <div fileDroppa [url]="'\someUrl'">
        </div>
```

##### url
Provides url to post

```
        <div fileDroppa [overCls]="'some-fancy-style'">
        </div>
```

##### fileUploaded
Outup param which gives all current files uploaded. Can be used to update the lise or notify user

```
        <div fileDroppa (fileUploaded)="fileUploaded($event)">
        </div>
```
