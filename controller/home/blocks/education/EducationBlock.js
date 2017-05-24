sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var SummaryBlock = BlockBase.extend("app.root.controller.home.blocks.education.EducationBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.education.EducationBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.education.EducationBlock",
                    type: "XML"
                }
            }
        }
    });
    return SummaryBlock;
}, true);
