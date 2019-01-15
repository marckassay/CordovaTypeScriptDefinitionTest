var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        // Here we register our callbacdks for the lifecycle events we care about
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
    },
    onDeviceReady: function () {
        document.getElementById("setAudioModeBut").addEventListener("click", function () {
            document.getElementById('setAudioModeLab').innerHTML = '';
            AudioManagement.setAudioMode(AudioManagement.AudioMode.NORMAL, function () {
                document.getElementById('setAudioModeLab').innerHTML += 'Device audio mode is now NORMAL.';
            }, function (error) {
                document.getElementById('setAudioModeLab').innerHTML += error;
            });
        });
        document.getElementById("getAudioModeBut").addEventListener("click", function () {
            document.getElementById('getAudioModeLab').innerHTML = '';
            AudioManagement.getAudioMode(function (results) {
                document.getElementById('getAudioModeLab').innerHTML += 'Device audio mode is ' + results.label + ' (' + results.audioMode + ')';
            }, function (fail) {
                document.getElementById('getAudioModeLab').innerHTML += fail;
            });
        });
        AudioManagement.VolumeType.MUSIC;
        document.getElementById("setVolBut").addEventListener("click", function () {
            document.getElementById('setVolLab').innerHTML = '';
            AudioManagement.setVolume(AudioManagement.VolumeType.MUSIC, 5, function () {
                document.getElementById('setVolLab').innerHTML += 'Device volume for MUSIC is now set to 5.';
            }, function (error) {
                document.getElementById('setVolLab').innerHTML += error;
            });
        });
        document.getElementById("getVolBut").addEventListener("click", function () {
            document.getElementById('getVolLab').innerHTML = '';
            AudioManagement.getVolume(AudioManagement.VolumeType.MUSIC, function (results) {
                console.log('vol', results);
                document.getElementById('getVolLab').innerHTML += 'Device volume for MUSIC is ' + results.volume;
            }, function (error) {
                document.getElementById('getVolLab').innerHTML += error;
            });
        });
        document.getElementById("getMaxVolBut").addEventListener("click", function () {
            document.getElementById('getMaxVolLab').innerHTML = '';
            AudioManagement.getMaxVolume(AudioManagement.VolumeType.MUSIC, function (results) {
                console.log('max', results);
                document.getElementById('getMaxVolLab').innerHTML += 'Device max volume for MUSIC is  ' + results.maxVolume;
            }, function (error) {
                document.getElementById('getMaxVolLab').innerHTML += error;
            });
        });
    },
    onPause: function () {
    },
    onResume: function (event) {
    }
};
app.initialize();
//# sourceMappingURL=index.js.map