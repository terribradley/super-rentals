import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyCity(city) {
      if(confirm("Are you sure?")) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
