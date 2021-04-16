import React from 'react';
import {Layout} from 'antd';
import ImgDemo from './imgtest';
import UploadDemo from "./testupload";

const App=()=>{
    return(
        <Layout key={"imglayout"}>
            <ImgDemo/>
            {/*<UploadDemo/>*/}
        </Layout>
    )
}
export default App