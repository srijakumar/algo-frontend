import React from 'react'
import ExampleContent from './ExampleContent'
import RefreshButton from '../AppLevel/RefreshButton'
import Flair from '../Flair/Flair'

class ExampleContentContainer extends React.Component {
  
  render () {
    return (
      <center>
      <div className="circular ui green segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <center>
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '0px', marginLeft: '50px', marginRight: '50px', maxWidth: '200px'} }>
          <center>
            <ExampleContent
              createExampleSetter={this.props.createExampleSetter} 
              cSwitch={this.props.exampleContent}
              content={this.props.example.content}
              algorithm={this.props.algorithm}
              example={this.props.example}
              whichMode={this.props.whichMode}
              onCreateContent={this.props.onCreateContent} 
            />
          </center>
        </div>
        </center>
        <br />
          <center>
          <div className="circular ui raised red segment">
            <RefreshButton
            reloadRefresh={this.props.reloadToHome} 
            whichMode={this.props.whichMode} 
            />
            <Flair />
            
          </div>
          </center>
          
      </div>
      </center>
    );
  }

}

export default ExampleContentContainer; 