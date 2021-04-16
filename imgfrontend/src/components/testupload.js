import React,{ useState } from 'react'

// import React FilePond
import {FilePond,registerPlugin} from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";

//import the image exif orientation and image preview plugins
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

//Register the plugins
registerPlugin(FilePondPluginImageExifOrientation,FilePondPluginImagePreview);

class UploadDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            // Set initial files, type 'local' means this is a file
            // that has already been uploaded to the server (see docs)
            files:[
                {
                    source:'index.html',
                    options:{
                        type:"local"
                    }
                }
            ]
        };
    }
    handleInit(){
        console.log("FilePond instance has initialised",this.pond);
    }
    render() {
        return(
            <div className={'testdemo'}>
                <FilePond
                    ref={ref=>(this.pond=ref)}
                    files={this.state.file}
                    alloMultiple={false}
                    allReorder={true}
                    maxFiles={3}
                    server={'http://127.0.0.1:8000/uploadimg/'}
                    name={'files'}
                    oninit={()=>this.handleInit()}
                    onupdatefiles={fileItems=>{
                        this.setState({
                            files:fileItems.map(fileItem=>fileItem.file)
                        })
                    }}
                    />
            </div>
        );
    }
}

export default UploadDemo;