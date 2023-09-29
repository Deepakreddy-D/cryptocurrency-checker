import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="list-bg-con">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
            alt="cryptocurrency"
          />
        </div>

        <div className="cryptocurrency-list-con">
          <div className="header-con">
            <p className="coin-type">Coin Type</p>
            <div className="usd-euro-con">
              <p className="usd">USD</p>
              <p className="euro">EURO</p>
            </div>
          </div>

          <ul className="crypto-list-con">
            {cryptocurrenciesData.map(eachList => (
              <CryptocurrencyItem eachList={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
