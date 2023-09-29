import './index.css'

const CryptocurrencyItem = props => {
  const {eachList} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = eachList

  return (
    <li className="cryptocurrency-item">
      <div className="logo-title-con">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usd-euro-con">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
