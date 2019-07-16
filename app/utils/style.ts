const breakPoints = {
  mobile: 500,
  tablet: 1024,
};

type BreakPoints = keyof typeof breakPoints;

export const mediaQuery = (n: BreakPoints) => {
  const bpArray = Object.entries(breakPoints);

  const [result] = bpArray.reduce<string[]>((acum, [key, size]) => {
    if (n === key) {
      return [...acum, `@media (max-width: ${size}px)`];
    }

    return acum;
  }, []);

  return result;
};
