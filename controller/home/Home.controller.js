sap.ui.define([
	"app/root/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("app.root.controller.home.Home", {

		onInit : function(){

		},

        onPressLinkedIn : function(oEvent) {
			window.open("https://www.linkedin.com/in/murali-lakshmanan-15ab66b1/", "_blank");
		},

		onPressTwitter : function(oEvent) {

		},

        onPressEmail : function(oEvent) {

		}
	});
});