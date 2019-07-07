import React, { useRef, useEffect, useState } from "react";
import BScroll, { Position } from "better-scroll";
import throttle from "lodash/fp/throttle";
import { useOrigin } from "../../hooks/useOrigin";
import { useMobileDetector } from "../../hooks/useMobileDetector";
import Song, { SIZES } from "../Song";
import FavoriteSongsMenu from "../FavoriteSongsMenu";
import { Wrapper, Content } from "./TopTracks.styled";

let bscroll: BScroll;

const TopTracks: React.FC<any> = ({ topTracks }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const origin = useOrigin();
  const isMobile = useMobileDetector();
  const [scrollPosition, setScrollPosition] = useState({});

  const onScroll = throttle(100, (position: Position) => {
    setScrollPosition(position);
  });

  useEffect(() => {
    if (wrapper.current) {
      bscroll = new BScroll(wrapper.current, {
        freeScroll: true,
        mouseWheel: true,
        scrollbar: false,
        scrollX: true,
        scrollY: true,
        tap: true,
        probeType: 3,
      });

      bscroll.on("scroll", onScroll);
    }
  }, [wrapper.current]);

  const currentSize = isMobile ? SIZES.SMALL : SIZES.BIG;

  const containerStyle = {
    width: currentSize * 6,
    height: Math.ceil(topTracks.length / 6) * currentSize,
  };

  return (
    <div>
      <FavoriteSongsMenu seedSongs={new Set()} songs={topTracks} />
      <Wrapper ref={wrapper} className="wrapper">
        <Content className="content" style={containerStyle}>
          {topTracks.map((song: any, index: number) => {
            return (
              <Song
                index={index}
                size={currentSize}
                song={song}
                key={song.id}
                origin={origin}
                scrollPosition={scrollPosition}
              />
            );
          })}
        </Content>
      </Wrapper>
    </div>
  );
};

export default TopTracks;
