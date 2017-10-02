import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class Home extends Component {

     constructor(props) {
        super(props)
        // Bind custom methods to object context
        this.getPrices= this.getPrices.bind(this);
        this.getPricesInterval= this.getPricesInterval.bind(this);
        this.stopPrices= this.stopPrices.bind(this);
        // Set initial state
        this.state = {
            prices: {
                quotes: [
                    {symbol: "",
                    lastTradePrice: ""
                    }, 
                    {symbol: "",
                    lastTradePrice: ""
                    }
                ],
                generatedDate: "",
            }
        }
    }

    // React lifecycle methods
    componentWillMount() {
        this.getPrices();
    }

    // API methods
    getPrices() {
        fetch('http://candidate-services.southcentralus.cloudapp.azure.com/randomQuote/quote?symbols=GOOG,AAPL')
        .then(response => response.json())
        .then(response => this.setState({prices: response}))
        .then(response => console.log(this.state.prices.quotes[0].lastTradePrice));
    }

    getPricesInterval(){
        setInterval(this.getPrices, (document.getElementById("refreshInterval").value)*1000);
      };

      stopPrices() {
          clearInterval (getPricesInterval)
      }
   
    // Render JSX
    render() {
        var googlePrice = parseInt(this.state.prices.quotes[0].lastTradePrice).toFixed(2);
        var applePrice = parseInt(this.state.prices.quotes[1].lastTradePrice).toFixed(2);

        return (
            <div className="container">
            <h1>Stock Prices</h1>
            <form>
              <div>Enter one or more symbols to track: <input type="text" id="symbols" value="GOOG,AAPL"/></div>
              <div>
                <input type="button" id="updateNow" value="Update Now" onClick={this.getPrices.bind(this)}/>
                <input type="button" id="clearHistory" value="Clear History"/>
              </div>
              <input type="button" id="startStop" value="Start Automatic Updates" onClick={this.getPricesInterval.bind(this)}/>
              <select id="refreshInterval">
                <option value="5">Every 5 Seconds</option>
                <option value="10">Every 10 Seconds</option>
                <option value="15">Every 15 Seconds</option>
                <option value="20">Every 20 Seconds</option>
                <option value="25">Every 25 Seconds</option>
              </select>
            </form>
            <div>Next update in 3 Seconds</div>
            <h2>Quote Information</h2>
            <div>This data is current as of 6/11/2013 10:00:10 AM</div>
            <table border="1" cellspacing="0" cellpadding="5">
              <tr>
                <th>Symbol</th>
                <th>Price</th>
                <th>Price Date</th>
              </tr>
              <tr>
                <td>GOOG</td>
                <td>{googlePrice}</td>
                <td>{this.state.prices.generatedDate}</td>
              </tr>
              <tr>
                <td>AAPL</td>
                <td>{applePrice}</td>
                <td>{this.state.prices.generatedDate}</td>
              </tr>
            </table>
            </div>
        )
    }
}

export default Home;