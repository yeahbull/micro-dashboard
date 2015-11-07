import React from 'react'
import { AppBar, FontIcon, Styles, Tabs, Tab } from 'material-ui'
const { Colors } = Styles

export default React.createClass({
  render: function() {
    const iconStyle = {
      marginTop: 11,
      marginLeft: 20,
      marginRight: 20
    }

    const icon = <FontIcon style={iconStyle}
      className='material-icons'
      color={Colors.grey50}>cloud</FontIcon>

    const appBarStyle = {position: 'absolute', top: 0, left: 0}

    return <div>
      <AppBar style={appBarStyle} zDepth={0} iconElementLeft={icon} title='Micro dashboard'>
	<Tabs style={{width: 400}}>
          <Tab label='EXPLORER' />
          <Tab label='QUERY TOOL' />
          <Tab label='API' />
	</Tabs>
      </AppBar>
    </div>
  }
})
