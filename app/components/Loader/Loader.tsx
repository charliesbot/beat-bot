import React from "react";
import { Spinner, Container } from "./Loader.styled";

interface Props {
  size: number;
  color?: string;
}

const Loader: React.FC<Props> = props => {
  const { color, size } = props;
  return (
    <Container>
      <Spinner size={size} color={color} />
    </Container>
  );
};

export default Loader;
