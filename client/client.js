var selectedCountry ={};

if (Meteor.isClient) {
  // Meteor.subscribe("countries");
  var artists = {};

  var onSelected = function(evt,datum){
    Session.set('selectedCountry',datum);
  }

  Template.searchForm.rendered = function () {
    $('#inputCountry').typeahead({
        name: 'countries',
        prefetch: '/countries.json',                                      
        limit: 10,
      });

      $('#inputCountry').on('typeahead:selected', onSelected);
  }

  Template.searchForm.events({
    'click #searchButton' : function () {
      Meteor.call('findJamendoArtists',Session.get('selectedCountry')['ISO'],
                                      $("#inputCity").val(),
                                      $("#selectNbResult").val(),
                                      $("#selectOrderBy").val(),
                                      $("#selectAsc").val(),
                                      function(err,data){

        Session.set('artists', data);
        Session.set('searched',true);
      });
    },
  });

  Template.artistList.helpers({
    artists: function(){
      return Session.get('artists');
    },
  });

  Template.artistList.helpers({
    searched: function(){
      return Session.get('searched');
    },
  });

  Handlebars.registerHelper("prettifyDate", function(timestamp) {
    var date = moment(timestamp);
    return moment([date.year(), date.month(), date.day()]).fromNow();
});
}