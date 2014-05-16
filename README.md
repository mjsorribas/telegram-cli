#Telegram - twitter like app built with Ember CLI

Tools I use:
```
Tool: Ember-cli
Operating System: Virtualbox Ubuntu 64bit
```

**Application Architecture** <br>
Application - User

Account management
```
URL                   Screen/State/Description

/                     SignUp Page(Name, Username, Email, Password)
/login                Login Page(Username, Password)
/resetpassword        Reset Password Page(Enter Email)
/resetsuccess         Notification page after rest password reset
```
Home page for logged in users
```
/posts                Posts page(Show all posts & User also can publish)
```
Profile page
```
/:username            An user page(Show the user's posts)
/:username/following  Show an user's followees
/:username/followers  Show an user's followers
```

**Data Models** <br>
1. User - (name, username, password) <br>
2. Post - (body, username) <br>

**Features:**<br>
Account management <br>
- User can register using (Name, Username, Password)
- User can login using (Username, Password)
- User can logout
- User can request forgot-password using email
- User can recover password sent from on requesting forgot-password
<br>

Home page for logged in users<br>
- User can publish posts (Limit: 140 characters per post)
- User can delete own posts
<br>

Profile page <br>
- User can view latest posts from an user
- User can view the followers of an user
- User can view the followees of an user
- User can follow the user
- User can unfollow the user