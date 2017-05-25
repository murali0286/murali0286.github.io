sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var OtherBlock = BlockBase.extend("app.root.controller.home.blocks.personal.OtherBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.personal.OtherBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.personal.OtherBlock",
                    type: "XML"
                }
            }
        }
    });
    return OtherBlock;
}, true);
