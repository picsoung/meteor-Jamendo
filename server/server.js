if (Meteor.isServer) {
  var Jamendo = Meteor.require('jamendo');
  var jamendo = new Jamendo({client_id:Meteor.settings.jamendo_client_id});
  
  Meteor.startup(function () {
    Future = Npm.require('fibers/future');

    Meteor.methods({
      findJamendoArtists: function(country,city,limit,orderby,ascdesc) {
      	var myFuture = new Future();
      	var results;
      	jamendo.artists_locations({ location_country: country,location_city:city,limit: limit, order: orderby.concat("_"+ascdesc)}, function(error, data){
			if(error){
	          myFuture.throw(error);
	        }else{
	          myFuture.return(data.results);
	        }
		});
	    return myFuture.wait();
      }
    });
  });

}