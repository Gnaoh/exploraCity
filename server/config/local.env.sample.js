'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'exploracity-secret',

  FACEBOOK_ID: '497049540456061',
  FACEBOOK_SECRET: '0665b5ab3f73c88bdabd70f646253722',

  TWITTER_ID: 'meZ8whl11io7SczTejxAMe3Bw',
  TWITTER_SECRET: 'tLA3jZyT2cwwdm5PGQEdkUebr1SMnmpayVARGwvJxEMWU1u9I0',

  GOOGLE_ID: '421715475032-3vhnj08o7eh12roeraeqfalq594gd4fi.apps.googleusercontent.com',
  GOOGLE_SECRET: 'wfdxM5_HLGdu6lhfFTP-8FnV',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
