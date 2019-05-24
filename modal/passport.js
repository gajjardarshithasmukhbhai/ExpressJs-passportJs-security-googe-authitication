var GoogleStrategy = require('passport-google-oauth20');
var GitHubStrategy = require('passport-github');
var InstagramStrategy = require('passport-instagram');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var passport=require('passport');
passport.use(new GoogleStrategy({
    clientID: "441-gtdnps.googleusercontent.com",
    clientSecret: "kY3tZFO",
    callbackURL: "http://localhost:5060/gajjurock",
  },
  (accessToken, refreshToken, profile, cb)=>{
    // User.findOrCreate({ googleId: profile.id },(err, user)=> {
    //   console.log('Gajjar DArshit',user);
    // });
      return cb(null, profile);
  }
));

passport.use(new GitHubStrategy({
    clientID: "5e41188f002",
    clientSecret: "847263f05",
    callbackURL: "http://localhost:5060/gajjurocks",
  },
  (accessToken, refreshToken, profile, ck)=>{
    // User.findOrCreate({ googleId: profile.id },(err, user)=> {
    //   console.log('Gajjar DArshit',user);
    // });
    console.log(profile);
      return ck(null, profile);
  }
));
passport.use(new InstagramStrategy({
    clientID: "7a760e37bb",
    clientSecret: "e9322b2347",
    callbackURL: "http://localhost:5060/instagram",
  },
  (accessToken, refreshToken, profile, ck)=>{
    // User.findOrCreate({ googleId: profile.id },(err, user)=> {
    //   console.log('Gajjar DArshit',user);
    // });
    console.log(profile);
      return ck(null, profile);
  }
));
passport.use(new LinkedInStrategy({
    clientID: "3c1xl",
    clientSecret: "7dmn",
    callbackURL: "http://localhost:5060/linkedin",
  },
  (accessToken, refreshToken, profile, cf)=>{
    // User.findOrCreate({ googleId: profile.id },(err, user)=> {
    //   console.log('Gajjar DArshit',user);
    // });
    console.log(profile);
      return cf(null, profile);
  }
));




// const passport=require('passport');//import the file
// const GoogleStrategy=require('passport-google-oauth20');//import the google auth 20
// passport.use(new GoogleStrategy({
// 	clientID:'696016007441-gtdnqjpl3auit24qf2859efaks3t1lk2.apps.googleusercontent.com',
// 	clientSecret:'XqHHv9dFyJc18qPZvkY3tZFO',
// 	callbackURL:'/gajjurock',
// },
// (accessToken,refreshToken,profile,done)=>{
// 	//callback function and Data Of USER
// 	console.log(':::>',profile);
// 	console.log(">Hello Pappa",profile.emails[0].value);
// }));//set the object and then after the respomse to gather
