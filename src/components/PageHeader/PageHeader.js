import React from 'react';
import componentStyles from './PageHeader.scss';

const PageHeader = props => {
  return (
    <div className={componentStyles.container}>
      <div className={componentStyles.metaSocial}>
        <div>
          {props.title && <h1 className={componentStyles.title}>{props.title}</h1>}
          {props.subtitle && <h2 className={componentStyles.subtitle}>{props.subtitle}</h2>}
        </div>
        <div>
          Blah
        </div>
      </div>
    </div>
  );
}

export default PageHeader;