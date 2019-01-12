// THIS WOULD NEED TO BE MANUALLY ADDED TO www/js is needed. This repo was used to test src/index.ts
// against index.d.ts file.
// This state represents the state of our application and will be saved and
// restored by onResume() and onPause()
var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        // Here we register our callbacks for the lifecycle events we care about
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
    },
    onDeviceReady: function () {

        document.getElementById("getAudioModeBut").addEventListener("click", function () {

            AudioManagement.getAudioMode(function (result) {
                document.getElementById('getAudioModeLab').innerHTML = '';
                document.getElementById('getAudioModeLab').innerHTML += result.label + ' ' + result.audioMode;

                console.log('Mode' + result.audioMode);     // will show '2'
                console.log('Label' + result.label);        // will show 'Normal'
            }, function (fail) {
                document.getElementById('getAudioModeLab').innerHTML = '';
                document.getElementById('getAudioModeLab').innerHTML += fail;
            });
        });
    },
    onPause: function () {

    },
    onResume: function (event) {

    }
}

app.initialize();