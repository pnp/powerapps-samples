"use strict";
console.log(`Enums Script Loading...`);
var P365I_CRM;
(function (P365I_CRM) {
    var Common;
    (function (Common) {
        var Enums;
        (function (Enums) {
            let Prospect;
            (function (Prospect) {
                let StateCode;
                (function (StateCode) {
                    StateCode[StateCode["Open"] = 0] = "Open";
                    StateCode[StateCode["Completed"] = 1] = "Completed";
                    StateCode[StateCode["Canceled"] = 2] = "Canceled";
                })(StateCode = Prospect.StateCode || (Prospect.StateCode = {}));
                let StatusCode;
                (function (StatusCode) {
                    StatusCode[StatusCode["Open"] = 1] = "Open";
                    StatusCode[StatusCode["Qualified"] = 446310001] = "Qualified";
                    StatusCode[StatusCode["Disqualified"] = 2] = "Disqualified";
                    StatusCode[StatusCode["Canceled"] = 3] = "Canceled";
                    StatusCode[StatusCode["Scheduled"] = 4] = "Scheduled";
                })(StatusCode = Prospect.StatusCode || (Prospect.StatusCode = {}));
            })(Prospect = Enums.Prospect || (Enums.Prospect = {}));
        })(Enums = Common.Enums || (Common.Enums = {}));
    })(Common = P365I_CRM.Common || (P365I_CRM.Common = {}));
})(P365I_CRM || (P365I_CRM = {}));
console.log(`Enums Script Loaded...`);
//# sourceMappingURL=enums.js.map