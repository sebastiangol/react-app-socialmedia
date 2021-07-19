import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Big News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        'Pears have become extinct',
        '2 million people talking about it'
      )}

      {newsArticle('Man from Canada passes away', '0 people talking about it')}
      {newsArticle(
        'BREAKING: Queen steps down',
        '745,000 people talking about it'
      )}
      {newsArticle(
        'URGENT: Panda outbreak',
        '37 trillion people talking about it'
      )}
      {newsArticle(
        'Bitcoin replaced by Stupidcoin',
        '45 million people talking about it'
      )}
      {newsArticle(
        'Sebbergramchatbook stocks soar',
        '113 million people talking about it'
      )}
    </div>
  );
}

export default Widgets;
