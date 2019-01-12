/**
* @name AudioManagement
* @description
* A Cordova plugin to manage audio mode and volume type
*
* @usage
* ```typescript
*
* AudioManagement.setAudioMode(AudioManagement.AudioMode.NORMAL, () => {
*   console.log('Device audio mode is now NORMAL.');
* }, (error: any) => {
*   console.log(error);
* });
*
* AudioManagement.getAudioMode((results: AudioManagement.AudioModeReturn) => {
*   console.log('Device audio mode is ' + results.label + ' (' + results.audioMode + ')');
* }, (error: any) => {
*   console.log(error);
* });
* ```
*/
declare namespace AudioManagement {
    export enum AudioMode {
        SILENT = 0,
        VIBRATE,
        NORMAL
    }

    export enum VolumeType {
        RING = 0,
        MUSIC,
        NOTIFICATION,
        SYSTEM
    }

    export interface AudioModeReturn {
        audioMode: AudioManagement.AudioMode;
        label: string;
    }

    /**
    * Sets the `AudioManagement.AudioMode` for the device.
    *
    * @param {AudioManagement.AudioMode} mode the device can be set to: Silent, Normal, Vibrate
    * @param {Function} onSuccess a callback when setting succeeds.
    * @param {Function} onError a callback when setting fails.
    * @returns void
    */
    export function setAudioMode(mode: AudioManagement.AudioMode, onSuccess: () => void, onError: (error: any) => void): void

    /**
     * Gets the current `AudioManagement.AudioMode` of the device.
     *
     * @param {Function} onSuccess a callback when succeeds with `label` and `audioMode` values of parameter.
     * @param {Function} onError a callback when getting fails.
     * @returns void
     */
    export function getAudioMode(onSuccess: (results: AudioManagement.AudioModeReturn) => void, onError: (error: any) => void): void

    /**
     * Sets the specified `AudioManagement.VolumeType` for the device with the value from `volume`.
     *
     * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to set
     * @param {number} volume the volume value
     * @param {Function} onSuccess a callback when setting succeeds.
     * @param {Function} onError a callback when setting fails.
     * @returns void
     */
    export function setVolume(type: AudioManagement.VolumeType, volume: number, onSuccess: () => void, onError: (error: any) => void): void

    /**
     * Gets the specified `AudioManagement.VolumeType`'s `volume`.
     *
     * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to get
     * @param {Function} onSuccess a callback when getting succeeds with an object with numeric `volume` property.
     * @param {Function} onError a callback when getting fails.
     * @returns void
     */
    export function getVolume(type: AudioManagement.VolumeType, onSuccess: (results: { volume: number }) => void, onError: (error: any) => void): void

    /**
     * Gets the specified `AudioManagement.VolumeType`'s maximum `volume` that the device is currently set to.
     *
     * @param {AudioManagement.VolumeType} type the `AudioManagement.VolumeType` to get
     * @param {Function} onSuccess a callback when getting succeeds with an object with numeric `maxVolume` property.
     * @param {Function} onError a callback when getting fails.
     * @returns void
     */
    export function getMaxVolume(type: AudioManagement.VolumeType, onSuccess: (results: { maxVolume: number }) => void, onError: (error: any) => void): void
}