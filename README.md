# deel-tests

###Environment requirements
* Node JS 16.15.0 LTS or superior
* Chrome browser.

###Run automated tests
You can use the following command to execute the automated tests:
By default it will be run in Chrome.

```shell script
npm run wdio
```

Before run the command, it is required to configure the environment.json with the credentials.
```
  "credentials": {
    "username": "",
    "password": ""
  }
```