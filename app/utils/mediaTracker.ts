let media: HTMLAudioElement | null = null;

const getMedia = () => {
  if (media) {
    return media;
  }

  if (process.browser && !media) {
    media = new Audio();
    media.volume = 0.4;
    return media;
  }

  return null;
};

const mediaTracker = {
  playSong: (url: string) => {
    const media = getMedia();
    if (!media) {
      return;
    }

    if (media.src === url && !media.paused) {
      media.pause();
      return;
    }

    media.src = url;
    media.play();
  },
};

export default mediaTracker;
