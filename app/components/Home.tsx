import React from "react";
import { useQuery } from "react-apollo-hooks";
import GET_TOP_TRACKS_QUERY from "./TopTracks/TopTracks.query";
import TopTracks from "./TopTracks";

const Home: React.FC = () => {
  const { data, loading } = useQuery(GET_TOP_TRACKS_QUERY);

  if (loading) {
    return null;
  }

  return <TopTracks topTracks={data.topTracks} />;
};

export default Home;
