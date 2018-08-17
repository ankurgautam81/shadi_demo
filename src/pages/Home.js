import React from 'react'
import { connect } from 'react-redux'

class HomeContainer extends React.Component {
  async componentDidMount () {
  }

  componentWillUnmount () {

  }

  render () {
    return (
      <div>Home</div>
    )
  }
}


function mapStateToProps (state) {
  return {


  }
}
function mapDispatchToProps (dispatch) {
  return {

  }
}
export { HomeContainer }
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)