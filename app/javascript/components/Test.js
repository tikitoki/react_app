import React from "react"
import PropTypes from "prop-types"
class Test extends React.Component {
  render () {
    return (
      <React.Fragment>
        Test: {this.props.test}
      </React.Fragment>
    );
  }
}

Test.propTypes = {
  test: PropTypes.node
};
export default Test
