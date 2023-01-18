import { FC, useEffect, useRef } from 'react';
import { Film } from '../../types/film/film.type';

type VideoPlayerProps = {
  film: Film;
  isPlaying: boolean;
  needSound: boolean;
  width: number;
  height: number;
}

const VideoPlayer: FC<VideoPlayerProps> = (props) => {
  const { film, isPlaying, needSound, width, height } = props;
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playerRef === null) {
      return;
    }

    if (isPlaying) {
      playerRef.current?.play();
    } else {
      playerRef.current?.load();
    }

  }, [isPlaying]);

  return (
    <video
      ref={playerRef}
      src={film.previewVideoLink}
      poster={film.posterImage}
      muted={!needSound}
      width={width}
      height={height}
    />
  );
};

export default VideoPlayer;
