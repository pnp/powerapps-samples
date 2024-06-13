"use strict";
var P365I_CRM;
(function (P365I_CRM) {
    var Entities;
    (function (Entities) {
        var Quote;
        (function (Quote) {
            let FORM_CONTEXT;
            let GLOBAL_CONTEXT;
            let FORM_ID;
            let FORM_TYPE;
            let LEXICON;
            let HELPERS;
            let REFRESHCOUNT = 0;
            function onFormLoad(executionContext) {
                console.log('OnFormLoad Triggered');
                FORM_CONTEXT = executionContext.getFormContext();
                GLOBAL_CONTEXT = Xrm.Utility.getGlobalContext();
                FORM_ID = FORM_CONTEXT.ui.formSelector.getCurrentItem() ? FORM_CONTEXT.ui.formSelector.getCurrentItem().getId().toUpperCase() : "";
                FORM_TYPE = FORM_CONTEXT.ui.getFormType();
                LEXICON = P365I_CRM.Common.Enums;
                HELPERS = P365I_CRM.Common.Helpers;
                FORM_CONTEXT.data.entity.addOnSave(function () { onFormSave(executionContext); });
                FORM_CONTEXT.data.entity.addOnPostSave(function () { onFormPostSave(executionContext); });
                addOnchangeFunctionsToAttributes();
                FORM_CONTEXT.getControl("Subgrid_products").addOnLoad(subgridOnLoad);
            }
            Quote.onFormLoad = onFormLoad;
            function onFormSave(executionContext) {
                console.log(`onFormSave Triggered`);
            }
            Quote.onFormSave = onFormSave;
            async function onFormPostSave(executionContext) {
                console.log(`onFormPostSave Triggered`);
            }
            Quote.onFormPostSave = onFormPostSave;
            function addOnchangeFunctionsToAttributes() {
                console.log(`addOnchangeFunctionsToAttributes Triggered`);
            }
            Quote.addOnchangeFunctionsToAttributes = addOnchangeFunctionsToAttributes;
            function subgridOnLoad() {
                console.log(`subgridOnLoad Triggered`);
                let subgridTotalRecordCount = FORM_CONTEXT.getControl("Subgrid_products").getGrid().getTotalRecordCount();
                if (REFRESHCOUNT == 0 && subgridTotalRecordCount == -1) {
                }
                else if (REFRESHCOUNT == 0 && subgridTotalRecordCount > 0) {
                    REFRESHCOUNT = REFRESHCOUNT + 1;
                    FORM_CONTEXT.data.refresh(false);
                }
                else if (REFRESHCOUNT == 1 && subgridTotalRecordCount > 0) {
                    REFRESHCOUNT = 0;
                }
                else if (REFRESHCOUNT > 0 && subgridTotalRecordCount == -1) {
                    REFRESHCOUNT = 0;
                    FORM_CONTEXT.data.refresh(false);
                }
            }
            Quote.subgridOnLoad = subgridOnLoad;
        })(Quote = Entities.Quote || (Entities.Quote = {}));
    })(Entities = P365I_CRM.Entities || (P365I_CRM.Entities = {}));
})(P365I_CRM || (P365I_CRM = {}));
//# sourceMappingURL=quote.js.map