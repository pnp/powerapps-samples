"use strict";
console.log(`Helper Script Loading...`);
var P365I_CRM;
(function (P365I_CRM) {
    var Common;
    (function (Common) {
        var Helpers;
        (function (Helpers) {
            function displayErrorMessage(error) {
                let errormessage = `Unknown error`;
                if (typeof error === 'object' && error.message) {
                    errormessage = error.message;
                }
                else if (typeof error === 'string') {
                    errormessage = error;
                }
                const alertStrings = { confirmButtonLabel: `OK`, text: errormessage, title: `Something went wrong` };
                P365I_CRM.Common.Helpers.alertDialog(alertStrings, undefined, undefined, undefined);
            }
            Helpers.displayErrorMessage = displayErrorMessage;
            function formDirty(formContext) {
                let dirty = formContext.data.entity.getIsDirty();
                if (dirty) {
                    const alertStrings = { confirmButtonLabel: "OK", text: "There are unsaved changes. Please save the form before proceeding.", title: "Warning" };
                    alertDialog(alertStrings, undefined, undefined, undefined);
                }
                return dirty;
            }
            Helpers.formDirty = formDirty;
            function getAttributeValue(formContext, attributename) {
                if (formContext.getAttribute(attributename) != null) {
                    return formContext.getAttribute(attributename).getValue();
                }
                return null;
            }
            Helpers.getAttributeValue = getAttributeValue;
            function confirmDialog(confirmStrings, confirmOptions) {
                return new Promise(function (resolve, reject) {
                    confirmStrings = confirmStrings !== null && confirmStrings !== void 0 ? confirmStrings : { cancelButtonLabel: "Cancel", confirmButtonLabel: "Ok", text: "This is a confirmation.", title: "Confirmation Dialog Title", subtitle: "Subtitle" };
                    confirmOptions = confirmOptions !== null && confirmOptions !== void 0 ? confirmOptions : { height: 200, width: 450 };
                    Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(function success(result) {
                        console.log("Confirm Dialog Success", result);
                        resolve(result);
                    }, function (error) {
                        console.log("Confirm Dialog Error", error);
                        reject(error);
                    });
                });
            }
            Helpers.confirmDialog = confirmDialog;
            function alertDialog(alertStrings, alertOptions, succesCallback, errorCallback) {
                alertStrings = alertStrings !== null && alertStrings !== void 0 ? alertStrings : { confirmButtonLabel: "Ok", text: "Confirmed", title: "Warning" };
                alertOptions = alertOptions !== null && alertOptions !== void 0 ? alertOptions : { height: 200, width: 450 };
                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(function success(result) {
                    if (succesCallback) {
                        succesCallback(result);
                    }
                    console.log("Alert dialog closed");
                }, function (error) {
                    if (errorCallback) {
                        errorCallback(error);
                    }
                });
            }
            Helpers.alertDialog = alertDialog;
            function cleanID(input) {
                return input.substring(0, 1) === "{" ? input.substring(1, 37) : input;
            }
            Helpers.cleanID = cleanID;
            function getDatabyFetchXML(entityName, fetchXml) {
                return new Promise(function (resolve, reject) {
                    if (entityName && fetchXml) {
                        Xrm.WebApi.online.retrieveMultipleRecords(entityName, `?fetchXml=${fetchXml}`).then(function success(results) {
                            resolve(results);
                        }, function (error) {
                            reject(error);
                        });
                    }
                    else {
                        reject(null);
                    }
                });
            }
            Helpers.getDatabyFetchXML = getDatabyFetchXML;
            function openCustomPage(primaryControl, customPage, navigationOptions) {
                console.log(`Function openCustomPage Triggered`);
                return new Promise(function (resolve, reject) {
                    try {
                        console.log(`openCustomPage try`);
                        if (!primaryControl || !primaryControl.data) {
                            throw new Error(`PrimaryControl is not provided or incorrect`);
                        }
                        else if (!customPage) {
                            throw new Error(`CustomPage object not provided or incorrect`);
                        }
                        if (P365I_CRM.Common.Helpers.formDirty(primaryControl)) {
                            return;
                        }
                        const defaultnavigationOptions = {
                            target: 2,
                            position: 1,
                            width: { value: 40, unit: "%" },
                            height: { value: 40, unit: "%" }
                        };
                        navigationOptions = navigationOptions !== null && navigationOptions !== void 0 ? navigationOptions : defaultnavigationOptions;
                        Xrm.Navigation.navigateTo(customPage, navigationOptions).then(function (success) {
                            console.log('Closed', success);
                            primaryControl.data.refresh(false);
                            resolve(success);
                        }).catch(function (error) {
                            console.log('Error', error);
                        });
                    }
                    catch (error) {
                        console.log(`openCustomPage error`, error);
                        P365I_CRM.Common.Helpers.displayErrorMessage(error);
                        reject(error);
                    }
                    finally {
                        console.log(`openCustomPage finally`);
                    }
                });
            }
            Helpers.openCustomPage = openCustomPage;
        })(Helpers = Common.Helpers || (Common.Helpers = {}));
    })(Common = P365I_CRM.Common || (P365I_CRM.Common = {}));
})(P365I_CRM || (P365I_CRM = {}));
console.log(`Helper Script Loaded...`);
//# sourceMappingURL=helpers.js.map