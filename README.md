# Phoenix

super light JS web app support library

# Changes on the way! I'm rewriting Phoenix!

# How to install?

1. Download phoenix. If You have git, you can use following command `git clone https://github.com/Clechay/phoenix.git` in target dir.

2. Put in your app following files and add them in this order to your app's main html file: 

```
[other libs you use, ex. otherlibs/jquery/localJQ.js]
phoenix/core.js
phoenix/module/variables.js
[file which You will use to overwrite phoenix modules default vars, ex app/variables-app.js]
[additional modules which You want to use, ex. phoenix/modules/events.js]
[your app js files, ex app/app.js]
```

Example app is in `demo` dir.

Done! Now You can use phoenix in your project :3

# How to use existing modules?

### Events

Use `phoenix.eventRegister(id)` to register new event.

Use `phoenix.eventRegister(id,func)` to register new event and add first function func to it.

Use `phoenix.eventActionRegister(id,func)` to add new action to event.

Use `phoenix.eventReport(id,parms)` to execute all functions from event one by one from global variable 'phoenix_globalTemp'

# How to create module?

`{module-id}` means your module id, ex 'my_module'

`{module-dependencies}` means your module dependencies list as an array of strings, ex ['jquery','variables','events']

for dependencies check, order of list is meaningless.

```js
// check if phoenix is compatibile with browser
if (phoenix.core.checkComp()) {	

	// check if all needed libs are avaible
	if (phoenix.core.checkDeps({module-dependencies})) { 

		// log on console that module loading was started 
		phoenix.core.log("start_module_loading","{module-id}") 

		// create place for your data
		phoenix.data.{module-id}= new Object();

		// create alias to your data var to make life even easier
		var data=phoenix.data.{module-id};

		// create place for your module functions
		phoenix.{module-id}= new Object();

		// create alias to your module functions place to make life even easier
		var module=phoenix.{module-id};

		// your code

		// use module.{your-function-name}=function (args) { your function code } to add function to module
		// use module.{your-function-name}(args) to access your module function
		//
		// use phoenix.{anther-module-name}.(args) to access function from another module
		//
		// use data to acces your module data
		//
		// use phoenix.core to acces core of phoenix

		// log on console that module was loaded successfuly :3 
		phoenix.core.addModule("{module-id}");
	}
	else{
		// log on console that module can not be loaded because of missing libs 
		phoenix.core.log("could_not_load_module",{id:"{module-id}",reason:"deps"})
	};
}
else{
	// log on console that module can not be loaded because of browser incompatibility with phoenix itself 
	phoenix.core.log("could_not_load_module",{id:"{module-id}",reason:"comp"})
};
```

Done! You made phoenix module :3