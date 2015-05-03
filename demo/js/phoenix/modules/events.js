if (phoenix.data.compatibility) {
	console.log("[phoenix-events-init] module initializing...");
	phoenix.data.modulesList.events=true;

	phoenix.data.eventsActions= new Array();
	phoenix.data.eventsList= new Array();

	phoenix.eventRegister=function(id,func) {
		this.data.eventsActions[id]=new Array();
		this.data.eventsList.push(id);
		if (!(typeof func === 'undefined')) { 
			this.eventActionRegister(id,func);
		}
	};
	phoenix.eventActionRegister=function(id,func) {
		this.data.eventsActions[id].push(func);
	};
	phoenix.eventReport=function(id,parms) {
		console.log("[phoenix][events] "+id+" execution started");
		for (var i = 0; i < this.data.eventsActions[id].length; i++) {
			phoenix_globalTemp=this.data.eventsActions[id][i];
			if (!(typeof parms === 'undefined')) { phoenix_globalTemp(parms); }
			else phoenix_globalTemp();
		};
	};

	phoenix.data.appAlreadyLoaded=false;

	phoenix.eventRegister("windowResize");
	phoenix.eventRegister("appLoaded",function() {phoenix.data.appAlreadyLoaded=true;});
	phoenix.eventRegister("documentReady");
	phoenix.eventRegister("action");
	phoenix.eventActionRegister("action",function (lparm) {
		if ((!(typeof lparm === 'undefined'))&&phoenix.data.modulesList.ajax){
			phoenix.actonExecute(lparm);
		}
	});

	$( document ).ready(function() {
		if (!phoenix.data.appAlreadyLoaded) {
			phoenix.eventReport("appLoaded");
		}
		else{
			phoenix.eventReport("documentReady");
		}
	});
	$(window).resize(function() {
		phoenix.eventReport("windowResize");
	});
}
else{
	console.error("[phoenix-events-init] incompatibility detected, module will NOT be initialized");
};