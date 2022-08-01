
import React, { useState } from "react";

import { GlobalContext } from "../Global/GlobalContext";

export default function GlobalState(props) {
  const [posts, setPosts] = useState([]);


    const values = {
    posts,
    setPosts,
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}