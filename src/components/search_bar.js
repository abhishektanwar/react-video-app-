import React ,{ Component } from 'react';

//function based component
// const SearchBar = () => {
//     return <input />;
// };
// class based component
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state={term : ''};
    }

    render() {
           
        return (
            <div>
                <input value={this.state.term}
                    onChange={this.onInputChange}/><br/>
                value of input : {this.state.term}
            </div>
        ); 
    }

    onInputChange = (event)=>{
        console.log(event.target.value);
        this.setState({term : event.target.value});
    }
}
export default SearchBar;