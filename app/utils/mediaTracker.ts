function MediaTracker() {
  const media = new Audio();
  return {
    playSong: (url: string) => {
      media.volume = 0.4;
      media.pause();
      media.src = url;
      media.play();
    },
  };
}

export default MediaTracker;
