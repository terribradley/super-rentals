import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    newCityFormShow() {
      this.set('addNewCity', true);
    },
    save1() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        country: this.get('country') ? this.get('country') : "",
      };
      this.set('addNewCity', false);
      this.sendAction('save2', params);
    }
  }
});
