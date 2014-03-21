'use strict';

// User routes use users controller
var users = require('../controllers/users');
var config = require('../../config/config');

module.exports = function(app, passport) {

    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);
    app.get('/users/me', users.me);

    // Setting up the users api
    app.post('/users', users.create);

    // Setting up the userId param
    app.param('userId', users.user);

    // Setting the local strategy route
    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }), users.session);

    if (!config.disableOAuth) {

        if (config.facebook.enabled) {
            // Setting the facebook oauth routes
            app.get('/auth/facebook', passport.authenticate('facebook', {
                scope: ['email', 'user_about_me'],
                failureRedirect: '/signin'
            }), users.signin);

            app.get('/auth/facebook/callback', passport.authenticate('facebook', {
                failureRedirect: '/signin'
            }), users.authCallback);
        }

        if (config.github.enabled) {
            // Setting the github oauth routes
            app.get('/auth/github', passport.authenticate('github', {
                failureRedirect: '/signin'
            }), users.signin);

            app.get('/auth/github/callback', passport.authenticate('github', {
                failureRedirect: '/signin'
            }), users.authCallback);
        }

        if (config.twitter.enabled) {
            // Setting the twitter oauth routes
            app.get('/auth/twitter', passport.authenticate('twitter', {
                failureRedirect: '/signin'
            }), users.signin);

            app.get('/auth/twitter/callback', passport.authenticate('twitter', {
                failureRedirect: '/signin'
            }), users.authCallback);
        }

        if (config.google.enabled) {
            // Setting the google oauth routes
            app.get('/auth/google', passport.authenticate('google', {
                failureRedirect: '/signin',
                scope: [
                    'https://www.googleapis.com/auth/userinfo.profile',
                    'https://www.googleapis.com/auth/userinfo.email'
                ]
            }), users.signin);

            app.get('/auth/google/callback', passport.authenticate('google', {
                failureRedirect: '/signin'
            }), users.authCallback);
        }

        if (config.linkedin.enabled) {
            // Setting the linkedin oauth routes
            app.get('/auth/linkedin', passport.authenticate('linkedin', {
                failureRedirect: '/signin',
                scope: [ 'r_emailaddress' ]
            }), users.signin);

            app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
                failureRedirect: '/siginin'
            }), users.authCallback);
        }
    }

};
