# InSession client startcode

## Team
**Peter R Andersen**
* [Github](https://github.com/Peter-Rambeck)

**Jens Gelbek**
* [Github](https://github.com/jensgelbek)

**Rasmus Ditlev Hansen**
* [Github](https://github.com/RasmusDH)

**Tobias Zimmermann**
* [Github](https://github.com/tobias-z)

## Getting started
1. Clone the project with `git clone https://github.com/tobias-z/ca3-client-startcode`.
2. Run these 2 commands:
- `rm -rf .git`
- `git init`
3. Setup your own repository and follow their instructions.
4. Run command `npm install` to initialise the project.
5. Change the URL's in the settings.js to your personal endpoints.

**You are good to go!**

## Usage:
The authentication part of things is setup to compleatly split the `Authenticated App` and the `Unauthenticated App`
This means that you have full control over which routes you'd like to show the users 💪

## Deployment
We have two ways to deploy our application:

### Deploy with Surge
If you do not have surge installed run `npm install -g surge`
1. `npm run build`
2. `surge --project ./build --domain A_DOMAIN_NAME.surge.sh`

### Deploy on Nginx
The name _xxx_ will be used as what you should put as your own name.
_This setup requires some knowledge of Nginx_
1. `ssh` into your droplet
2. `cd /etc/nginx/sites-enabled`
3. `nano default`
- In this file, change the root file to point to the file you are going to create afterwards `root /var/www/xxx/;`
- Save the file and exit it.
- Run the command `service nginx restart`
4. `cd /var/www`
5. `mkdir xxx`
6. `chmod -R 777 xxx`
7. Go back to your own project and run `npm run build`
8. Run `scp -r ./build/* root@YOURDROPLETURL:/var/www/xxx`
