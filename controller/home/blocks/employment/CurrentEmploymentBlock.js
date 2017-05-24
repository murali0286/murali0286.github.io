sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var CurrentEmploymentBlock = BlockBase.extend("app.root.controller.home.blocks.employment.CurrentEmploymentBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.employment.CurrentEmploymentBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.employment.CurrentEmploymentBlock",
                    type: "XML"
                }
            }
        }
    });
    return CurrentEmploymentBlock;
}, true);
