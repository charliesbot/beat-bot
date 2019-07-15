import React, { useRef, useEffect } from "react";
import BScroll from "@better-scroll/core";
import { useOrigin } from "../../hooks/useOrigin";
import { useMobileDetector } from "../../hooks/useMobileDetector";
import Song, { SIZES } from "../Song";
import FavoriteSongsMenu from "../FavoriteSongsMenu";
import { Wrapper, Content } from "./TopTracks.styled";
import { distanceBetweenPoints } from "../../utils/layout";
import { Song as SongType } from "../../interfaces/types";

let bscroll: BScroll;

type Props = {
  topTracks: SongType[];
};

const TopTracks: React.FC<Props> = ({ topTracks }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const origin = useOrigin();
  const isMobile = useMobileDetector();
  const currentSize = isMobile ? SIZES.SMALL : SIZES.BIG;
  const click = () => {
    const elements = Array.from(document.querySelectorAll(".song"));
    const element = elements[20] as HTMLElement;
    bscroll.scroller.scrolltoelement(element, 10, 10, 10);
  };

  useEffect(() => {
    if (wrapper.current) {
      const songs = Array.from(
        wrapper.current!.querySelectorAll(".song"),
      ) as HTMLDivElement[];

      bscroll = new BScroll(wrapper.current, {
        freeScroll: true,
        scrollbar: false,
        scrollX: true,
        scrollY: true,
        probeType: 3,
      });

      bscroll.scroller.scrollToElement(
        songs[Math.floor(songs.length / 2)],
        1000,
        0,
        0,
      );

      bscroll.on("scroll", () => {
        const distances = songs.map(s => {
          const rect = s.getBoundingClientRect();
          const coords = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };

          const calculatedDistance = distanceBetweenPoints(origin, coords);

          const delta = 2 - calculatedDistance / (currentSize * 1.65);

          const limitedDelta = Math.max(delta, 1);

          const zIndex = Math.ceil(limitedDelta * 100);

          return { delta: limitedDelta, zIndex };
        });

        songs.forEach((s, index) => {
          const { delta, zIndex } = distances[index];
          s.style.transform = `scale3d(${delta}, ${delta}, ${delta})`;
          s.style.zIndex = zIndex.toString();
        });
      });

      return () => bscroll.destroy();
    }
  }, [wrapper.current]);

  const containerStyle = {
    width: currentSize * 7,
    height: Math.ceil(topTracks.length / 7) * currentSize,
  };

  return (
    <>
      <FavoriteSongsMenu seedSongs={new Set()} songs={topTracks} />
      <button onClick={click}>center</button>
      <Wrapper ref={wrapper} className="wrapper">
        <Content className="content" style={containerStyle}>
          {topTracks.map(song => {
            return <Song size={currentSize} song={song} key={song.id} />;
          })}
        </Content>
      </Wrapper>
    </>
  );
};

export default TopTracks;
