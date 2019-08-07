import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import nytClient from '../clients/nytClient';

const Context = React.createContext();

const AppContext = props => {
  const [listNames, setListNames] = useState();
  const [fetchingAppData, setFetchingAppData] = useState(true);
  const [errorFetchingAppData, setErrorFetchingAppData] = useState();

  useEffect(() => {
    fetchAppData();
  }, []);

  const fetchAppData = async () => {
    setFetchingAppData(true);

    try {
      const response = await nytClient.getNames();
      setListNames(response.results);
    } catch (e) {
      setErrorFetchingAppData(e.message);
    } finally {
      setFetchingAppData(false);
    }
  }

  const value = {};

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useAppContext can only be used within a AppContext component');
  } else {
    return context;
  }
};

export default AppContext;