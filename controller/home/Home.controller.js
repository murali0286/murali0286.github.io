sap.ui.define([
	"app/root/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("app.root.controller.home.Home", {

		onInit : function(){
            this._oResumeModel = this.getOwnerComponent().getModel("Resume");
            this.setModel(this._oResumeModel, "Resume");
		},

        onPressLinkedIn : function(oEvent) {
			var sProfileId = this._oResumeModel.getProperty("/LinkedInProfileId");
			window.open("https://www.linkedin.com/in/"+sProfileId+"/", "_blank");
		},

		onPressTwitter : function(oEvent) {
            var sProfileId = this._oResumeModel.getProperty("/TwitterProfileId");
            window.open("https://twitter.com/"+sProfileId+"/", "_blank");
		},

		onPressSAP : function(oEvent) {
			var sProfileId = this._oResumeModel.getProperty("/SAPProfileId");
			window.open("https://people.sap.com/"+sProfileId);
		},

        onPressEmail : function(oEvent) {

		},

        onDownloadResume : function(oEvent) {
            var link = document.createElement("a");
            link.download = "Murali_Resume.doc";
            link.href = "./resources/resume/Murali_Resume_UI5.doc";
            link.click();
		}
	});
});