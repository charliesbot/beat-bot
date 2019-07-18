import React from "react";
import { Spinner, Container } from "./Loader.styled";

interface Props {
  size: number;
}

const Loader: React.FC<Props> = ({ size }) => {
  return (
    <Container>
      <Spinner size={size} />
    </Container>
  );
};

export default Loader;
