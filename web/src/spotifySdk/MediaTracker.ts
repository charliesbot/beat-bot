const media = new Audio();
media.volume = 0.4;

const MediaTracker = {
  playSong: (url: string) => {
    if (!url) {
      return;
    }
    media.pause();
    media.src = url;
    media.play();
  }
};

export default MediaTracker;
