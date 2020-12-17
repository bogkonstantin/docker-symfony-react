## Description

Skeleton (blueprint) for any type of projects.  
Stack:

- Dockerized PHP (with Xdebug configured), MariaDB, Nginx
- Symfony 5 with authentication mechanism
- Registration, Login, Forget Password mechanisms
- Email templates and send function
- Landing pages (incl. login-registration forms) uses Twig with Less support and [Skeleton Css](http://getskeleton.com/)
- Admin panel uses React 17 with TypeScript and [Core UI](https://coreui.io/react/)
- API endpoints

## Configuration

Copy .env.dist to .env in parent folder and change variables, if you need to change Docker-services parameters.  
Copy .env to .env.local and change varibales in order to config Symfony variables.  

## Initial installation (dev)

Better to run all commands inside containers
```
make init

# or manually:
 
cd src
composer install
php bin/console doctrine:migrations:migrate
yarn install
yarn encore dev
```

### Run containers

```
make run

# or manually:

docker-compose up -d
```

### Frontend development
Run frontend auto-build on every change:
```
make watch

# or manually

yarn encore dev --watch
```
