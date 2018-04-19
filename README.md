# dcy-amd-node-loader
For Decisyon unit test : Load AMD modules directly from node.js creating the dcyDefine node

# Dependencies 
https://github.com/ajaxorg/node-amd-loader

# Installation
------------

`dcy-amd-node-loader` can be easily installed using [npm](http://npmjs.org).

    npm install https://github.com/dcyFranck/dcy-amd-node-loader.git --save-dev
    
Before being able to load AMD modules the `dcy-amd-node-loader` module has to be required.

    require("dcy-amd-node-loader");
    
This needs to be done only once.

# Direct features
dcyAngular.dcyDefine(moduleName, [...dependencies], callback)

# Indirect features
You can see the documentation of lib https://github.com/ajaxorg/node-amd-loader



