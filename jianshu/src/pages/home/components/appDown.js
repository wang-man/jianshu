import React from 'react';

class Appdown extends React.PureComponent {
   render(){
      return (
         <a className="appDown" href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
            <img alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
            <div className="info">
               <div className="title">
                  下载简书手机App <span>></span>
               </div>
               <div className="description">
                  随时随地发现和创作内容
               </div>
            </div>
         </a>
      )
   }
}

export default Appdown