import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      firstName: 'Robert',
      lastName: 'Jackson'
    };
  }
});
