import React from 'react';
import AlgoMenuItem from './AlgoMenuItem'

class AlgoMenu extends React.Component {
  render () {
    return (
      <div className="ui inverted segment" align='right' style={{color: "#49fb35", marginTop: '10px', marginBottom: '10px', marginRight: '0px', marginLeft: '20px', height: '300px'}}>
        <AlgoMenuItem />
        <AlgoMenuItem />
        <AlgoMenuItem />
        <AlgoMenuItem />
        <AlgoMenuItem />
        <AlgoMenuItem />
      </div>
    )
  }

}

export default AlgoMenu;