import { useState, useLayoutEffect } from "react";

const sizes = {
  mobile: 500,
  tablet: 1024,
};

const query = `(max-width: ${sizes.mobile}px)`;

export const useMobileDetector = () => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  useLayoutEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return media.removeListener(listener);
  });

  return matches;
};
