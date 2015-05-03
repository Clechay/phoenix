if (phoenix.core.checkComp()) {
	if (phoenix.core.checkDeps(['variables','jquery'])) {
		phoenix.core.log("start_module_loading","events")
		phoenix.data.events= new Object();
		var data=phoenix.data.events;
		phoenix.events= new Object();
		var module=phoenix.events;

		data.eventsList= new Array();
		data.eventsActions= new Array();


		module.eventRegister=function(id,func) {
			data.eventsActions[id]=new Array();
			data.eventsList.push(id);
			if (!(typeof func === 'undefined')) { 
				module.eventActionRegister(id,func);
			}
		};
		module.eventActionRegister=function(id,func) {
			data.eventsActions[id].push(func);
		};
		module.eventReport=function(id,parms) {
			console.log("[phoenix][events] "+id+" execution started");
			for (var i = 0; i < data.eventsActions[id].length; i++) {
				phoenix_globalTemp=data.eventsActions[id][i];
				if (!(typeof parms === 'undefined')) { phoenix_globalTemp(parms); }
				else phoenix_globalTemp();
			};
		};

		data.appAlreadyLoaded=false;

		module.eventRegister("windowResize");
		module.eventRegister("appLoaded",function() {phoenix.data.appAlreadyLoaded=true;});
		module.eventRegister("documentReady");
		module.eventRegister("action");

		$( document ).ready(function() {
			if (!data.appAlreadyLoaded) {
				module.eventReport("appLoaded");
			}
			else{
				module.eventReport("documentReady");
			}
		});
		$(window).resize(function() {
			module.eventReport("windowResize");
		});


		
		phoenix.core.addModule("events");
		phoenix.core.log("finish_module_loading","events")
	}
	else{
		phoenix.core.log("could_not_load_module",{id:"events",reason:"deps"})
	};
}
else{
	phoenix.core.log("could_not_load_module",{id:"events",reason:"comp"})
};