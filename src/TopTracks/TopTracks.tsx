import React, { useLayoutEffect, useRef, useState } from "react";
import CuratedPlaylistModal from "../CuratedPlaylistModal";
import throttle from "lodash/fp/throttle";
import debounce from "lodash/fp/debounce";
import { getCenter } from "../utils/layout";
import BScroll, { Position } from "better-scroll";
import { Wrapper, Content, Container } from "./TopTracks.styled";
import SeedersMenu from "../SeedersMenu";
import Song from "../Song";
import { Song as SongType } from "../@types/Song.type";

let bscroll: BScroll;

const TopTracks = (props: any) => {
  const wrapper: any = useRef(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [selectedSongs, setSelectedSongs] = useState(new Set());
  const [scrollPosition, setScrollPosition] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const { topTracks, songs } = props;

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const toggleSong = (songId: string) => {
    if (selectedSongs.has(songId)) {
      selectedSongs.delete(songId);
    } else if (selectedSongs.size < 5) {
      selectedSongs.add(songId);
    }

    setSelectedSongs(selectedSongs);
  };

  const onScroll = throttle(50, (position: Position) => {
    setScrollPosition(position);
  });

  useLayoutEffect(() => {
    setOrigin(getCenter(document.body));
    const onResizeCallback = debounce(300, () => {
      setOrigin(getCenter(document.body));
    });
    window.addEventListener("resize", onResizeCallback);
    return window.removeEventListener("resize", onResizeCallback, true);
  }, []);

  useLayoutEffect(() => {
    props.requestTopTracks();
    bscroll = new BScroll(wrapper.current, {
      freeScroll: true,
      mouseWheel: true,
      scrollbar: false,
      scrollX: true,
      scrollY: true,
      probeType: 3
    });

    bscroll.on("scroll", onScroll);
  }, []);

  return (
    <Container>
      {isModalOpen && (
        <CuratedPlaylistModal
          onCloseModal={closeModal}
          seedSongs={selectedSongs}
        />
      )}
      <SeedersMenu
        seedSongs={selectedSongs}
        songs={songs}
        onOpenModal={openModal}
        onRemoveSong={toggleSong}
      />
      <Wrapper ref={wrapper} className="wrapper">
        <Content className="content">
          {topTracks.map((song: SongType, id: number) => (
            <Song
              song={song}
              key={id}
              origin={origin}
              scrollPosition={scrollPosition}
              onToggleSong={toggleSong}
            />
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default TopTracks;
