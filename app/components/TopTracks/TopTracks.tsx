import React, { useRef, useEffect, useState } from "react";
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
  const [selectedSongs, setSelectedSongs] = useState<Set<string>>(new Set());
  const isMobile = useMobileDetector();
  const currentSize = isMobile ? SIZES.SMALL : SIZES.BIG;

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
        currentSize / 2,
        currentSize / 2,
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

  const onAddSong = (songId: string) => {
    selectedSongs.add(songId);
    setSelectedSongs(new Set(selectedSongs));
  };

  const onRemoveSong = (songId: string) => {
    selectedSongs.delete(songId);
    setSelectedSongs(new Set(selectedSongs));
  };

  return (
    <>
      <FavoriteSongsMenu seedSongs={selectedSongs} songs={topTracks} />
      <Wrapper ref={wrapper} className="wrapper">
        <Content className="content" style={containerStyle}>
          {topTracks.map(song => (
            <Song
              isSelected={selectedSongs.has(song.id)}
              key={song.id}
              size={currentSize}
              song={song}
              onAddSong={onAddSong}
              onRemoveSong={onRemoveSong}
            />
          ))}
        </Content>
      </Wrapper>
    </>
  );
};

export default TopTracks;
