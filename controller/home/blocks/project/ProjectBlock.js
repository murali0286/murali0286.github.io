sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var ProjectBlock = BlockBase.extend("app.root.controller.home.blocks.project.ProjectBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.project.ProjectBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.project.ProjectBlock",
                    type: "XML"
                }
            }
        }
    });
    return ProjectBlock;
}, true);
