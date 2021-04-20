import React from 'react';
import {Card,Button} from "antd";
// import Cookies from 'js-cookie';
import UploadImg from "./uploadimg";
import "antd/dist/antd.css";
// const csrftoken = Cookies.get('CSRF-TOKEN');
import ImageMagnifier from "./ImageMagnifier";
import OneImageM from "./OneImageM";
class ImgDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            // 略缩图：
            minImg:"http://127.0.0.1:8000/static/small.jpg",
            // minImg:"http://127.0.0.1:8000/static/sample-image.jpg",
            // 高清图
            maxImg:"http://127.0.0.1:8000/static/large.jpg",
            // maxImg:"http://127.0.0.1:8000/static/sample-image.jpg",
            // Img:"http://127.0.0.1:8000/static/sample-image.jpg",
        }
    }
    // _getimgPath=()=>{
    //     this.setState({
    //         imgPath:'http://127.0.0.1:8000/static'+
    //             `${this.state.imgName}`+'.jpg'
    //     },function () {
    //         console.log('now img path',this.state.imgPath);
    //     })
    // }
    // _getimage=()=>{
    //     this._getimgPath();
    //     this.setState({
    //         showimageFlag:true,
    //     },function () {
    //         console.log('showimage',this.state.showimageFlag);
    //     })
    // }



    render(){
        const {minImg,maxImg,Img} = this.state;
        // const image = fetch('http://127.0.0.1:8000/static/sample-image.jpg');
        return(
            <Card key={'imagemagtest'}
                  title={'IMAGE MAGNIFY'}
                  hoverable
                  extra={
                    [
                        <UploadImg key={'uploadimg'}/>,
                        <Button
                                // onClick={this._getimage}
                                style={{marginLeft:'20px'}}>
                            SHOW IMAGES
                        </Button>,
                    ]
                  }
                  style={{height:'100%'}}
                  >
                {/*THis is test*/}
                <ImageMagnifier minImg={minImg} maxImg={maxImg}/>
                {/*<div key ='simpl div' style={{position:'absolute',top:'100px',left:'0',maxWidth:'50%',padding:'0 10px 10px 10px'}} className={'app'}>*/}
                {/*     <OneImageM image={Img}/>*/}
                {/*</div>*/}
                {/*<div style={{position:'absolute',top:'100px',left:'50%',padding:'0 10px 10px 10px',maxWidth:'50%'}}>*/}
                {/*    <OneImageM image={Img}/>*/}
                {/*</div>*/}

            </Card>
        )
    }

}

export default ImgDemo;