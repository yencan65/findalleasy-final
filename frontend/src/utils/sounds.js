export const playSnapSound = () => {
  const audio = new Audio('/assets/snap.wav');
  audio.volume = 0.45;
  audio.play().catch(()=>{});
};
