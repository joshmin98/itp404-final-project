import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteLabel(label) {
      label.destroyRecord();
    }
  }
});
