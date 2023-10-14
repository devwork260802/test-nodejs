/* Music Information */
const music_data = [
  {
    background_image: "img/music-player/poster/1.jpg",
    poster_url: "img/music-player/poster/1.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "../music/music-player/1.mp3",
  },
  {
    background_image: "img/music-player/poster/2.jpg",
    poster_url: "img/music-player/poster/2.jpg",
    title: "We Are Going To Be Ok (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Jhove",
    musicPath: "../music/music-player/2.mp3",
  },
  {
    background_image: "img/music-player/poster/3.jpg",
    poster_url: "img/music-player/poster/3.jpg",
    title: "Winter Meadow",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x  juniorodeo",
    musicPath: "../music/music-player/3.mp3",
  },
  {
    background_image: "img/music-player/poster/4.jpg",
    poster_url: "img/music-player/poster/4.jpg",
    title: "From Where We Started",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "../music/music-player/4.mp3",
  },
  {
    background_image: "img/music-player/poster/5.jpg",
    poster_url: "img/music-player/poster/5.jpg",
    title: "Where I Found You",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "../music/music-player/5.mp3",
  },
];

// Event Adder
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

// Playlist

// Music Adder
const playlist = document.querySelector("[data-music-list]");
for (let i = 0, len = music_data.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${music_data[i].poster_url}" width="800" height="800" alt="${music_data[i].title} Album Poster"
        class="img-cover">
      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

// Music Adder in Navbar
const playlist_side_modal = document.querySelector("[data-playlist]");
const playlist_togglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggle_playlist = function () {
  playlist_side_modal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}
addEventOnElements(playlist_togglers, "click", toggle_playlist);

// Active Adder in Music Playlist 
const playlist_items = document.querySelectorAll("[data-playlist-item]");
let current_music = 0;
let last_played_music = 0;
const change_play_list_item = function () {
  playlist_items[last_played_music].classList.remove("playing");
  playlist_items[current_music].classList.add("playing");
}
addEventOnElements(playlist_items, "click", function () {
  last_played_music = current_music;
  current_music = Number(this.dataset.playlistItem);
  change_play_list_item();
});

// Player
const player_banner = document.querySelector("[data-player-banner]");
const player_title = document.querySelector("[data-title]");
const player_album = document.querySelector("[data-album]");
const player_year = document.querySelector("[data-year]");
const player_artist = document.querySelector("[data-artist]");
const audio_source = new Audio(music_data[current_music].musicPath);
const change_player_info = function () {
  player_banner.src = music_data[current_music].poster_url;
  player_banner.setAttribute("alt", `${music_data[current_music].title} Album Poster`);
  document.body.style.background_image = `url(${music_data[current_music].background_image})`;
  player_title.textContent = music_data[current_music].title;
  player_album.textContent = music_data[current_music].album;
  player_year.textContent = music_data[current_music].year;
  player_artist.textContent = music_data[current_music].artist;
  audio_source.src = music_data[current_music].musicPath;
  audio_source.addEventListener("loadeddata", update_duration);
  play_music();
}
addEventOnElements(playlist_items, "click", change_player_info);

// Update Player Duration 
const player_duration = document.querySelector("[data-duration]");
const player_seek_range = document.querySelector("[data-seek]");

// Get Time Format
const get_time_code = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const time_code = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return time_code;
}
const update_duration = function () {
  player_seek_range.max = Math.ceil(audio_source.duration);
  player_duration.textContent = get_time_code(Number(player_seek_range.max));
}
audio_source.addEventListener("loadeddata", update_duration);

// Music Player
const play_btn = document.querySelector("[data-play-btn]");
let play_interval;
const play_music = function () {
  if (audio_source.paused) {
    audio_source.play();
    play_btn.classList.add("active");
    play_interval = setInterval(update_running_time, 500);
  } else {
    audio_source.pause();
    play_btn.classList.remove("active");
    clearInterval(play_interval);
  }
}
play_btn.addEventListener("click", play_music);

// Update Music Running Time
const player_running_time = document.querySelector("[data-running-time");
const update_running_time = function () {
  player_seek_range.value = audio_source.currentTime;
  player_running_time.textContent = get_time_code(audio_source.currentTime);
  update_range_fill();
  is_music_end();
}

// Range Fill Width
const ranges = document.querySelectorAll("[data-range]");
const range_fill = document.querySelector("[data-range-fill]");
const update_range_fill = function () {
  let element = this || ranges[0];
  const range_value = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${range_value}%`;
}
addEventOnElements(ranges, "input", update_range_fill);

// Music Seeker
const seek = function () {
  audio_source.currentTime = player_seek_range.value;
  player_running_time.textContent = get_time_code(player_seek_range.value);
}
player_seek_range.addEventListener("input", seek);

// End Music
const is_music_end = function () {
  if (audio_source.ended) {
    play_btn.classList.remove("active");
    audio_source.currentTime = 0;
    player_seek_range.value = audio_source.currentTime;
    player_running_time.textContent = get_time_code(audio_source.currentTime);
    update_range_fill();
  }
}

// Next Music
const player_skip_next_btn = document.querySelector("[data-skip-next]");
const skip_next = function () {
  last_played_music = current_music;
  if (is_shuffled) {
    shuffle_music();
  } else {
    current_music >= music_data.length - 1 ? current_music = 0 : current_music++;
  }
  change_player_info();
  change_play_list_item();
}
player_skip_next_btn.addEventListener("click", skip_next);

// Previous Music
const player_skip_prev_btn = document.querySelector("[data-skip-prev]");
const skip_prev = function () {
  last_played_music = current_music;
  if (is_shuffled) {
    shuffle_music();
  } else {
    current_music <= 0 ? current_music = music_data.length - 1 : current_music--;
  }
  change_player_info();
  change_play_list_item();
}
player_skip_prev_btn.addEventListener("click", skip_prev);

// Music Shuffler
const get_random_music = () => Math.floor(Math.random() * music_data.length);
const shuffle_music = () => current_music = get_random_music();
const player_shuffle_btn = document.querySelector("[data-shuffle]");
let is_shuffled = false;
const shuffle = function () {
  player_shuffle_btn.classList.toggle("active");
  is_shuffled = is_shuffled ? false : true;
}
player_shuffle_btn.addEventListener("click", shuffle);

// Repeat Music
const player_repeat_btn = document.querySelector("[data-repeat]");
const repeat = function () {
  if (!audio_source.loop) {
    audio_source.loop = true;
    this.classList.add("active");
  } else {
    audio_source.loop = false;
    this.classList.remove("active");
  }
}
player_repeat_btn.addEventListener("click", repeat);

// Music Volume
const player_volume_range = document.querySelector("[data-volume]");
const player_volume_btn = document.querySelector("[data-volume-btn]");
const change_volume = function () {
  audio_source.volume = player_volume_range.value;
  audio_source.muted = false;
  if (audio_source.volume <= 0.1) {
    player_volume_btn.children[0].textContent = "volume_mute";
  } else if (audio_source.volume <= 0.5) {
    player_volume_btn.children[0].textContent = "volume_down";
  } else {
    player_volume_btn.children[0].textContent = "volume_up";
  }
}
player_volume_range.addEventListener("input", change_volume);

// Mute Music
const mute_volume = function () {
  if (!audio_source.muted) {
    audio_source.muted = true;
    player_volume_btn.children[0].textContent = "volume_off";
  } else {
    change_volume();
  }
}
player_volume_btn.addEventListener("click", mute_volume);