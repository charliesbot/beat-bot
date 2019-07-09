import React from "react";
import Link from "next/link";
import { User } from "../interfaces";

interface Props {
  data: User;
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href={`/detail?id=${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
