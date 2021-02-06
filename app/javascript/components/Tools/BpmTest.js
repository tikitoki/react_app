import React from 'react'

var d = new Date(2000, 1, 1, 0, 0, 0, 0);
var time_tmp = new Date();
var count_tmp = 0;


class BpmTest extends React.Component {
    handleClick = () => {
        if (this.state.time == d) {
            this.setState({ start_time: (new Date()), time: (new Date()) });
            // debugger;
            count_tmp = 0;
            // alert(start_time);
        }
        else {
            time_tmp = new Date();
            count_tmp = count_tmp + 1;
            this.setState({ count: this.state.count + 1, time: time_tmp });
            // console.log(this);

            // alert("time_tmp:"+time_tmp+"\r"+"this.state.start_time"+this.state.start_time+"\r"+
            // "Math.abs(time_tmp-this.state.start_time):"+Math.abs(time_tmp-this.state.start_time)+"\r"+"count_tmp:"+count_tmp);
            this.setState({ bpm: (count_tmp / Math.abs(time_tmp - this.state.start_time) * 1000 * 60).toFixed(2) });
        }
    }

    alert_1() {
        alert("11");
    }

    constructor(props) {
        super(props);
        this.state = { count: 0, bpm: 0, time: d, start_time: d };
    }
    render() {
        return (
            <div className="bpm-test-container route-page">
                {/* <div className="col-sm-3">1</div>
                <div className="col-sm-3">1</div> */}
                {/* <script>alert({count})</script> */}
                {/* <p>{this.state.start_time.map(Date.parse)}</p> */}
                <p>{this.state.bpm}</p>
                {/* <p>{Math.abs(this.state.time)}</p> */}
                <button onClick={() => this.handleClick()}>Beat</button>
                <button onClick={() => {
                    this.setState({ count: 0, time: d, bpm: 0, start_time: d });
                }}>Reset</button>
            </div>
        )
    }
}

export default BpmTest;