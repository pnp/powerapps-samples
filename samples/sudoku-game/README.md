# Sudoku Power App Game

## Summary

Sudoku App is a Japanese puzzle game made for Power Apps.

![Preview](./assets/SudokuAppIntro.gif)  

## Features

In this app, various functions of Power Apps are used and the methods of making a puzzle game are presented. The method of calling and validating data by an Independent Publisher Connector is also included in this app.

## Applies to

* [Microsoft Power Apps](https://docs.microsoft.com/powerapps/)

## Compatibility

![Power Apps Source File Pack and Unpack Utility 0.20](https://img.shields.io/badge/Packing%20Tool-0.20-green.svg)
![Premium License](https://img.shields.io/badge/Premium%20License-Required-green.svg "Premium Power Apps license required")
![Custom Connectors](https://img.shields.io/badge/Custom%20Connectors-Required-green.svg "Use custom connectors")
![Experimental Features](https://img.shields.io/badge/Experimental%20Features-Yes-green.svg "Rely on experimental features")
![On-Premises Connectors](https://img.shields.io/badge/On--Premises%20Connectors-No-green.svg "Does not use on-premise connectors")

## Authors

Solution|Author(s)
--------|---------
Sudoku App | [Arash Aghajani](https://github.com/ArashAghajani/) ([@AghajaniArash](https://www.twitter.com/aghajaniarash) )

## Version history

Version|Date|Comments
-------|----|--------
1.0|June 15, 2023|Initial release

## Prerequisites

You must have a Power Apps Premium license for the environment you want to import and run the Sudoku App to. Because it uses Shadify's free connector service to get sudoku grid data as well as result validation, So to use the app you need to have a Premium Power Apps license.


### Using the sample

No configuration is needed to use this sample. The only connector is the Shadify connector which is used to get Sudoku grid data and validate the result.


## Minimal Path to Awesome

* [Download](./solution/SudokuApp.msapp) the `.msapp` from the `solution` folder
* Use the `.msapp` file using **File** > **Open** > **Browse** within Power Apps Studio.
* Save and Publish

## Using the Source Code

You can also use the [Power Apps CLI](https://docs.microsoft.com/powerapps/developer/data-platform/powerapps-cli) to pack the source code by following these steps::

* Clone the repository to a local drive
* Pack the source files back into `.msapp` file:
  ```bash
  pac canvas pack --sources pathtosourcefolder --msapp pathtomsapp
  ```
  Making sure to replace `pathtosourcefolder` to point to the path to this sample's `sourcecode` folder, and `pathtomsapp` to point to the path of this solution's `.msapp` file (located under the `solution` folder)
* Use the `.msapp` file using **File** > **Open** > **Browse** in Power Apps Studio.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**


## Support

While we don't support samples, if you encounter any issues while using this sample, you can [create a new issue](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=calendar-component&authors=@aprildunnam&title=calendar-component%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=calendar-component&authors=@aprildunnam&title=calendar-component%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=calendar-component&authors=@aprildunnam&title=calendar-component%20-%20).

## For more information


- [Overview of creating apps in Power Apps](https://docs.microsoft.com/powerapps/maker/)
- [Power Apps canvas apps documentation](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/)


<img src="https://telemetry.sharepointpnp.com/powerapps-samples/samples/calendar-component" />