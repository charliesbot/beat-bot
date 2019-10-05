import React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Home from "../components/Home";

const IndexPage: NextPage = () => {
  console.log("wait what ");
  return (
    <Layout title="Beat Bot">
      <Home />
    </Layout>
  );
};

export default IndexPage;
