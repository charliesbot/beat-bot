import React, { useRef, useLayoutEffect, useState } from "react";
import BScroll, { Position } from "better-scroll";
import throttle from "lodash/fp/throttle";
import { NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { useOrigin } from "../hooks/useOrigin";
import Song from "../components/Song";

const Wrapper = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -6.25rem;
  margin-top: -6.25rem;
`;

const Content = styled.div`
  position: relative;
  color: white;
  transform-style: preserve-3d;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Container = styled.div``;

let bscroll: BScroll;

const IndexPage: NextPage = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const origin = useOrigin();
  const [selectedSongs, setSelectedSongs] = useState(new Set());
  const [scrollPosition, setScrollPosition] = useState({});
  const topTracks = [{}];

  const onScroll = throttle(100, (position: Position) => {
    setScrollPosition(position);
  });

  useLayoutEffect(() => {
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

  const toggleSong = (songId: string) => {
    selectedSongs.has(songId);
    if (selectedSongs.has(songId)) {
      selectedSongs.delete(songId);
    } else if (selectedSongs.size < 5) {
      selectedSongs.add(songId);
    }

    setSelectedSongs(new Set(selectedSongs));
  };

  const currentSize = 200;

  const containerStyle = {
    width: currentSize * 6,
    height: Math.ceil(topTracks.length / 6) * currentSize,
  };

  return (
    <Layout>
      <Container>
        <Wrapper ref={wrapper} className="wrapper">
          <Content className="content" style={containerStyle}>
            {topTracks.map((song: any, index: number) => {
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
    </Layout>
  );
};

export default IndexPage;
