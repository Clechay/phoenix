/**
 * Phoenix core.js
 * You can edit only variables.js
 */


var phoenix = {};

phoenix.data = new Object();

phoenix.data.compatibility=false;

phoenix.data.modulesList={
	variables:false,
	ui:false,
	ajax:false,
	events:false
};

phoenix.compatibilityCheck = function () {
	if (bowser.msie && bowser.version <= 8) {
	  	return false;
	}
	else{
		return true;
	}
};

phoenix.init = function () {
	if (this.compatibilityCheck()) {
		console.log("[phoenix-init] supported bowser, initializing...");
		this.data.compatibility=true;
	}
	else{
		console.error("[phoenix-init] not supported bowser");
	};
};

phoenix.init();