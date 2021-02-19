import React from 'react'

const Home = () => {
    return (
        <div className="home-page route-page">
            
            <div className="canvas">
                <div className="image reactjs" style={style.reactjs}></div>
                <div className="image css" style={style.css}></div>
                <div className="image html" style={style.html}></div>
                <div className="image mysql" style={style.mysql}></div>
                <div className="image javascript" style={style.javascript}></div>
                <div className="image ps" style={style.ps}></div>
                <div className="image ruby" style={style.ruby}></div>
                <img className="image top-subject" src="/images/Full-Stack-Web-Developer-subject.png"></img>
                {/* <img className="image top-text" src="/images\Full-Stack-Web-Developer-text.png"></img> */}
            </div>
            <div className="top-text">
                <p>DESIGN,CODING<br></br>&CREATE</p>
            </div>
            <div className="nav-project">
                <p>我的项目</p>
                <a target="_blank" className="citrus" href="/pages/citrus"></a>
            </div>
        </div>
    );
}

const style={reactjs:{background: "url('/images/Full-Stack-Web-Developer-text.png') no-repeat -96px -105px",
width: "190px",
height: "37px",
top: "107px",
left: "96px"},
css:{background: "url('/images/Full-Stack-Web-Developer-text.png') no-repeat -412px -80px",
width: "107px",
height: "44px",
top: "80px",
left: "410px"},
html:{background: "url('/images/Full-Stack-Web-Developer-text.png') no-repeat -644px -92px",
width: "213px",
height: "62px",
top: "93px",
left: "644px"},
mysql:{background: "url('/images/Full-Stack-Web-Developer-text.png') no-repeat -112px -232px",
width: "109px",
height: "34px",
top: "231px",
left: "112px"},
javascript:{background: "url('/images/Full-Stack-Web-Developer-text.png') no-repeat -671px -234px",
width: "165px",
height: "32px",
top: "234px",
left: "671px"},
ps:{background: "url('/images/Full-Stack-Web-Developer-text.png') no-repeat -124px -345px",
width: "86px",
height: "65px",
top: "348px",
left: "123px"},
ruby:{background: "url('/images/Full-Stack-Web-Developer-text.png') no-repeat -694px -375px",
width: "80px",
height: "32px",
top: "375px",
left: "694px"}

};



export default Home;