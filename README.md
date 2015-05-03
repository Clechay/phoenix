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

Create script which will:

1. check if phoenix is working with phoenix.data.compatibility variable

2. log on console "[phoenix-your_module_name-init] module initializing..." if poenix works or "[phoenix-events-init] incompatibility detected, module will NOT be initialized" if not

3. check if all needed modules have beed already loaded by checking phoenix.data.modulesList.module_name

4. store data in phoenix.data

Done! You made phoenix module :3