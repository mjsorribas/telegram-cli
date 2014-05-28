#Telegram - twitter like app built with Ember CLI

Tools I use:
```
Tool: Ember-cli
Operating System: Virtualbox Ubuntu 64bit
```

User can register/login. <br>
User is redirected to /posts once registered or logged-in. <br>
Logged-in user can publish posts. <br>

Done: <br>
* Styling mockup

(client-side) <br>
* User can register (name, username=id, email, password)
* User can login (username and password)
* User can request 'forget password'
* Only logged in user can publish a post
* Only logged in user can see navigation bar (home and username link)
* Delete button of a post is only visible to the post's author

Todo: <br>
* The publish post has a timestamp
* User page (following & followers)
* User can follow another user
* User can see the followers & followees
* User can see the followee's posts in '/posts'

Later <br>
* User can reset password / sent by email
* User can set his/her profile avatar
* User can repost a post from another user

(server-side) <br>
* User cannot regiser with duplicate username nor email
* Setup database to save user info, posts


