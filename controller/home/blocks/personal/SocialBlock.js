sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var SocialBlock = BlockBase.extend("app.root.controller.home.blocks.personal.SocialBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.personal.SocialBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.personal.SocialBlock",
                    type: "XML"
                }
            }
        }
    });
    return SocialBlock;
}, true);
