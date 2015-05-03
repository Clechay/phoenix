/**
 * Phoenix variables.js
 * All changes will be lost after update, 
 * it's good idea to edit values in another file,
 * ex. js/app/variables-app.js , but you can use another file too,
 * just reamember to add it between variables.js and rest of phoenix modules.
 */
if (phoenix.core.checkComp()) {
	phoenix.core.log("start_module_loading","variables")
	phoenix.data.variables= new Object();
	var data=phoenix.data.variables;
	/**
	 * You can edit all this variables. Possible values are in comments below,
	 * but before change anythink you should read at list connected to it part of documentation. 
	 */
	phoenix.core.addModule("variables");
	phoenix.core.log("finish_module_loading","variables")
}
else{
	phoenix.core.log("could_not_load_module",{id:"variables",reason:"comp"})
};
