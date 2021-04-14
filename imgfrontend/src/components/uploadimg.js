import React from 'react';
import {Upload,Button,message} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import emitter from '../util/events';
import Cookies from 'js-cookie';


const csrftoken = Cookies.get('CSRF-TOKEN');

class Uploadedf extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            filelog:{},
            fetchflag:false,
        }
    }
    // uploadApi=()=>{}
    //验证上传文件的格式
    handleAttachValidate=(file)=>{
        let fileName = file.name;
        let returnFlag = true;
        if(fileName.split('.')[1]!=='jpg'){
            message.error("文件必须是图片格式！");
            returnFlag=false;
        }
        return returnFlag;
    }

    //文件上传成功后的操作
    handleFileStatus=(info)=>{
        let fileStatus = info.file.status;
        let fileName = info.file.name;
        var filelog={};
        //如果文件上传成功，调用api进行处理原始文件
        if(fileStatus==='done'){
           filelog={fileName:fileName};
            fetch('http://127.0.0.1:8000/uploadimg/',{
                method:'POST',
                headers:{
                    "Accept":'application/json',
                    "Content-type":'application/json',
                    "X-CSRFToken":csrftoken,
                },
                body:JSON.stringify(filelog)
            })

                .then(res=>res.json())
                .then(data=>{
                    // console.log('>>>>>>>>filelog',data); //获取的是后端发回来的信息

                    message.success('成功上传文件：'+fileName);
                    emitter.emit('filesuccess',true);
                })

        }
        else if(fileStatus==='error'){
            message.error('文件上传失败,请联系服务端！')
        }
    }

    render() {
        return(
            <Upload
                // directory
                key={'uploadSleepSignal'}
                acctpt={'edf'}
                showUploadList={false}
                method={"post"}
                action={"http://127.0.0.1:8000/uploadimg/"}//上传的地址 待定
                beforeUpload={this.handleAttachValidate}
                onChange={this.handleFileStatus}>
                <Button icon={<UploadOutlined/>}>Upload Files</Button>
            </Upload>

        )
    }
}

export default Uploadedf;
