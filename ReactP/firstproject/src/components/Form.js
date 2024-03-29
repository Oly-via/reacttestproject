import { Component } from "react";
class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
    }
    handleLastNameChange= (event) => {
        this.setState({
            lastname: event.target.value,
        })
    }
    handleChange= (event) => {
        this.setState({
            firstname: event.target.value,
        })
    }
    handleSubmit= (event) => {
        event.preventDefault();
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        })
    }
    render() {
        return ( 
        <div>Form
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type= "text" value={this.state.firstname}></input>
                <input value= {this.state.lastname} type= "text" onChange={this.handleLastNameChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div> 
        )
    }
}
export default Form;