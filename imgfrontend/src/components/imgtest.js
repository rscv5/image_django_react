import React from 'react';
import {Card,Button} from "antd";
// import Cookies from 'js-cookie';
import UploadImg from "./uploadimg";
import "antd/dist/antd.css";
// const csrftoken = Cookies.get('CSRF-TOKEN');
class ImgDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            getimageFlag:false,
            showimageFlag:false,
            imgName:'sample-image',
            imgPath:'',
        }
    }
    _getimgPath=()=>{
        this.setState({
            imgPath:'http://127.0.0.1:8000/static'+
                `${this.state.imgName}`+'.jpg'
        },function () {
            console.log('now img path',this.state.imgPath);
        })
    }
    _getimage=()=>{
        this._getimgPath();
        this.setState({
            showimageFlag:true,
        },function () {
            console.log('showimage',this.state.showimageFlag);
        })
    }



    render(){
        return(
            <Card key={'imagemagtest'}
                  title={'IMAGE MAGNIFY'}
                  hoverable
                  extra={
                    [
                        <UploadImg key={'uploadimg'}/>,
                        <Button onClick={this._getimage}
                                style={{marginLeft:'20px'}}>
                            SHOW IMAGES
                        </Button>,
                    ]
                  }
                  style={{height:'100%'}}
                  >
                THis is test
            </Card>
        )
    }

}

export default ImgDemo;