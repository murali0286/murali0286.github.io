sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var PreviousEmploymentBlock = BlockBase.extend("app.root.controller.home.blocks.employment.PreviousEmploymentBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.employment.PreviousEmploymentBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.employment.PreviousEmploymentBlock",
                    type: "XML"
                }
            }
        }
    });
    return PreviousEmploymentBlock;
}, true);
