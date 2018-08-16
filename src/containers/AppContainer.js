import React from "react";
import { connect } from "react-redux";
import ShellContainer from "../containers/ShellContainer";

class App extends React.Component {

  async componentDidMount () {
  }

  render() {
    return (
      <ShellContainer>
        <div>
          {this.props.children}
        </div>
      </ShellContainer>
    )
  }
}
function mapStateToProps(state) {
  return {
    isMobile: state.isClientOnMobile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App)