// Utility to play a sound effect on button press
export function playBloop() {
  const audio = new window.Audio('/assets/bloop.mp3');
  audio.currentTime = 0;
  audio.play();
}
