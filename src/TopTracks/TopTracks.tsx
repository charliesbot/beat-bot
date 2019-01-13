import React, { useLayoutEffect, useRef, useState } from "react";
import debounce from "lodash/fp/throttle";
import BScroll, { Position } from "better-scroll";
import { Wrapper, Content, Overlay } from "./TopTracks.styled";
import Song from "../Song";

const getCenter = (node: HTMLElement) => {
  const x = node.offsetLeft + node.offsetWidth / 2;
  const y = node.offsetTop + node.offsetHeight / 2;
  return { x, y };
};

const TopTracks = (props: any) => {
  const wrapper: any = useRef(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({});
  const { topTracks } = props;

  const onScroll = debounce(50, (position: Position) => {
    setScrollPosition(position);
  });

  useLayoutEffect(() => {
    props.requestTopTracks();
    const bscroll = new BScroll(wrapper.current, {
      freeScroll: true,
      mouseWheel: true,
      scrollbar: false,
      scrollX: true,
      scrollY: true,
      probeType: 3
    });

    bscroll.on("scroll", onScroll);

    const { x, y } = getCenter(document.body);
    setOrigin({ x, y });
  }, []);

  return (
    <Wrapper ref={wrapper} className="wrapper">
      <Content className="content">
        {topTracks.map((song: any, id: number) => (
          <Song
            song={song}
            key={id}
            origin={origin}
            scrollPosition={scrollPosition}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

export default TopTracks;
