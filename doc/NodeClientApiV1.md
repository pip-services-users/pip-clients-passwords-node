# Client API (version 1) <br/> Passwords Microservices Client SDK for Node.js

Node.js client API for Passwords microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [UserPassword class](#class1)
* [IPasswordsClient interface](#interface)
    - [init()](#operation1)
    - [open()](#operation2)
    - [close()](#operation3)
    - [setPassword()](#operation4)
    - [deletePassword()](#operation5)
    - [authenticate()](#operation6)
    - [changePassword()](#operation7)
    - [resetPassword()](#operation8)
    - [recoverPassword()](#operation9)
* [PasswordsRestClient class](#client_rest)
* [PasswordsSenecaClient class](#client_seneca)
* [PasswordsNullClient class](#client_null)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-passwords-node": "git+ssh://git@github.com:pip-services/pip-clients-passwords-node.git",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

If you are using Typescript, add the following type definition where compiler can find it
```javascript
/// <reference path="../node_modules/pip-clients-passwords-node/module.d.ts" />
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
var sdk = new require('pip-clients-passwords-node').Version1;

// Client configuration
var config = {
    transport: {
        type: 'http',
        host: 'localhost', 
        port: 8013
    }
};

// Create the client instance
var client = sdk.PasswordsRestClient(config);

// Open client connection to the microservice
client.open(function(err) {
    if (err) {
        console.error(err);
        return; 
    }
    
    console.log('Opened connection');
        
    // Set password for a new user
    client.setPassword(
        '123',
        'test123',
        function (err, userPassword) {
            if (err) {
                console.error(err);
                return;
            }
            
            console.log('User password object is');
            console.log(userPassword);
            
            // Authenticate user
            client.authenticate(
                '123',
                'test123',
                function(err, userPassword) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    
                    console.log('Authenticated user password object is');
                    console.log(userPassword);
                    
                    // Close connection
                    client.close(); 
                }
            );
        }
    );
});
```

## Data types

### <a name="class1"></a> UserPassword class

Represents a user password state with his ID, password hash and key settings.
It also tracks authentication attempts and recovery code. 

**Properties:**
- id: string - unique user id
- password: string - SHA256 hash for user password (password isn't stored for security)
- lock: boolean - true if user account was temporary locked after few failed authentication attempts
- lock_until: Date - date and time when lock expires
- pwd_fail_count: int - number of sequential failed attempts
- pwd_last_fail: Date - date and time of the last failed attempt
- pwd_rec_code: string - password recovery code that was sent to user in email message
- pwd_rec_expire: Date - date and time when password recovery code expires
- custom_hdr: Object - custom data summary that is always returned (in list and details)
- custom_dat: Object - custom data details that is returned only when a single object is returned (details)

## <a name="interface"></a> IPasswordsClient interface

If you are using Typescript, you can use IPasswordsClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IPasswordsClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IPasswordsClient {
    init(refs);
    open(callback);
    close(callback);
    setPassword(userId, password, callback);
    deletePassword(userId, callback);
    authenticate(userId, password, callback);
    changePassword(userId, oldPassword, newPassword, callback);
    resetPassword(userId, code, password, callback);
    recoverPassword(userId, callback);
}
```

### <a name="operation1"></a> init(refs)

Initializes client references. This method is optional. It is used to set references 
to logger or performance counters.

**Arguments:**
- refs: References - references to other components 
  - log: ILog - reference to logger
  - countes: ICounters - reference to performance counters

### <a name="operation2"></a> open(callback)

Opens connection to the microservice

**Arguments:**
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation3"></a> close(callback)

Closes connection to the microservice

**Arguments:**
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation4"></a> setPassword(userId, password, callback)

Sets password for a new user in the system and creates an object for him.

**Arguments:** 
- userId: string - unique user id generated by the client
- password: string - user password
- callback: (err, userPassword) => void - callback function
  - err: Error - occured error or null for success
  - userPassword: UserPassword - created UserPassword object
 
### <a name="operation5"></a> deletePassword(userId, callback)

Deletes user password from the system (use it carefully!)

**Arguments:** 
- userId: string - unique user id
- callback: (err) => void - callback function
  - err: Error - occured error or null for success

### <a name="operation6"></a> authenticate(userId, password, callback)

Authenticates user using ID/password combination and returns user object.

**Arguments:** 
- userId: string - unique user id to identify the user
- password: string - user password
- callback: (err, userPassword) => void - callback function
  - err: Error - occured error or null for success
  - userPassword: UserPassword - UserPassword object when authentication was successful
 
### <a name="operation7"></a> changePassword(userId, oldPassword, newPassword, callback)

Changes user password by providing old password

**Arguments:** 
- userId: string - unique user id to identify the user
- oldPassword: string - old user password
- newPassword: string - new user password
- callback: (err, userPassword) => void - callback function
  - err: Error - occured error or null for success
  - userPassword: UserPassword - updated UserPassword object

### <a name="operation8"></a> resetPassword(userId, code, password, callback)

Resets user password by providing recovery code

**Arguments:** 
- userId: string - unique user id to identify the user
- code: string - password recovery code
- password: string - new user password
- callback: (err, userPassword) => void - callback function
  - err: Error - occured error or null for success
  - userPassword: UserPassword - updated UserPassword object

### <a name="operation9"></a> recoverPassword(userId, callback)

Generates password recovery code for the user and sends it via email

**Arguments:** 
- userId: string - unique user id to identify the user
- callback: (err, code) => void - callback function
  - err: Error - occured error or null for success
  - code: string - password recovery code

## <a name="client_rest"></a> PasswordsRestClient class

PasswordsRestClient is a client that implements HTTP/REST protocol

```javascript
class PasswordsRestClient extends RestClient implements IPasswordsClient {
    constructor(config: any);
    init(refs);
    open(callback);
    close(callback);
    setPassword(userId, password, callback);
    deletePassword(userId, callback);
    authenticate(userId, password, callback);
    changePassword(userId, oldPassword, newPassword, callback);
    resetPassword(userId, code, password, callback);
    recoverPassword(userId, callback);
}
```

**Constructor config properties:** 
- transport: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> PasswordsSenecaClient class

PasswordsSenecaClient is a client that implements Seneca protocol

```javascript
class PasswordsSenecaClient extends SenecaClient implements IPasswordsClient {
    constructor(config: any);        
    init(refs);
    open(callback);
    close(callback);
    setPassword(userId, password, callback);
    deletePassword(userId, callback);
    authenticate(userId, password, callback);
    changePassword(userId, oldPassword, newPassword, callback);
    resetPassword(userId, code, password, callback);
    recoverPassword(userId, callback);
}
```

**Constructor config properties:** 
- transport: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - type: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_null"></a> PasswordsNullClient class

PasswordsNullClient is a null client for testing. It never fails and always returns a fake UserPassword object

```javascript
class PasswordsNullClient extends AbstractClient implements IPasswordsClient {
    constructor(config: any);        
    init(refs);
    open(callback);
    close(callback);
    setPassword(userId, password, callback);
    deletePassword(userId, callback);
    authenticate(userId, password, callback);
    changePassword(userId, oldPassword, newPassword, callback);
    resetPassword(userId, code, password, callback);
    recoverPassword(userId, callback);
}
```

**Constructor config properties:** 
- ...
