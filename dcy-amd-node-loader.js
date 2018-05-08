require("amd-loader");
const path = require("path");
global.dcyAngular = {
	dcyDefine : function(name, deps, callback) {
		if(typeof name !== 'string'){
			callback = deps;
			deps = name;
			name = null;
		}
		
		if (typeof deps !== 'object') { //In nodeJS/mocha detect if deps is array as object
			callback = deps;
			deps = null;
		}
		
		deps = deps.map(function(item) { 
			if(item.indexOf('@dcyCoreJs/') != -1){
				item = item.replace('@dcyCoreJs/', path.join(process.cwd(), '/src/main/webapp/dist/') ) + '.js';
			}
			return item;
		});
		
		if(name && deps && callback){
			return global.define(name, deps, callback);
		}
		else if(!name && deps && callback){
			return global.define(deps, callback);
		}
		else if(!name && !deps && callback){
			return global.define(callback);
		}
	}
};
