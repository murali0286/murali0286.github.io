sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var AchievementBlock = BlockBase.extend("app.root.controller.home.blocks.misc.AchievementBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.misc.AchievementBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.misc.AchievementBlock",
                    type: "XML"
                }
            }
        }
    });
    return AchievementBlock;
}, true);
