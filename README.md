#Telegram - twitter like app built with Ember CLI - Client Side Repo

Note
```
Tech stack: Ember-cli, jQuery, momentjs, HTML5, CSS3, nginx
Development: Virtualbox Ubuntu 64bit
Deployment: DigitalOcean Ubuntu 14.04 64bit
```

* Server side repo: [https://github.com/yhagio/telegram-server](https://github.com/yhagio/telegram-server)

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
* Edge cases: What if a user has 1 million posts / 1 million followers? [https://gist.github.com/yhagio/a527a79b034bd0cf7c76](https://gist.github.com/yhagio/a527a79b034bd0cf7c76)

* User can follow another user [https://gist.github.com/yhagio/8ce153dccae24643241a](https://gist.github.com/yhagio/8ce153dccae24643241a)

* HOLD - Refactor: User can logout and redirected to login page (Need to refactor transitionToRoute function since it is duplicated in every page that has nav-bar)
* Replace RESTAdapter: [https://gist.github.com/yhagio/76db435fc0b871f4a7f4](http://emberjs.com/guides/models/connecting-to-an-http-server/) and connect to Express.js

* Check whether the user is authenticated before the Ember application starts. Using `beforeModel`, check if user is already authenticated. If yes, the backend sends back a user object which you store into session. Gists: [https://gist.github.com/yhagio/50886e087146fae8fc45](https://gist.github.com/yhagio/50886e087146fae8fc45). Created `applicationRoute` for ajax call the logged-in user.

* UserPage - show the user's posts [gists](https://gist.github.com/yhagio/d5670c8d7ef4b41be795)

* If loggedin, redirect to posts when visiting account managements. [commit](https://github.com/yhagio/telegram-cli/commit/9e7809de6a6a5ee56a2902e1c3b596d322ce0a45)
* Refactor: [commit1](https://github.com/yhagio/telegram-cli/commit/75ac8047cab95e26017909851974cdc785e5705a), [commit2](https://github.com/yhagio/telegram-cli/commit/ac9e0be21b46424ab3a492ef58922a6810a49b10), [commit3](https://github.com/yhagio/telegram-cli/commit/641ca3dcbca9ac04cefb2a5442af5ebc250dcb3c)

### Some branch notes

**FollowUser**
* Follow user, followings, followers - [gist](https://gist.github.com/yhagio/214f0a60d4059cd51a08)
* User can see the followers & followees
* User can see the following user's posts + own posts in '/posts'
* Posts displaying issues fixed: [commits here](https://gist.github.com/yhagio/9224cccb652a9a106096)

**securePass**
* fixed some issues for displaying posts above [commits here](https://gist.github.com/yhagio/9224cccb652a9a106096)
* User can reset password / sent by email (Mailgun) [Commits](https://gist.github.com/yhagio/9c6ac9f185bea1dca5b8)
* Securing password: [commits](https://gist.github.com/yhagio/4eb3ee7309231cdd4017)
* Update posts on deleting a post, on publishing, and modified sorting posts [gists](https://gist.github.com/yhagio/d71d881bf48c5dd88619)

**retweet**
* User can repost(retweet) a post from another user [gists](https://gist.github.com/yhagio/db981b7853d6d02477a1)

**refactor**
* Refactored, CSS fixed, followership fixed, Ember.logger [gists](https://gist.github.com/yhagio/b1bf3cda0da0b707ca24)
* User registration restriction (No duplicate username & email) [commit](https://github.com/yhagio/telegram-cli/commit/66196c0c06e4f9931301d29f3b1ef9ceea64ef0d)

**userAccount**
* User can change their information (except avatar yet) [commit](https://github.com/yhagio/telegram-cli/commit/a4f8f087cede60b8583316a67ca6d8ca16433f3f)

#### Additional Features to implement
* User can set his/her profile avatar (Upload and save it)
* User account page (username, email, full name, password, account deletion)
* Notification of new post from following users
* Private message
* Hash tags
* Search (users & posts)
* Load posts button (skip / limit)
* Link / Share posts

**userAccount**
* [Issues & commits on gists]()