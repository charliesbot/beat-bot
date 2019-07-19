import React from "react";
import Router from "next/router";
import { useQuery } from "react-apollo-hooks";
import Loader from "./Loader";
import GET_TOP_TRACKS_QUERY from "./TopTracks/TopTracks.query";
import TopTracks from "./TopTracks";
import { Query } from "../interfaces/types";

const Home = () => {
  const { data, loading, error } = useQuery<Pick<Query, "topTracks">>(
    GET_TOP_TRACKS_QUERY,
  );

  if (loading || !data) {
    return <Loader size={50} color="white" />;
  }

  if (error) {
    Router.push("/login");
    return null;
  }

  return <TopTracks topTracks={data.topTracks} />;
};

export default Home;
