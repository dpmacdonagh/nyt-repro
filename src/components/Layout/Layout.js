import React from 'react';
import { useAppContext } from 'components/AppContext/AppContext';
import componentStyles from './Layout.scss';

const Layout = props => {
  const appContext = useAppContext();

  if (appContext.fetchingAppData) return 'Loading';
  if (appContext.errorFetchingAppData) return 'Error';

  return (
    <React.Fragment>
      <div className="header-container"></div>
      <div className={componentStyles.content}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default Layout;