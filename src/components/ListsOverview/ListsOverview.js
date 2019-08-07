import React, { useState, useEffect } from "react";
import PageHeader from "components/PageHeader/PageHeader";
import Layout from "components/Layout/Layout";
import nytClient from "../clients/nytClient";
import List from "./List";

const ListsOverview = () => {
  const [lists, setLists] = useState();
  const [fetchingLists, setFetchingLists] = useState(true);
  const [fetchingListsError, setFetchingListsError] = useState(false);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    setFetchingLists(true);

    try {
      const response = await nytClient.getOverview();
      setLists(response.results.lists);
    } catch (e) {
      setFetchingListsError(true);
    } finally {
      setFetchingLists(false);
    }
  }

  if (fetchingLists) return 'Loading';

  if (fetchingListsError) return 'Error';
  
  return (
    <Layout>
      <div className="ListsOverview">
        <PageHeader
          title="The New York Times Best Sellers"
          subtitle="Authoritatively ranked lists of books sold in the United States, sorted by format and genre."
        />
        <div>
          {Array.isArray(lists) && lists.map(list => <List list={list} />)}
        </div>
      </div>
    </Layout>
  );
};

export default ListsOverview;
