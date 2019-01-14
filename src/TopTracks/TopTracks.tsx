import React, { useLayoutEffect, useRef, useState } from "react";
import CuratedPlaylistModal from "../CuratedPlaylistModal";
import debounce from "lodash/fp/throttle";
import BScroll, { Position } from "better-scroll";
import { Wrapper, Content, Container } from "./TopTracks.styled";
import SeedersMenu from "../SeedersMenu";
import Song from "../Song";

const getCenter = (node: HTMLElement) => {
  const x = node.offsetLeft + node.offsetWidth / 2;
  const y = node.offsetTop + node.offsetHeight / 2;
  return { x, y };
};

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
          {topTracks.map((song: any, id: number) => (
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
