import VimeoPlayer from "@vimeo/player";
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);
const PAUSE_TIME = "videoplayer-current-time";
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(e) {
    const timeValue = e.seconds;
    localStorage.setItem(PAUSE_TIME, timeValue);
    console.log(timeValue);
}
player.setCurrentTime(localStorage.getItem(PAUSE_TIME)).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':

            break;

        default:

            break;
    }
});