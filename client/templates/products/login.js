Template.login.events({
  'click [data-action=login]': function (event, template) {
    Meteor.loginWithMeteorDeveloperAccount({}, function (error) {
      if (error) {
        alert(error);
      } else {
        IonModal.close();
      }
    });
  }
});
