sap.ui.define([
	"app/root/controller/BaseController",
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("app.root.controller.App", {

        onInit : function () {
            var oViewModel,
                fnSetAppNotBusy,
                iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

            oViewModel = new JSONModel({
                busy : true,
                delay : 0
            });
            this.setModel(oViewModel, "appView");

            fnSetAppNotBusy = function() {
                oViewModel.setProperty("/busy", false);
                oViewModel.setProperty("/delay", iOriginalBusyDelay);
            };

            // apply content density mode to root view
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

           // var oProfileModel = sap.ui.getCore().getModel();
           //  this.getView().addStyleClass(this.getOwnerComponent().getModel("ProfileSettings").getProperty("/ContentDensity"));

            // var oRouter = this.getRouter();
            // oRouter.attachRouteMatched(function (oEvent){
            //     var isAdmin = this.getOwnerComponent().getModel("Global").getProperty("/isAdmin");
            //     var sRouteName = oEvent.getParameter("name");
            //     if(sRouteName === "details" && !isAdmin) {
            //         oRouter.navTo("home");
            //         return;
            //     }
            // }.bind(this));

        }

	});

});

