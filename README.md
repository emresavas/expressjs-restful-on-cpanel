# Description
This is a ExpressJS Restful app example project ready to deploy on cPanel.

# How to Start ExpressJS App on Cpanel?
* Login to cPanel account.
* Clone this repo to cPanel using "Git Version Control" tool on dashboard.
* If you have a valid .cpanel.yml file cPanel will deploy app files to `/home/user/expressjsapp` directory.
* Visit "Application Manager" on cPanel dashboard.
* Create a new app with a proper endpoint and refer to `/home/user/expressjsapp` directory.
  * Click "Register Application" button.
  * Name your application.
  * Select a domain binded to your cPanel account. (if you want to deploy this app on a subdomain, please create a subdomain first)
  * Assuming you put app files to `/home/user/expressjsapp` please fill this area with `expressjsapp`.
  * Select production.
  * Submit the app with "Deploy" button. This will redirect you to app list page.
  * You will see "Ensure Dependencies" button next to app name. Click this button and start initialization of Node.js app on cPanel.

# Requirements & Notes
Since Apache on cPanel working as a proxy for Passenger webserver, it will create some default proxy entries with app.js file. Do not change app.js filename. Passenger web server will automatically search for app.js file to start Node.js application. If you name your file let's say myapp.js, Passenger webserver won't able to start your app.

When defining routes, please add app url namespace to the requests. Let's say your app url namespace defined on "Application Manager" is `expressjsapp`. You will browse your application on https://domain.com/expressjsapp. Then your app routes should start with `app.get('/expressjsapp'`.

#### Example GET Request for / Route
```
app.get('/expressjsapp', (req, res) => {
    return res.send(Object.values(users));
});
```

#### Example GET Request for /users Route
```
app.get('/expressjsapp/users', (req, res) => {
    return res.send(Object.values(users));
});
```

If you only set routes like `/` or `/users` you will get an `Cannot GET /users` error. This issue is only happens with deploying ExpressJS applications on cPanel.

# Auto Deploy to Cpanel
* Change `.cpanel.yml.example` filename to `.cpanel.yml`
* Edit `/home/user/expressjsapp` line in `.cpanel.yml` to your username on cPanel
## Example cpanel.yml File
```yml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/user/expressjsapp/
    - /bin/mkdir $DEPLOYPATH
    - /bin/cp app.js $DEPLOYPATH
    - /bin/cp package.json $DEPLOYPATH
    - /bin/mkdir $DEPLOYPATH/tmp
    - /bin/touch $DEPLOYPATH/tmp/restart.txt
```

