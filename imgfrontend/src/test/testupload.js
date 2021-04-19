import React from 'react';
import {message} from 'antd';

import Cookies from 'js-cookie';
const csrftoken = Cookies.get('CSRF-TOKEN');

class UploadImg extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            filelog:{},
            fetchflag:false,
            image:null,
        }
    }
    // uploadApi=()=>{}
    //验证上传文件的格式
    handleAttachValidate=(file)=>{
        let fileName = file.name;
        let returnFlag = true;
        // if(fileName.split('.')[1]!=='jpg'){
        //     message.error("文件必须是图片格式！");
        //     returnFlag=false;
        // }
        return returnFlag;
    }

    //文件上传成功后的操作
    handleFileStatus=(info)=>{
        let fileStatus = info.file.status;
        let fileName = info.file.name;
        console.log('>>>>>>',info)
        var filelog={};
        //如果文件上传成功，调用api进行处理原始文件
        if(fileStatus==='done'){
           filelog={fileName:fileName};
            fetch('http://127.0.0.1:8000/uploadsuccess/',{
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
                    console.log('>>>>>>>>filelog',data); //获取的是后端发回来的信息
           //
           //          message.success('成功上传文件：'+fileName);
           //          emitter.emit('filesuccess',true);
                })
            message.success('成功上传文件：'+fileName);

        }
        else if(fileStatus==='error'){
            message.error('文件上传失败,请联系服务端！')
        }
    }
    handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

    handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.image);
    let form_data = new FormData()
        //name必须要与后端一一对应！！！！！！！！！！！！！！！！！！！！！！！！
    form_data.append('imgfiles',this.state.image);
    let url = 'http://localhost:8000/uploadimg/';
    fetch(url,{
                method:'POST',
                headers:{
                    // "Accept":'application/json',
                    // "Content-type":'multipart/form-data',
                    "X-CSRFToken":csrftoken,
                },
                body:form_data,
            })

                .then(res=>res.json())
                .catch(err=>console.log(err))
                .then(data=>{
                    console.log('>>>>>>>>filelog',data); //获取的是后端发回来的信息
                })
        };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <input type={'file'} id={'image'}
                            accept="image/png, image/jpeg"  onChange={this.handleImageChange} required
                    />
                    <input type={'submit'}/>
                </p>
            </form>
        )
    }
}

export default UploadImg
