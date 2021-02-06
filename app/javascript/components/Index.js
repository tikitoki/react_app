// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = { a: 'a' }

  }
  render(){
    return(
      
        <React.Fragment>
          <h1>Greeting</h1>
        </React.Fragment>
      
    );
  }
}

export default Index
