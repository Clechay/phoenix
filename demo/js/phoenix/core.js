/**
 * Phoenix core.js
 * You can edit only variables.js
 */


var phoenix = {};

phoenix.data = new Object();
phoenix.core = new Object();
phoenix.data.core = new Object();

phoenix.data.core.compatibility=false;

phoenix.data.core.modulesList={};

phoenix.data.core.modulesList.bowser=true; // this lib is needed to check compatibility


phoenix.core.log = function (id,data) {
	var out = {text:"placeholder",type:"error"};
	switch(id) {
	    case 'start_module_loading':
	        out.text = "[phoenix][core] module "+data+" initializing...";
	        out.type = "log";
	        break;
	    case 'finish_module_loading':
	        out.text = "[phoenix][core] module "+data+" initialized successfuly";
	        out.type = "log";
	        break;
	    case 'could_not_load_module':
	        out.text = "[phoenix][core] module "+data.id+" can not be loaded ";
	        switch(data.reason){
	        	case 'deps':
	        		out.text+="because of misssing dependencies";
	        		break;
	        	case 'comp':
	        		out.text+="because phoenix can not start";
	        		break;
	        	default:
	        		out.text+="because of unknown reason";
	        		break;
	    	}
	        out.type = "error";
	        break;
	    default:
	        out.text = "[phoenix][core]undefined log command";
	        out.type = "error";
	}
	switch(out.type){
		case 'log':
	        console.log(out.text);
	        break;
		case 'error':
	        console.error(out.text);
	        break;
		case 'info':
	        console.info(out.text);
	        break;
		case 'warn':
	        console.warn(out.text);
	        break;
	    default:
	        console.err("[phoenix][core][log] fatall error - unrecognized_command_type");
	        console.err("[phoenix][core][log] text:"+out.text);
	        console.err("[phoenix][core][log] type:"+out.type);
	}
	return 1;
};
phoenix.core.addModule = function (id) {
	phoenix.data.core.modulesList[id]=true;
	return 1;
};
phoenix.core.checkDeps = function (dependencies) {
	for (var i = 0; i < dependencies.length; i++) {
		if (typeof phoenix.data.core.modulesList[dependencies[i]] === "undefined") {
			return 0;
		};
	};
	return 1;
};
phoenix.core.checkComp = function () {
	return phoenix.data.core.compatibility;
};

phoenix.core.init = function () {
	if (
		function () {
			if (bowser.msie && bowser.version <= 8) {
			  	return false;
			}
			else{
				return true;
			}
		}
	) 
	{
		console.log("[phoenix][core] supported bowser, initializing...");
		phoenix.data.core.compatibility=true;
		if(typeof jQuery !== "undefined") phoenix.data.core.modulesList.jquery=true;
	}
	else{
		console.error("[phoenix-init] not supported bowser");
	};
};

phoenix.core.init();