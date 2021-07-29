<template>
  <section class="home">
      <div class="home-content">
         <div class="header-wrapper">
             <div class="header">
              <a class="navbar-brand" href="/">
                  <img :src="testLogo" alt="">
              </a>
           </div>

             <div class=" head-nav-w collapse navbar-collapse navbar-right" id="example-navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="on"><a href="/" class="as"><span>首页</span></a></li>
                    <li ><a href="/join-10.html" class="as"><span>招聘</span></a></li>
                    <li >
                        <a href="/cl-9.html" class="as"><span>策略与技术</span></a>
                    </li>
                    <!-- <li ><a href="/products-15.html" class="as"><span>产品</span></a></li> -->
                    <li >
                        <a href="/about.html" class="as"><span>关于</span></a>
                    </li>
                    <li > 
                        <a href="/contact-7.html" class="as"><span>联系</span></a>
                    </li>
                </ul>
            </div>
         </div>
          <div class="banner-canvas" id="hoemVideo" winh :style="{background:'#171d39',overflow:'hidden',position: 'relative',height: vidioHeight}">
              <video autoplay preload loop muted src="http://www.probquant.cn/Application/Home/View/Static/Images/home.mp4" style="min-width:100%;min-height:100%;margin: auto;position: absolute; z-index: 1; top: 50%; left: 50%; transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);"></video>
              <div @click="handleTabClick('#home-section-1')" class="dsvg">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="scroll-blast" x="0px" y="0px" viewBox="0 0 14.2 27.6" xml:space="preserve" enable-background="new 0 0 14.2 27.6"><path class="a3" d="M7.1,27.6L7.1,27.6c-0.1,0-0.3-0.1-0.4-0.1l-6.6-6.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0l6.2,6.2 l6.2-6.2c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-6.6,6.6C7.3,27.5,7.2,27.6,7.1,27.6z"></path><path class="a2" d="M7.1,17.6L7.1,17.6c-0.1,0-0.3-0.1-0.4-0.1l-6.6-6.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0l6.2,6.2 l6.2-6.2c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-6.6,6.6C7.3,17.5,7.2,17.6,7.1,17.6z"></path><path class="a1" d="M7.1,7.6L7.1,7.6c-0.1,0-0.3-0.1-0.4-0.1L0.1,0.9C0,0.7,0,0.4,0.1,0.2C0.3,0,0.7,0,0.9,0.2l6.2,6.2l6.2-6.2 C13.5,0,13.8,0,14,0.1s0.2,0.5,0,0.7L7.4,7.4C7.3,7.5,7.2,7.6,7.1,7.6z"></path></svg>
              </div>
              <div class="ban-txt">
                  <div class="container text-center">
                      <div class="ban-move-box  animated fadeInDown" style="animation-delay:.1s">
                          <div class="p1  animated fadeInDown" style="animation-delay:.2s">让世界看到概率的意义</div>
                          <div class="line wow animated fadeInDown" style="animation-delay:-.2s"></div>
                          <div class="p2  animated fadeInDown" style="animation-delay:.3s"><span>携手概率 &nbsp;用科学做眼 &nbsp;&nbsp;以逻辑为桨 &nbsp;驶向最亮的光</span></div>
                          <div class="p3  animated fadeInDown" style="animation-delay:.4s"></div>
                      </div>
                  </div>
              </div>
          </div>

          <div id="home-section-1" class="home-section-1">
             <div class="container">
                  <div class="title-s1">
                    <h1>关于概率投资</h1>
                      <h3>About Us</h3>
                  </div>
                  <div class="text">
                      <p></p>
                  </div>
                <div class="row rowlist">
                    <div class="col-sm-6">
                      <a href="/about.html" class="boxs animate-img">
                          <div class="img animated"><img src="../../assets/images/section1-1.jpg" class="img-position" alt="概率文化"></div>
                          <div class="shaw">
                              <div class="dtable">
                                  <div class="dtcell">
                                      <h1 >概率文化</h1>
                                      <div class="pm">科学投资、高效工作、轻松生活</div>
                                      <div class="more-s10">read more <i class="icos ico-rg"></i></div>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>

                    <div class="col-sm-6">
                      <a href="/join-10.html" class="boxs animate-img">
                          <div class="img animated"><img src="../../assets/images/section1-2.jpg" class="img-position" alt="招贤纳士"></div>
                          <div class="shaw">
                              <div class="dtable">
                                  <div class="dtcell">
                                      <h1>招贤纳士</h1>
                                      <div class="pm">加入我们，运用概率的尖端装备，成为你自己的超级英雄</div>
                                      <div class="more-s10">read more <i class="icos ico-rg"></i></div>
                                  </div>
                              </div>
                          </div>
                        </a>
                      </div>
                </div>
             </div>
          </div>

          <div class="home-section-2">
        <div class="container">
            <div class="title-s1">
                <h1 class="animated fadeIn" style="animation-delay:.2s">核心优势</h1>
                <h3>Core Strength</h3>
            </div>
            <div class="text">
                <p class="animated fadeIn" style="animation-delay:.2s">尖端的技术，极致的性能</p>
            </div>
            <div class="more-s1"><a href="/cl-9.html"><span>read more</span></a></div>
            <div class="row rowlist">
               
                

                               
                <div class="col-sm-4 col-xs-4">
                    <div class="boxs">
                        <div class="img wow rotateIn" data-wow-delay="0s"><img src="../../assets/images/section2-1.png" class="img-position" alt="强兼容性策略"></div>
                        <div class="txt">
                            <h4 class="wow fadeInUp" data-wow-delay="0s">强兼容性策略</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                               
                <div class="col-sm-4 col-xs-4">
                    <div class="boxs">
                        <div class="img wow rotateIn" data-wow-delay="0.5s"><img src="../../assets/images/section2-2.png" class="img-position" alt="高效的回测平台"></div>
                        <div class="txt">
                            <h4 class="wow fadeInUp" data-wow-delay="0.5s">高效的回测平台</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                               
                <div class="col-sm-4 col-xs-4">
                    <div class="boxs">
                        <div class="img wow rotateIn" data-wow-delay="1s"><img src="../../assets/images/section2-3.png" class="img-position" alt="完善的投研环境"></div>
                        <div class="txt">
                            <h4 class="wow fadeInUp" data-wow-delay="1s">完善的投研环境</h4>
                            <p></p>
                        </div>
                    </div>
                    </div>
                   </div>
                </div>
            </div>
      </div>
  </section>
</template>

<script>

import { IMGBASEURL } from "@/utils/config";

export default {
  data() {
    return {
      testLogo: require('@/assets/images/test-log.png'),
      IMGBASEURL,
      vidioHeight:'765px'
    };
  },
  components: {
   
  },
  async mounted() {
    const height = document.documentElement.clientHeight;
    console.log('height',height);
    this.$nextTick(()=>{
        this.vidioHeight = height + 'px'
    })

    new  this.$wow.WOW().init()

  },
  beforeDestroy() {
    if (this.scrollFun) window.removeEventListener("scroll", this.scrollFun);
  },

  methods: {
    bgLoad(e) {
      this.bgHeight = e;
    },
    handleTabClick({ key }) {
      document.getElementById('home-section-1').scrollIntoView({ behavior: "smooth" });
    },
    initScroll() {
      this.scrollFun = () => {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;

        this.domScrollTop = scrollTop;
        this.fix = this.domScrollTop >= this.bgHeight;

        ["article-one", "article-two", "article-three", "article-four"].forEach(
          (n) => {
            let _height = document.querySelector(`#${n}`).offsetTop;
            if (this.domScrollTop >= _height - 80) {
              this.activeComponent = n;
            }
          }
        );

        if (
          this.domScrollTop + document.documentElement.clientHeight ==
          document.body.clientHeight
        ) {
          this.activeComponent = "article-four";
        }
      };

      this.scrollFun && this.scrollFun();

      window.addEventListener("scroll", this.scrollFun);
    },
  },
};
</script>

<style lang="scss" scoped>
*{
  transition: all .4s ease-out;
}
@media (max-width:768px){
  .home {
    display: none;
  }
}
   .home-content{
     min-height: 100vh;
     overflow-y: auto;
     

  .home-section-2{
    padding: 70px 0;
    background: url('../../assets/images/bg1.jpg') no-repeat;
    background-size: cover;
    color: #fff;
}
.home-section-2 .title-s1{margin-bottom: 28px;}
.home-section-2 .text{
    color: #999;
    line-height: 2;
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
}
.home-section-2 .rowlist{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}
.home-section-2 .rowlist .boxs{
    display: block;
}
.home-section-2 .rowlist .boxs .img{
    height: 233px;
    position: relative;
}
.home-section-2 .rowlist .boxs .img:hover img{
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
}
.home-section-2 .rowlist .boxs .txt{text-align: center;margin-top: 30px;}
.home-section-2 .rowlist .boxs .txt h4{font-size:24px;margin-bottom: 10px;margin-bottom:15px;}
.home-section-2 .rowlist .boxs .txt p{
    max-width: 280px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 28px;
    color: #999;
}

.more-s1 a{
    display: inline-block;
    line-height: 36px;
    border:2px solid #006bb5;
    border-radius: 40px;
    font-size: 16px;
    text-transform: uppercase;
    overflow: hidden;
    height: 40px;
    -webkit-transition: all .3s;
    transition: all .3s;
    font-family: arial;
}
.more-s1{text-align: center;}
.more-s1 a:hover{color: #fff;}
.more-s1 a span{
    position: relative;
    display: inline-block;
    width: 180px;
    overflow: hidden;
    z-index: 2;
    color: white;
}
.more-s1 a span:after{
    background: #006bb5;
    content: '';
    height: 100%;
    width: 0%;
    position: absolute;
    top: 0;
    left: -10px;
    // -webkit-transform: skewX(-30deg);
    transform: skewX(-30deg);
    // -webkit-transition: all .4s;
    transition: all .4s;
    z-index: -1;
}
.more-s1 a:hover span:after{width: 112%;}

     .home-section-1{
        padding-top: 70px;
        padding-bottom: 60px;
        background: url('../../assets/images/bg2.jpg') center top no-repeat;
        background-size: 300px 250px;

        .animate-img{overflow: hidden;}
        .animate-img img{-webkit-transition: transform 0.3s;transition: transform 0.3s;}
        .animate-img:hover img{-webkit-transform: scale(1.1);transform: scale(1.1);}
      }
      // .container{
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      // }
      .home-section-1 .text{
          font-size: 18px;
          line-height: 32px;
          color: #555;
          text-align: center;
      }
      .title-s1{
        text-align: center;
        margin-bottom: 50px;
          }
      .title-s1 h1{
          font-family: "SourceHanSansCNRegular";
          margin-bottom: 15px;
      }
      .title-s1 h3{font-family: arial;}
      .dtable{
        height: 100%;
         display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .dtable .dtcell{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .title-s1 h4{font-size: 18px;line-height: 32px;}
      .home-section-1 .more-s10{text-align: center;margin-top: 25px;color: #1c4f88;}
      .more-s10 {font-size: 18px;text-transform: uppercase;font-family: arial;}
      .home-section-1 .rowlist{
         margin-top: 60px;
         width: 100%;
        }
       .rowlist{
         display: flex;
         justify-content: space-between;
         width: 345px;
         height: 227px;
         padding: 0 30px;
         img{
           width: 100%;
           height: 227px;
           display: block;

         }
         a{
            width: 345px;
         height: 227px;
         }
       }
       .col-sm-6{
         width: 48%;
         box-sizing: border-box;
       }
        .home-section-1 .rowlist .boxs{
            display: block;
            position: relative;
        }
        .home-section-1 .rowlist .boxs .img{
            position: relative;
            // padding-top: 66%;
        }
        .home-section-1 .rowlist .boxs .img img{width: 100%;height: 100%;object-fit: cover;}
        .home-section-1 .rowlist .boxs .shaw{
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            color: #fff;
        }
        .home-section-1 .rowlist .boxs .shaw h1{font-family: "SourceHanSansCNRegular"}
        .home-section-1 .rowlist .boxs .shaw .pm{
            font-size: 16px;
            line-height: 24px;
            max-width:70%;
            margin: 20px auto ;
            height: 0;
            overflow: hidden;
        }
        .home-section-1 .rowlist .boxs .shaw .more-s10{
            color: #fff;
          height: 0;
          line-height: 26px;
          overflow: hidden;
      }
      .home-section-1 .rowlist .boxs:hover .shaw .pm{height: 72px;}
      .home-section-1 .rowlist .boxs:hover .shaw .more-s10{height: 26px;}
      .home-section-1 .rowlist{margin-top: 60px;}
        .home-section-1 .rowlist .boxs{
            display: block;
            position: relative;
        }
        .home-section-1 .rowlist .boxs .img{
            position: relative;
            // padding-top: 66%;
        }
        .home-section-1 .rowlist .boxs .img img{width: 100%;height: 100%;object-fit: cover;}
        .home-section-1 .rowlist .boxs .shaw{
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            color: #fff;
        }
        .home-section-1 .rowlist .boxs .shaw h1{font-family: "SourceHanSansCNRegular"}
        .home-section-1 .rowlist .boxs .shaw .pm{
            font-size: 16px;
            line-height: 24px;
            max-width:70%;
            margin: 20px auto ;
            height: 0;
            overflow: hidden;
        }
        .home-section-1 .rowlist .boxs .shaw .more-s10{
            color: #fff;
            height: 0;
            line-height: 26px;
            overflow: hidden;
        }
        .home-section-1 .rowlist .boxs:hover .shaw .pm{height: 72px;}
        .home-section-1 .rowlist .boxs:hover .shaw .more-s10{height: 26px;}
      .head-nav-w{
          // margin-top: 25px;
          padding-right: 0;
          display: flex;

          .navbar-nav{
            display: flex;
            list-style: none;
            align-items: center;
            li{
               margin-left:30px;
              padding-right: 5px;
              padding-left: 5px;
              font-size:16px;
              position: relative;
              
              a{
                padding:10px 6px;color:#fff;
                position: relative;
                height: 40px;
                display: flex;
                // display: block;
                line-height: 20px;
                font-weight: bold;
                font-family: "SourceHanSansCNRegular";
                transition: all .42s ease;
                transition-timing-function: cubic-bezier(.2, 1, .3, 1);
                overflow: hidden;
                &>span{
                  font-weight: bold;
                  // color: white;
                }
              }
              a:hover, a:focus {color: #335488;text-decoration:none;}
             
              &.on .as:after{
                width: 28px;
              }
              &.on>a{
                 color: #00d8ff;
              }
            }

            li.on > a{color:#00d8ff;}
            li .as span{
              display: block;
              transition: all .4s ease-out;
            }
            li > a:focus{
                color:#00d8ff;
            }
            li .as:before {
                content: '';
                color: #00d8ff;
                height: 100%;
                width: 100%;
                margin-top: 0px;
                padding: 10px 6px;
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                transform: translate3d(0, 55%, 0);
                transition: all .42s ease;
                transition-timing-function: cubic-bezier(.2, 1, .3, 1);
                font-family: "SourceHanSansCNRegular";
                line-height: 20px;
                
            }
            li:nth-of-type(1) .as:before {
                content: '首页';
            }
            li:nth-of-type(2) .as:before {
                content: '招聘';
            }
            li:nth-of-type(3) .as:before {
                content: '策略与技术';
            }
            li:nth-of-type(4) .as:before {
                content: '关于';
            }
            li:nth-of-type(5) .as:before {
                content: '联系';
            }
            li .as span{display: block;}
            li:hover a.as:before{
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
              opacity: 1;
          }
          li:hover a.as span{
              // -webkit-transform: translate3d(0, 55%, 0);
              transform: translate3d(0, -55%, 0);
              opacity: 0;
          }
            li .as:after{
                  display: block;
                  position: absolute;
                  left: 50%;
                  bottom:0px;
                  width:0px;
                  height: 2px;
                  background: #00d8ff;
                  content: '';
                  z-index: 2;
                  margin-left:-14px;
                  -webkit-transition: all .35s ease;
                  transition: all .35s ease;
              }

            li:hover .as:after{
              width: 28px; 
              color: #00d8ff !important;
             
            }
          }
      }

      .banner-canvas{
        height: rem(764);
        .ban-txt{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          z-index: 10;
        }
        .ban-txt .p1{
            font-size: 38px;
            margin-bottom: 0px;
            opacity: 0;
            font-family: "SourceHanSansCNRegular";
            text-transform: uppercase;
            color: #fff;
            margin-bottom: 10px;
        }
        .ban-txt .p2{font-size: 18px;opacity: 0;color: #fff;text-transform: uppercase;}
        .ban-txt .p2 span{opacity: 0.7;}
        .ban-txt .p3{opacity: 0;margin-top: 15px;font-size: 20px;}
        .ban-txt .ban-move-box .line{
            width: 220px;
            height: 2px;
            background: #00d8ff;
            margin: 25px auto 30px;
            opacity: 0;
        }
        .banner-canvas .ban-txt .p1{font-size: 54px;font-family: "SourceHanSansCNBold"}
        .focus .ban-txt .ban-move-box .line{background: #fff;}
        .dsvg {
          position: absolute;
          right: 0;
          bottom: 30px;
          left: 0;
          width: 54px;
          width: 27px;
          margin: 0 auto;
          z-index: 4;
          text-align: center;
          cursor: pointer;
         }
         .dsvg {
              position: absolute;
              right: 0;
              bottom: 30px;
              left: 0;
              width: 54px;
              width: 27px;
              margin: 0 auto;
              z-index: 4;
              text-align: center;
              cursor: pointer;
          }
          .dsvg .scroll-blast {
              height: 28px;
              width: 14px;
              margin-top: -6px;
              margin-left: 20px;
              margin-left: 0px;
          }
          .dsvg .scroll-blast path {
              fill: #fff;
              animation: arrowHint 1.5s infinite;
              -webkit-animation-delay: 3.5s;
              animation-delay: 3.5s
          }
          .dsvg .scroll-blast path.a1 {
              fill: #5fcdd6;
              -webkit-animation-delay: -.75s;
              animation-delay: -0.75s
          }
          .dsvg .scroll-blast path.a2 {
              fill: #87dae1;
              -webkit-animation-delay: -.375s;
              animation-delay: -0.375s
          }
          .dsvg .scroll-blast path.a3 {
              fill: #b0e6eb;
              -webkit-animation-delay: 0s;
              animation-delay: 0s
          }
          @keyframes arrowHint {
                0% {
                opacity:0
                }
                40% {
                 opacity:1
                }
                80% {
                 opacity:0
                }
                to {
                 opacity:0
                }
                }
      }

      .header-wrapper{
          position: fixed;
          top: 0;
          left: 0;
          height: 103px;
          width: 100%;
          padding: 4px 1%;
          z-index: 999;
          display: flex;
          justify-content: space-between;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          transition: all 0.3s;
          background: rgba(23,29,57,0.9);
      }
      .header{
        // padding-right: 15px;
        // padding-left: 15px;
        // margin-right: auto;
        // margin-left: auto;
        height: 94px;
        display: flex;
        align-items: center;
      }
      .navbar-brand{
        float: left;
        height: auto;
        padding: 10px 15px;
        font-size: 18px;
        line-height: 20px;
        img{
          height: 50px;
        }
      }  
     }
</style>
