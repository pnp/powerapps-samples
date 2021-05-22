---
page_type: sample
languages:
- powerapps-comma
products:
- power-apps
- powerapps
- canvas
name: Status Indicator
description: This sample shows how to add a status indicator in a display form.
urlFragment: powerapps-status-indicator
ms.date: 2/24/2021
author: dcashpeterson
---

# Status Indicator

## Summary

This sample shows how to add a status indicator in a display form. This uses a train stop style user interface to show a progression of a status field from New to Completed. It provides the user with visibility into the status of their request providing a better experience for them.

### Home Screen

![Status Indicator Home Screen](./assets/powerapp-statusindicator.jpg)

### Display Screen

![Status Indicator Display Screen](./assets/powerapp-statusindicator2.jpg)

## Applies to

* [Microsoft Power Apps](https://docs.microsoft.com/powerapps/)

## Compatibility

![Power Apps Source File Pack and Unpack Utility 0.20](https://img.shields.io/badge/Packing%20Tool-0.20-green.svg)
![Premium License](https://img.shields.io/badge/Premium%20License-Not%20Required-green.svg "Premium Power Apps license not required")
![Experimental Features](https://img.shields.io/badge/Experimental%20Features-No-green.svg "Does not rely on experimental features")
![On-Premises Connectors](https://img.shields.io/badge/On--Premises%20Connectors-No-green.svg "Does not use on-premise connectors")
![Custom Connectors](https://img.shields.io/badge/Custom%20Connectors-Not%20Required-green.svg "Does not use custom connectors")

## Authors

Solution|Author(s)
--------|---------
Status-Indicator-PowerApp | [Derek Cash-Peterson](https://github.com/dcashpeterson) ([@spdcp](https://twitter.com/spdcp))

## Version history

Version|Date|Comments
-------|----|--------
1.0|February 24, 2021|Initial release

## Features

This sample demonstrates the following concepts:

* Showing a status indicator in a display form
* Uses a "train stop" style user interface to show a progression of a status


## Data Sources

This app uses SharePoint as a data source and requires a single issues list created from the SharePoint Lists **Issues Template**.

### Create New SharePoint data connection

1. In the **data** tab select **Add data** and type **SharePoint** in the search bar.  
![SharePoint data source](./assets/sp-data-source1.jpg)
2. Enter the url of the list where the **Issue tracker** list was created.  
![SharePoint data source enter list](./assets/sp-data-source2.jpg)
3. Select **Issue tracker** from the listing of lists in the site and hit **Connect**.  
![SharePoint data source enter list](./assets/sp-data-source3.jpg)

## Minimal Path to Awesome

* [Download](https://github.com/pnp/powerapps-samples/blob/main/samples/status-indicator/solution/Status-Indicator.msapp) the `.msapp` from the `solution` folder
* Use the `.msapp` file using **File** > **Open** > **Browse** within Power Apps Studio.
* Select the **Data** tab
* Delete **Issue tracker** from the list of data sources in the app
* Create a new SharePoint data source linked to the **Issue tracker** list in your environment
* Save and Publish

## Using the Source Code

  You can also use the [Power Apps Source Code tool](https://github.com/microsoft/PowerApps-Language-Tooling) to the code using these steps:

* Clone the repository to a local drive
* Pack the source files back into `.msapp` file:
  * [Power Apps Tooling Usage](https://github.com/microsoft/PowerApps-Language-Tooling)
* Use the `.msapp` file using **File** > **Open** > **Browse** in Power Apps Studio.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## Support

While we don't support samples, if you encounter any issues while using this sample, you can [create a new issue](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=status-indicator&authors=@dcashpeterson&title=status-indicator%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=status-indicator&authors=@dcashpeterson&title=status-indicator%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=status-indicator&authors=@dcashpeterson&title=status-indicator%20-%20).

## For more information

- [Overview of creating apps in Power Apps](https://docs.microsoft.com/powerapps/maker/)
- [Power Apps canvas apps documentation](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/)


<img src="https://telemetry.sharepointpnp.com/powerapps-samples/samples/status-indicator" />