sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var MailingBlock = BlockBase.extend("app.root.controller.home.blocks.personal.MailingBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.personal.MailingBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.personal.MailingBlock",
                    type: "XML"
                }
            }
        }
    });
    return MailingBlock;
}, true);
