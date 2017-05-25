sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var AdressBlock = BlockBase.extend("app.root.controller.home.blocks.personal.AdressBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.personal.AdressBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.personal.AdressBlock",
                    type: "XML"
                }
            }
        }
    });
    return AdressBlock;
}, true);
