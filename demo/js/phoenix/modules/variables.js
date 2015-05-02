/**
 * Phoenix variables.js
 * All changes will be lost after update, 
 * it's good idea to edit values in another file,
 * ex. js/app/variables-app.js , but you can use another file too,
 * just reamember to add it between variables.js and rest of phoenix modules.
 */
if (phoenix.data.compatibility) {
	console.log("[phoenix-variables-init] module initializing...");
	phoenix.data.modulesList.variables=true;
	/**
	 * You can edit all this variables. Possible values are in comments below,
	 * but before change anythink you should read at list connected to it part of documentation. 
	 */
	
}
else{
	console.error("[phoenix-variables-init] incompatibility detected, module will NOT be initialized");
};
