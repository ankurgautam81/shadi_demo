import React from "react";
import { connect } from "react-redux";
import DesktopNavBar from "../components/DesktopNavBar"
import "../assets/common.css"

class ShellContainer extends React.Component {



  render() {
    return (
      <div id="shell-container">
        {
          <DesktopNavBar/>
        }
        <div className="child-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isMobile: state.isClientOnMobile
  }
}

function mapDispatchToProps(dispatch) {
  return { }
}

export { ShellContainer }
export default connect(mapStateToProps, mapDispatchToProps)(ShellContainer)