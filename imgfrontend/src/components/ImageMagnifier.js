import React from 'react';

class ImageMagnifier extends React.Component{
    constructor(props){
        super(props);
        this.state={
            /*图片放大镜参数列表, 组件宽高必须大于鼠标悬停小方块！*/
            params:{
                // 放大倍数
                scale:2,
                // 组件宽
                width:"400",
                height:"400",
            },
            // 略缩图
            minImg:"",
            // 大图
            maxImg:"",
            //开关
            magnifierOff:false,
            // 图片加载情况
            imgLoad:false,
            /*css styles*/
            cssStyle:{
                // 图片容器样式
                imgContainer:{
                    width:"400px",
                    height:'400px',
                    border:"1px solid #ccc",
                    cursor:"move",
                    position:"relative"
                },
                // 鼠标悬停小方块样式
                mouseBlock:{
                    position:'absolute',
                    top:'0',
                    left:'0',
                    width:'100px',
                    height:'100px',
                    background:'rgba(0,0,0,0.1)',
                    zIndex:99,
                },
                //鼠标悬停遮罩层样式
                maskBlock:{
                    position:'absolute',
                    top:'0',
                    left:'0',
                    width:'100%',
                    height:'100%',
                    background:'rgba(0,0,0,0)',
                    zIndex:100
                },
                // 放大镜容器样式
                magnifierContainer:{
                    position:'absolute',
                    left:'440px',
                    top:'80px',
                    width:'400px',
                    height:'400px',
                    border:'1px solid #ccc',
                    overflow:'hidden',
                    zIndex:98,
                },
                // 图片样式
                imgStyle:{
                    width:'100%',
                    height:'100%'
                },
                // 图片放大样式
                // 此处图片宽高不能设置为百分比，在scale作用下，放大的只是图片初始的宽高
                imgStyle2:{
                    width:'400px',
                    height:'400px',
                    position:'absolute',
                    top:0,
                    left:0,
                    transform:"scale(4)",
                    transformOrigin:'top left',
                }
            }
        };
    }
    /*生命周期函数*/
    // 初始化组件
    componentWillMount() {
        this.initParam();
        this.updataImg(this.props);
    }
    // props 变化时更新
    componentWillReceiveProps(nextProps) {
        this.updataImg(nextProps);
    }
    /*方法*/
    // 鼠标移入
    mouseEnter=()=>{
        this.setState({
            magnifierOff:true,
        })
    };
    // mouse remove
    mouseLeave =()=>{
        this.setState({
            magnifierOff:false,
        })
    }
    // mouse move
    mouseMove = event =>{
        let e = event.nativeEvent;
        // console.log('e x y',e.nativeEvent);
        this.calculationBlock(e.offsetX,e.offsetY);
    }
    // calculation params
    calculationBlock(offsetx,offsety){
        // let small = document.querySelector('.box .small')
        // let mask = document.querySelector('.mask')
        let cssStyle = JSON.parse(JSON.stringify(this.state.cssStyle))
        let offsetX =  offsetx - 50;  // 鼠标在盒子中的位置 - mask宽的一半
        let offsetY = offsety - 50; // 鼠标在盒子中的位置 - mask高的一半
        /*block position*/
        // 防止鼠标移动过快导致计算失误，只要小于或大于对应值，直接设置偏移量等于最小或最大值
        // left 取值为 大于 0, 小于 盒子的宽 - mask的宽
        if(offsetX < 0){
            offsetX = 0;
        }
        if(offsetX > 350){
            // offsetX = small.offsetWidth - mask.offsetWidth;
            offsetX = 350;
        }
        // top 取值为 大于0 ，小于 盒子的高 - mask的高
        if(offsetY< 0){
            offsetY = 0;
        }
        if(offsetY > 350){
            // offsetY = small.offsetHeight - mask.offsetHeight;
            offsetY = 350;
        }
        // 移动mask
        cssStyle.mouseBlock.left = parseFloat(offsetX) +"px";
        cssStyle.mouseBlock.top = parseFloat(offsetY ) + "px";

        /*计算图片放大位置*/
        // 右侧大图片，等比例移动
        // 大图片走的距离 / mask 走的距离 = 大图片 / 小图片
        let  bigImg = document.querySelector(".big img")
        let smallImg = document.querySelector('.small img')
        let ratio = bigImg.offsetWidth / smallImg.offsetWidth;
        // let ratio = 3;
        // console.log('>>>>>ratio',ratio);
        cssStyle.imgStyle2.left = - parseFloat( (offsetX) * ratio) +"px";
        cssStyle.imgStyle2.top = - parseFloat((offsetY) *ratio) + "px";

        this.setState({
            cssStyle:cssStyle,
        });
    }
    //初始化静态参数
    initParam(){
        let cssStyle = JSON.parse(JSON.stringify(this.state.cssStyle))
        let params = JSON.parse(JSON.stringify(this.state.params));

        cssStyle.imgContainer.width = params.width + 'px';
        cssStyle.imgContainer.height = params.height + 'px';

        cssStyle.magnifierContainer.width = params.width +'px';
        cssStyle.magnifierContainer.height = params.height + 'px';
        // cssStyle.magnifierContainer.left =  params.width  +'px';

        cssStyle.imgStyle2.width = params.width + 'px';
        cssStyle.imgStyle2.height = params.height + 'px';
        cssStyle.imgStyle2.transform = "scale("+ params.scale +")";

        this.setState({
            cssStyle:cssStyle
        });
    }

    //更新图片
    updataImg(props){
        this.setState({
            minImg:props.minImg,
            maxImg:props.maxImg,
        })
    }

    // 图片加载情况
    handleImageLoaded(e){
        this.setState({imgLoad:true})
    }

    // 图片加载中
    handleImageErrored(){
        this.setState({
            imgLoad:false,
        })
    }

    render() {
        const {cssStyle, magnifierOff, minImg, maxImg, imgLoad } = this.state;
        return(
            <div className={'box'}>
                <div className={'small'} style={cssStyle.imgContainer}>
                    {/*加载小图*/}
                    <img
                        className={'small img'}
                        style={cssStyle.imgStyle} src={minImg} alt={""}/>
                    <div
                        className={'mask'}
                        style={cssStyle.maskBlock}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        onMouseMove={this.mouseMove}/>
                    {magnifierOff && <div style={cssStyle.mouseBlock}/>}
                </div>
                {magnifierOff &&(
                    <div className={'big hide'}
                        style={cssStyle.magnifierContainer}>
                        <img
                             className={'big img'}
                             style={cssStyle.imgStyle2}
                             src ={maxImg}
                             onLoad={this.handleImageLoaded.bind(this)}
                             onError={this.handleImageErrored.bind(this)}
                             alt={""}/>
                        {!imgLoad && "failed to load"}
                    </div>
                )}
            </div>
        )
    }
}

export default  ImageMagnifier;