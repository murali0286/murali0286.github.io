sap.ui.define([
    'sap/uxap/BlockBase'
    ],
    function (BlockBase) {
    "use strict";

    var SummaryBlock = BlockBase.extend("app.root.controller.home.blocks.summary.SummaryBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "app.root.controller.home.blocks.summary.SummaryBlockCollapsed",
                    type: "XML"
                },
                Expanded: {
                    viewName: "app.root.controller.home.blocks.summary.SummaryBlockExpanded",
                    type: "XML"
                }
            }
        }
    });
    return SummaryBlock;
}, true);
