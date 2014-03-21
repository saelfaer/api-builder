'use strict';

module.exports = {
    db: 'mongodb://localhost/mean-test',
    port: 4001,
    app: {
        name: 'MEAN - A Modern Stack - Test'
    },

    // Disabling oAuth overrides the enabled switches in each
    // individual oAuth config object
    disableOAuth: false,

    // oAuth config blocks
    facebook: {
        enabled: false,
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        enabled: false,
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        enabled: false,
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        enabled: false,
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        enabled: false,
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
