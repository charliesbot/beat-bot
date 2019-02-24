import React, { useLayoutEffect, useRef, useState } from "react";
import BScroll, { Position } from "better-scroll";
import throttle from "lodash/fp/throttle";
import { SIZES } from "../../constants/size";
import { useMobileDetector, useOrigin } from "../../hooks";
import { Wrapper, Content, Container } from "./TopTracks.styled";
import SeedersMenu from "../SeedersMenu";
import Song from "../Song";
import { Song as SongType } from "../../@types/Song.type";

let bscroll: BScroll;

const TopTracks = (props: any) => {
  const wrapper: any = useRef(null);
  const isMobile = useMobileDetector();
  const origin = useOrigin();
  const [selectedSongs, setSelectedSongs] = useState(new Set());
  const [scrollPosition, setScrollPosition] = useState({});
  const { topTracks, openModal } = props;

  const onScroll = throttle(100, (position: Position) => {
    setScrollPosition(position);
  });

  const onOpenModal = () => {
    openModal("createPlaylistWizard", {
      message: { seedSongs: selectedSongs }
    });
  };

  useLayoutEffect(() => {
    bscroll = new BScroll(wrapper.current, {
      freeScroll: true,
      mouseWheel: true,
      scrollbar: false,
      scrollX: true,
      scrollY: true,
      tap: true,
      probeType: 3
    });

    bscroll.on("scroll", onScroll);
  }, []);

  const toggleSong = (songId: string) => {
    selectedSongs.has(songId);
    if (selectedSongs.has(songId)) {
      selectedSongs.delete(songId);
    } else if (selectedSongs.size < 5) {
      selectedSongs.add(songId);
    }

    setSelectedSongs(new Set(selectedSongs));
  };

  const currentSize = isMobile ? SIZES.SMALL : SIZES.BIG;

  const containerStyle = {
    width: currentSize * 6,
    height: Math.ceil(topTracks.length / 6) * currentSize
  };

  return (
    <Container>
      <SeedersMenu
        seedSongs={selectedSongs}
        songs={topTracks}
        onOpenModal={onOpenModal}
        onRemoveSong={toggleSong}
      />
      <Wrapper ref={wrapper} className="wrapper">
        <Content className="content" style={containerStyle}>
          {topTracks.map((song: SongType, index: number) => {
            return (
              <Song
                index={index}
                added={selectedSongs.has(song.id)}
                size={currentSize}
                song={song}
                key={song.id}
                origin={origin}
                scrollPosition={scrollPosition}
                onToggleSong={toggleSong}
              />
            );
          })}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default TopTracks;
