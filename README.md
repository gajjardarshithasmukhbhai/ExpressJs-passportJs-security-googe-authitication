<h1 align="center" style="color:red;">Passport Js Gmail authtication</h1>
<div align="center">

![mern stack](https://s3-ap-southeast-1.amazonaws.com/djamblog/article-100417221025.png)

</div>
<div>
 
 ### Documantation of Passport Js 
 
 </div>
 
 <div>
 
 * **step 1**:
&nbsp;&nbsp;First you dowload the passport js and passport Js stratergy
 * **step 2:**
&nbsp;&nbsp;  Then After the passport Js code import 
* **step 3:**
&nbsp;&nbsp;  Then After the Authorize Api key for Google + Login is **https://www.googleapis.com/auth/plus.login** 
* **step 4:**
&nbsp;&nbsp;and the Google credential and secret Id are set in that passport Js credential
 
```javascript
const passport=require('passport');//import the file
const GoogleStrategy=require('passport-google-oauth20');//import the google auth 20
passport.use(new GoogleStrategy({
	callbackURL:'/gajjurock',
	clientID:'security point i not show',
	clientSecret:'security point i not show',
	refreshToken:'security point i not show',
},
()=>{
	//callback function
}))
```
* **step 5:**
&nbsp;&nbsp;then after in google Authroize google redirect set same as you set the callbackURL property in step 4
and then after it's routes is set like
```javascript
app.get('/gajjurock',(req,res,next)=>{
	res.send('<h1>HEllO</h1>');
});
```
* **step 7:**
&nbsp;&nbsp;you got the email just like this in two steps:
**app.js**
```javascript
app.get('/passport-google',passportx.authenticate('google',{
	//object which user data you require tell me about the user
	scope:['profile','https://www.googleapis.com/auth/userinfo.email']
}));
```
**passport.js file**
```javascript
passport.use(new GoogleStrategy({
	callbackURL:'/gajjurock',
	clientID:'gtdnqjpl3auit24qf2859efaks3t1lk2.apps.googleusercontent.com',
	clientSecret:'vkY3tZFO',
	refreshToken:'tb8mS0NMfiF',
},
(accessToken,refreshToken,profile,done)=>{
	//callback function and Data Of USER
	console.log("->");
	console.log("->",profile.emailId);
	console.log(profile.emails[0].value);//get eamil just like this thorugh callback
}))
```
* **step 8:**
&nbsp;&nbsp;
</div>

