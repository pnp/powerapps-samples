# Weekly Timesheet Power App Template

## Summary

This timesheet application is a tablet-based canvas app that gives you a way to create and manage weekly timesheets.

Home Screen

![home screen](./assets/TimesheetHomeScreen.png)  

Timesheet Entry Screen

![timesheet entry screen](./assets/TimesheetEntryScreen.png)  


## Compatibility

![Power Apps Source File Pack and Unpack Utility 0.20](https://img.shields.io/badge/PSAopa-0.20-green.svg)

## Applies to

* [Microsoft Power Apps](https://docs.microsoft.com/powerapps/)

## Data Sources
 
This app uses SharePoint as a data source and requires two SharePoint Lists with the following fields:

### BillTo List

This list contains the lookup data to associate a timesheet entry with a job or client to bill to.  Set the list up as follows:

|Type|Internal Name|Required|
|---|---|:---:|
|Single line of text|Title|Yes|

### TimeEntries List

This list contains the timesheet entries.  Set the list up as follows:

|Type|Internal Name|Required|
|---|---|:---:|
|Single line of text|Title|Yes|
|Number|Mon|No|
|Number|Tues|No|
|Number|Weds|No|
|Number|Thurs|No|
|Number|Fri|No|
|Number|Sat|No|
|Number|Sun|No|
|Multi line of text|Comments|No|
|Choice|Status|No|
|Person or Group|Employee|No|
|Person or Group|Manager|No|
|Lookup|BillTo|No|
|Date|WeekStart|No|
|Number|Total|No|

## Minimal Path to Awesome

* [Download](https://github.com/pnp/powerapps-samples/blob/main/samples/Timesheet/solution/WeeklyTimesheet.msapp) the `.msapp` from the `solution` folder
* Use the `.msapp` file using **File** > **Open** > **Browse** within Power Apps Studio.
* Select the **Data** tab
* Remove the `BillTo` and `TimesheetEntries` data sources from the app
* Add new data sources for the `BillTo` and `TimesheetEntries` SharePoint Lists you created in your environment
* Save and Publish

## Using the Source Code

  You can also use the [Power Apps Source Code tool](https://github.com/microsoft/PowerApps-Language-Tooling) to the code using these steps:

* Clone the repository to a local drive
* Pack the source files back into `.msapp` file:
  * [Power Apps Tooling Usage](https://github.com/microsoft/PowerApps-Language-Tooling)
* Use the `.msapp` file using **File** > **Open** > **Browse** in Power Apps Studio.


## Sample

Solution|Author(s)
--------|---------
Timesheet Power App | [April Dunnam](https://github.com/aprildunnam) ([@aprildunnam](https://www.twitter.com/aprildunnam) )

## Version history

Version|Date|Comments
-------|----|--------
1.0|February 16, 2021|Initial release


## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---
<img src="https://telemetry.sharepointpnp.com/powerapps-samples/samples/timesheet" />