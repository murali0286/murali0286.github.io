sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var StrengthBlock = BlockBase.extend("app.root.controller.home.blocks.misc.StrengthBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.misc.StrengthBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.misc.StrengthBlock",
                    type: "XML"
                }
            }
        }
    });
    return StrengthBlock;
}, true);
