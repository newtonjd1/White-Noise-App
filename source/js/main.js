var audioplayer = new Player();

audioplayer.init([{
  name: 'noise',
  file: 'noise/00.mp3'
}, {
  name: 'crickets',
  file: 'noise/Crickets2.mp3'
}, {
  name: 'vinyl',
  file: 'noise/Vinyl.mp3'
}, {
  name: 'off',
  file: 'noise/Empty.mp3'
}, {
  name: 'ambiance',
  file: 'ambiance/SomethingICanAlmostRemember.mp3'
}]);

$(document).ready(function() {
	var $playPauseBtn = $('.wn-playpause'),
      $masterVolume = $('.wn-mastervolume'),
      $noiseVolume = $('.wn-noisevolume'),
      $noiseType = $('.wn-type'),
      $ambianceVolume = $('.wn-ambiancevolume'),
      $prevSoundBtn = $('.wn-typebutton.left'),
      $nextSoundBtn = $('.wn-typebutton.right'),
      $ambianceOnCheck = $('#wn-amb-onoff');

  $noiseType.html(audioplayer.getCurrentSound());

  $playPauseBtn.click(function () {
    $(this).children('.fa').toggleClass('fa-play').toggleClass('fa-pause');

    audioplayer.playPause();
  });

  $masterVolume.on('input', function () {
    audioplayer.setMasterVolume($(this).val()/100);
  });

  $prevSoundBtn.click(function () {
    audioplayer.prevSound();
  });

  $nextSoundBtn.click(function () {
    audioplayer.nextSound();
  });

  $noiseVolume.on('input', function () {
    audioplayer.setSoundVolume($(this).val()/100);
  });

  $ambianceVolume.on('input', function () {
    audioplayer.setAmbianceVolume($(this).val()/100);
  });

  $ambianceOnCheck.change(function () {
    audioplayer.toggleAmbiance();
  });
});