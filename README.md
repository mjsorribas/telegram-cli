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
* Forgot to put `save()`. Issue [Error: Attempted to handle event `pushedData` on <telegram-cli@model:post::ember425:1> while in state root.deleted.uncommitted.](https://gist.github.com/yhagio/080d8af5e8b9c3d027a3/edit)
* Duplicate usage of follow-user and user-profile components in files in `/user/..`
* Sort the user's posts descending order by date in UserIndex.hbs [https://gist.github.com/yhagio/5038f6c0271da810d8c2](https://gist.github.com/yhagio/5038f6c0271da810d8c2)

#### Current issue and the point where I got stuck:
* User can logout. (Just created a logout button on nav-bar, need to create action "logout" in components)

#### Todo: 
* If loggedin, redirect to posts when visiting account managements.

* User page (can see latest 10 posts)

* User can follow another user
* User can see the followers & followees
* User can see the followee's posts in '/posts'
* User can unfollow

* User can set his/her profile avatar (Upload and save it)
* User can repost a post from another user

* Save user information in database
* Save posts in database
* User cannot regiser with duplicate username nor email

* Notification of new post from followee
* User can reset password / sent by email (Need Email service)


#### Additional 

* Private message

