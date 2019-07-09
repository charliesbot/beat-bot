import { useLayoutEffect, useState } from "react";
import debounce from "lodash/fp/debounce";
import { getCenter } from "../utils/layout";

export const useOrigin = () => {
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  useLayoutEffect(() => {
    setOrigin(getCenter(document.body));
    const onResizeCallback = debounce(300, () => {
      setOrigin(getCenter(document.body));
    });
    window.addEventListener("resize", onResizeCallback);
    return window.removeEventListener("resize", onResizeCallback, true);
  }, []);
  return origin;
};
