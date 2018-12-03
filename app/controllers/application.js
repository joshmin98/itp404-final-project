import Controller from '@ember/controller';

export default Controller.extend({
  collapsed: true,
  actions: {
    toggle() {
      this.set('collapsed', !this.collapsed);
    }
  }
});
