import React, { useRef, useEffect } from "react";
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import { useOrigin } from "../../hooks/useOrigin";
import { useMobileDetector } from "../../hooks/useMobileDetector";
import Song, { SIZES } from "../Song";
import FavoriteSongsMenu from "../FavoriteSongsMenu";
import { Wrapper, Content } from "./TopTracks.styled";
import { distanceBetweenPoints, getPosition } from "../../utils/layout";
import { Song as SongType } from "../../interfaces/types";

let bscroll: BScroll;
BScroll.use(MouseWheel);

type Props = {
  topTracks: SongType[];
};

const TopTracks: React.FC<Props> = ({ topTracks }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const origin = useOrigin();
  const isMobile = useMobileDetector();
  const currentSize = isMobile ? SIZES.SMALL : SIZES.BIG;
  const positions = topTracks.map((_, index) =>
    getPosition(index, currentSize),
  );

  useEffect(() => {
    if (wrapper.current) {
      bscroll = new BScroll(wrapper.current, {
        freeScroll: true,
        mouseWheel: {},
        scrollbar: false,
        scrollX: true,
        scrollY: true,
        probeType: 3,
      });

      bscroll.on("scroll", () => {
        const songs = Array.from(
          wrapper.current!.querySelectorAll(".song"),
        ) as HTMLDivElement[];
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
          const { positionX, positionY } = positions[index];
          s.style.transform = `translate3d(${positionX}px, ${positionY}px, ${zIndex}px) scale3d(${delta}, ${delta}, ${delta})`;
        });
      });

      return () => bscroll.destroy();
    }
  }, [wrapper.current]);

  const containerStyle = {
    width: currentSize * 6,
    height: Math.ceil(topTracks.length / 6) * currentSize,
  };

  return (
    <>
      <FavoriteSongsMenu seedSongs={new Set()} songs={topTracks} />
      <Wrapper ref={wrapper} className="wrapper">
        <Content className="content" style={containerStyle}>
          {topTracks.map((song, index) => {
            return (
              <Song
                size={currentSize}
                song={song}
                key={song.id}
                positionX={positions[index].positionX}
                positionY={positions[index].positionY}
              />
            );
          })}
        </Content>
      </Wrapper>
    </>
  );
};

export default TopTracks;
