import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props){
     super(props);
     this.state={
         quote:null,
         color:'blue'
     }
     this.getNewQuote= this.getNewQuote.bind(this);
     this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        var colors = ['blue', 'pink', 'grey', 'purple'];
        var x = Math.floor(Math.random()* 4 + 0 );
        var color= colors[x];
        this.setState({color:color});
    }

    getNewQuote(){
        axios.get('https://talaikis.com/api/quotes/random/')
        .then((response)=>this.setState({quote:response.data}, this.changeColor()))
    }
    componentDidMount(){
        this.getNewQuote();
    }



    render() {
        return (
            <div>
                <p style = {{color:this.state.color}}>{this.state.quote!==null && this.state.quote.quote}</p>
                <p>{this.state.quote!==null && this.state.quote.author}</p>
                <button onClick={this.getNewQuote}>Get New Quote </button>
            </div>
        );
    }
}

export default App;
