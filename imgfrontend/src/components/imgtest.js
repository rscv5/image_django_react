import React from 'react';
import {Layout,Button} from "antd";
import Cookies from 'js-cookie';
const csrftoken = Cookies.get('CSRF-TOKEN');
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

    }

    render() {
        return(

            <Button onClick={this._getimgPath}/>
        )
    }


}

export default ImgDemo;