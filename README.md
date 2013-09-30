meteor-Jamendo
==============

Example project of [Jamendo](http://jamendo.com) API in meteor.

Jamendo is free music website. Their API is propulsed by [3scale](http://3scale.net).

[Full Jamendo API doc](http://developer.jamendo.com/v3.0)

## Demo

[http://jamendoapi.meteor.com/](http://jamendoapi.meteor.com/)

## What it does

Search for bands on Jamendo depending on a city name.

1. Write country name
2. Write city name
3. Choose ordering options
4. Have a list of bands

The countries list is a json file available in _./public/countries.json_ , _typeahead.js_ is taking care of the autocompletion. Jamendo takes ISO 3166-1 standard for country code, the list contains the corresponding _ISO_ field for a country name.

## Dependencies

* npm
* [meteor](http://meteor.com)
* [node-jamendo](https://github.com/vincent/node-jamendo)
* [bootstrap](http://getbootstrap.com/)
* [twitter typeahead](https://github.com/twitter/typeahead.js)

## Usage

1. Put your Jamendo API key in the _settings.json_ file.
2. Launch the app using the command:
   ```
    meteor --settings settings.json
   ```



