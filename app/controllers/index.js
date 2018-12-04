// sam.darabi@verizondigitalmedia.com
import Controller from '@ember/controller';
import labels from '../labels';
import * as tf from '@tensorflow/tfjs';

export default Controller.extend({
  img: null,
  waiting: false,
  label: null,
  actions: {
    submit(dataURI) {
      this.set('waiting', true);
      this.set('img', dataURI);
      this.loadMobileNet().then(pretrainedModel => {
        this.loadImage(this.img).then(img => {
          const processedImage = this.loadAndProcessImage(img);
          const prediction = pretrainedModel.predict(processedImage);
          const labelPrediction = prediction.as1D().argMax().dataSync()[0];
          this.set('label', labels[labelPrediction]);
        }).then(() => {
          let saveCapture = this.saveLabeledImage.bind(this);
          saveCapture();
        });
      });
    },
  },
  loadMobileNet() {
    return tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
  },
  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(tf.fromPixels(img));
      img.onerror = (err) => reject(err);
    });
  },
  cropImage(img) {
    const width = img.shape[0];
    const height = img.shape[1];
    const shorterSide = Math.min(img.shape[0], img.shape[1]);
    const startingHeight = (height - shorterSide) / 2;
    const startingWidth = (width - shorterSide) / 2;
    const endingHeight = startingHeight + shorterSide;
    const endingWidth = startingWidth + shorterSide;
    return img.slice([startingWidth, startingHeight, 0], [endingWidth, endingHeight, 3]);
  },
  resizeImage(image) {
    return tf.image.resizeBilinear(image, [224, 224]);
  },
  batchImage(image) {
    const batchedImage = image.expandDims(0);
    return batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
  },
  loadAndProcessImage(image) {
    const croppedImage = this.cropImage(image);
    const resizedImage = this.resizeImage(croppedImage);
    const batchedImage = this.batchImage(resizedImage);
    return batchedImage;
  },
  saveLabeledImage() {
    this.store.findAll('label').then(labels => {
      if(labels.length == 0) {
        let newLabel = this.store.createRecord('label', {
          label: this.label,
          images: [this.img]
        });
        newLabel.save();
      } else {
        let alreadyFound = false;
        labels.forEach(label => {
          if(this.label == label.get('label')) {
            alreadyFound = true;
            let images = label.get('images');
            images.push(this.img);
            label.set('images', images);
            label.save();
          }
        });
        if(!alreadyFound) {
          let newLabel = this.store.createRecord('label', {
            label: this.label,
            images: [this.img]
          });
          newLabel.save();
        }
      }
    });
    this.set('waiting', false);
  }
});
