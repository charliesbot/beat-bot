import React from "react";
import { useQuery } from "react-apollo-hooks";
import GET_TOP_TRACKS_QUERY from "./TopTracks/TopTracks.query";
import TopTracks from "./TopTracks";
import { Query } from "../interfaces/types";

const Home: React.FC = () => {
  const { data, loading } = useQuery<Pick<Query, "topTracks">>(
    GET_TOP_TRACKS_QUERY,
  );

  if (loading || !data) {
    return null;
  }

  return <TopTracks topTracks={data.topTracks} />;
};

export default Home;
