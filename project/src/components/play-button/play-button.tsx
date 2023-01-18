type PlayButtonProps = {
  isPlay: boolean;
}

function PlayButton(props: PlayButtonProps) {
  const { isPlay } = props;

  return (
    <>
      <svg viewBox="0 0 19 19" width="19" height="19">
        { isPlay ? <use xlinkHref="#play-s"/> : <use xlinkHref="#pause"/>}
      </svg>
      { isPlay ? <span>Play</span> : <span>Pause</span> }
    </>
  );
}

export default PlayButton;
