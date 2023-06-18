import React from 'react'
// import propTypes from 'prop-types'
import '../style/main.scss'

class Comp1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "ali"
        }
        console.log("component is mounting ")
        console.log("first function is constructor")
    }

    render() {
        console.log("third function is render")

        return (<><div style={{border:"1px solid #ccc",width:"300px",background:"bisque",padding:"5px",margin:"5px"}}>
            <h3>name is : {this.state.name}</h3>
            <button onClick={this.changenamehandler}>changenamehandler</button>
        </div>


        </>);
    }
    static getDerivedStateFromProps(){
        console.log("second function is getDerivedStateFromProps")
        // console.log("اگر میخواید  state های خود را با props پر کنید اینجا بنویسید که  ما داخل تابع render این کار را انجام میدهیم")

        return null;
    }
    componentDidMount() {
        console.log("fourth function is componentDidMount")
        setTimeout(() => {
                    this.setState({name:"mehdi"})

        }, 3000);
        console.log("component is finished mounting ")


    }
    //////////////////UPDATING PART///////////////////////////////////////////////////////////////////////////
    changenamehandler=()=>{
        this.setState({name:'sara'})
        console.log("updating part and changenamehandler called")
    }


    shouldComponentUpdate() {
        console.log("shouldComponentUpdate just called")
        return true;

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
                console.log("prev name is : "+ prevState.name)
        return null;
    }

    componentDidUpdate() {
        console.log("current name is : "+ this.state.name)

    }
/////////////OCCURS WHEN COMPONENT REMOVED/////////////////////////////////////////////////////////////////////////////////////////////////////////
componentWillUnmount() {
    console.log("componentWillUnmount just called")

}
// Comp1.propTypes={
//     price:propTypes.number,
//     available:propTypes.bool
// }
}
export default Comp1;