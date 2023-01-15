import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeFromLS = localStorage.getItem('videoplayer-current-time');
if (currentTimeFromLS) {
  player.setCurrentTime(currentTimeFromLS);
}

const setLocalStorageTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data['seconds']);
};

player.on('timeupdate', throttle(setLocalStorageTime, 1000));
