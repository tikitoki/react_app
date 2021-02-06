import React from "react"
import PropTypes from "prop-types"
class Shops extends React.Component {
  constructor(props){
    super(props);
    this.state={
      discription :"描述"
    }
  }
  render () {
    return (
      <React.Fragment>
        <div className="shops">
          
          <div className="shop_detail">
            <img src={this.props.img_src}></img>
            
          </div>
          <div className="comment">
            <h2>{this.props.restaurant_name}</h2>
            <p className='discription'>{this.props.discription}</p>
            <a href={this.props.comment.link}>{this.props.comment.review}</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Shops.defaultProps={
  discription:"描述1111111111111111111111111111111111111111111111111111111111111描述1111111111111111111111111111111111111111111111111111111111111",
  comment:{review:"不错的店,下次还来",
  link:"http://127.0.0.1:3000/"}
}

export default Shops;
