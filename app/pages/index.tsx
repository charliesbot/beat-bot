import React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Home from "../components/Home";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;
