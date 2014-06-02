#Telegram - twitter like app built with Ember CLI

Tools I use:
```
Tool: Ember-cli
Operating System: Virtualbox Ubuntu 64bit
```

User can register/login. <br>
User is redirected to /posts once registered or logged-in. <br>
Logged-in user can publish posts. <br>

#### Done: 
* Styling mockup
* User can register (name, username=id, email, password)
* User can login (username and password)
* User can request 'forget password'
* Only logged in user can publish a post
* Only logged in user can see navigation bar (home and username link)
* Delete button of a post is only visible to the post's author
* The publish post has a timestamp [naming convention](https://gist.github.com/yhagio/129ec15371c60a2741ce)
* Count for characters max 140 for a post.
* Used components to organize codes (post-box, nav-bar)
* --- refactored : [Components: got stuck and learned](https://gist.github.com/yhagio/2829c2ca73291003abab)
* Make `link-to` work for username on navigation, it should redirect to the user page.
* Display user's full name and username on UserIndex template
* Link-to username of each post on Posts page
* Link-to Telegram image on navbar
* User-profile.hbs components created
* Display each user's posts in a user's page (UserIndex - posts)

#### Current issue:
* Issue [Error: Attempted to handle event `pushedData` on <telegram-cli@model:post::ember425:1> while in state root.deleted.uncommitted.](https://gist.github.com/yhagio/080d8af5e8b9c3d027a3/edit)

#### Todo: 
* If loggedin, redirect to posts when visiting account managements.
* User can logout.
* User page (can see latest 10 posts)
* User page (following & followers)
* User can follow another user
* User can see the followers & followees
* User can see the followee's posts in '/posts'
* User can unfollow
Later <br>
* User can reset password / sent by email
* User can set his/her profile avatar
* User can repost a post from another user

* Notification of new post from followee
* Private message

* User cannot regiser with duplicate username nor email
* Setup database to save user info, posts


