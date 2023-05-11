import React, { Component }, from 'react'


class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" }
            { side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nRails: 0
        }
    }
    render(){
        return(
            <div className='CoinCantainer'>
                <h2>Let's Flip A Coin!</h2>
            </div>
        )
    }
}

export default CoinContainer;