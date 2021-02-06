import React from "react"
import PropTypes from "prop-types"
import SubmitForm from './SubmitForm'
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 'a' }

  }
  render() {
    return (
      <React.Fragment>
        <h1>Greeting: {this.props.greeting}</h1>
        <p>a:{this.props.a}</p>
        <SubmitForm para='11' />
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
