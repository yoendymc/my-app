import React, { Component } from 'react'
import Select from 'react-select'
//import 'react-select/dist/react-select'

class Multiselect extends Component{
    constructor(...props){
        super(...props)
        this.state ={
            options:this.props.options,
            value:[]

        }
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }
    render(){
        return (
            <Select 
            multi={true}
            simpleValue={true}
            joinValue = {true}
            name = {this.props.name}
            value = {this.state.value}
            options = {this.props.options}
            onChange = {this.handleSelectChange}
            />
        )

    }

    handleSelectChange(value){
        this.setState({value})

    }
    
}

export default Multiselect