import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    sendMail(params) {
      const body = params.comments;
      window.open(`mailto:minje@usc.edu?subject=Your+App&body=${body}`);
    }
  }
});
