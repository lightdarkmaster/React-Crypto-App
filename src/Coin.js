import React from 'react';
import './Coin.css';

const Coin = ({ image, name, price, volume, pricechange, marketcap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt={`${name} logo`} />
          <h1>{name}</h1>
          {/* <p className="coin-symbol">{symbol}</p> */}
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{price}</p>
          <p className="coin-volume">Rs.{volume ? volume.toLocaleString() : 'N/A'}</p>
          {pricechange < 0 ? (
            <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">Mkt Cap: Rs.{marketcap ? marketcap.toLocaleString() : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
