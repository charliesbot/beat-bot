import React, { useRef, useEffect, useState } from "react";
import BScroll, { Position } from "better-scroll";
import throttle from "lodash/fp/throttle";
import styled from "@emotion/styled";
import { useOrigin } from "../hooks/useOrigin";
import Layout from "./Layout";
import Song from "./Song";
import { distanceBetweenPoints, getPosition } from "../utils/layout";

const Wrapper = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1.5625rem;
  margin-top: -1.5625rem;
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

const TopTracks: React.FC<any> = ({ topTracks }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const origin = useOrigin();
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
      </Container>
    </Layout>
  );
};

export default TopTracks;
