import React from 'react';
import Comp1 from './component/comp1';
import'./style/main.scss'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        flag: true,
    }
}

changeflaghandler=()=>{
  this.setState({flag:!this.state.flag})
}
  render() {
    return (<>{this.state.flag && <Comp1 />}
    <hr/>
    <button onClick={this.changeflaghandler}>change flag handler</button> </>);

      

    
  }
}

export default App;

