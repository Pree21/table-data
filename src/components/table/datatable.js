import React, { Component } from 'react';

class DataTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectData: false
        }
    }

    componentWillReceiveProps(nextProps){
        const {SelectAllData} = nextProps;
        if(SelectAllData !== undefined){
            this.setState({selectData:SelectAllData})
        }
    }

    selectData(e){
        this.setState({
            selectData: !this.state.selectData
        })
        e.stopPropagation();
    }
    handleClick=()=>{
        alert('Row Clicked');
    }
    render() {
        const { item,index } = this.props;
        const { selectData } = this.state
        return (
            <tr onClick={this.handleClick} style={{background : selectData ? '#eee' : '#fff' }}>
                <td>{index}</td>
                <td><input type='checkbox' value={selectData} checked={selectData} 
                onClick={(e)=>this.selectData(e)} /></td>
                <td><img src={item.thumbnailUrl} width='50' /></td>
                <td>{item.title}</td>
            </tr>
        );
    }
}
export default DataTable;