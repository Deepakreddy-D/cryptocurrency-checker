import {Component} from 'react'

import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
// import {async} from 'fast-glob'

class CryptocurrencyTracker extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrency()
  }

  getCryptocurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updated = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))

    console.log(updated)

    this.setState({
      blogList: updated,
      isLoading: false,
    })
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <div className="bg">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptocurrenciesData={blogList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
