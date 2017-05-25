sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var PhoneNumberBlock = BlockBase.extend("app.root.controller.home.blocks.personal.PhoneNumberBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.personal.PhoneNumberBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.personal.PhoneNumberBlock",
                    type: "XML"
                }
            }
        }
    });
    return PhoneNumberBlock;
}, true);
