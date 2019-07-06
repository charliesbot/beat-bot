import React from "react";
import { useQuery } from "react-apollo-hooks";
import GET_TOP_TRACKS_QUERY from "./TopTracks.query";
import Layout from "./Layout";
import TopTracks from "./TopTracks";

const Home: React.FC = () => {
  const { data, loading } = useQuery(GET_TOP_TRACKS_QUERY);

  return (
    <Layout>{loading ? null : <TopTracks topTracks={data.topTracks} />}</Layout>
  );
};

export default Home;
