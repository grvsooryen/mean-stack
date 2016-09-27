# MEAN-Stack
This is a basic template to develop and deploy application on mean stack

### Prerquisites
Before installing this package you need certain tools installed on your system

- NodeJs
    - Bower
    - Grunt-cli
- MongoDB

### Installation

~~~~
git clone https://github.com/grvsooryen/mean-stack.git
cd mean-stack
npm install
bower install
cd dbdump
mongorestore -d contactlist
cd ../
grunt
node server.js
~~~~

Thats it! Your MEAN Stack is ready!