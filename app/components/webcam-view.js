import Component from '@ember/component';
import Webcam from 'webcamjs';

export default Component.extend({
  classNames: ['ember-webcam'],
  cameraId: "webcam",
  init() {
    this._super(...arguments),
    this.set('camera', {
      snap: this.snap.bind(this)
    });
  },
  didInsertElement() {
    this._super(...arguments);
    Webcam.set({
      width: 640,
      height: 480,
      dest_width: 640,
      dest_height: 480,
      enable_flash: false
    });
    Webcam.on('error', error => {
      if(!this.isDestroying && !this.isDestroyed) {
	this.get('didError')(error);
      }
    });
    Webcam.attach('#' + this.get('cameraId'));
  },
  willDestroyElement() {
    this._super(...arguments);
    Webcam.reset();
    Webcam.off('error');
  },
  snap() {
    Webcam.snap(dataURI => {
      if(!this.isDestroying && !this.isDestroyed) {
	this.get('didSnap')(dataURI);
      }
    });
  },
  didSnap(){},
  didError(){}
});
