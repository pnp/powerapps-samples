# The SVG World - tons of examples for the usage of SVGs in Canvas Apps

## Summary

This app showcases several different possibilities to use custom SVGs in your Canvas apps including:
1. maps
2. charts
3. animation
4. all of the above together

As a dataset the CIA world factbook data was used and integrated into the app

![All the different screens for one country](./assets/DifferentScreens.gif)

![Switching countries](./assets/SwitchCountries.gif)

![Population view for germany](./assets/SomeSVGs.png)


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
The SVG World - SVG examples | [Robin Rosengrün](https://github.com/PowerRobin) ([@power_r2](https://twitter.com/power_r2))

## Version history

Version|Date|Comments
-------|----|--------
1.0|August 7th, 2022|Initial release

## Features

This application gives you a general idea how SVGs can be used in Power Apps and provides the source code for some advanced techniques:
1. Display maps through SVG path elements, with the use of the CONCAT() function
2. Create different kind of charts
3. basic and complex concepts of animating SVGs to highlight/move/zoom

## Prerequisites

You and everyone viewing the app needs to use the `.` as decimal separator (`1.0` not `1,0`) otherwise some SVGs won't work, because SVG-code requires this format!
Just change your language to English in your browser settings!

## Data Sources

The excel file is included in the msapp-file as a static datasource, but is also included her for [Download](./assets/TheSvgWorldDataset.xlsx)

## Minimal Path to Awesome

* [Download](./solution/TheSvgWorld.msapp) the `.msapp` from the `solution` folder
* Within **Power Apps Studio**, use the `.msapp` file using **File** > **Open** > **Browse** and select the `.msapp` file you just downloaded.
* Select the **Data** tab

## Using the Source Code

You can also use the [Power Apps CLI](https://docs.microsoft.com/powerapps/developer/data-platform/powerapps-cli) to pack the source code by following these steps::

* Clone the repository to a local drive
* Pack the source files back into `.msapp` file:
  ```bash
  pac canvas pack --sources pathtosourcefolder --msapp pathtomsapp
  ```
  Making sure to replace `pathtosourcefolder` to point to the path to this sample's `sourcecode` folder, and `pathtomsapp` to point to the path of this solution's `.msapp` file (located under the `solution` folder)
* Within **Power Apps Studio**, use the `.msapp` file using **File** > **Open** > **Browse** and select the `.msapp` file you just packed.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## Help

We do not support samples, but we this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

If you encounter any issues while using this sample, you can [create a new issue](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20).

## For more information

- [Overview of creating apps in Power Apps](https://docs.microsoft.com/powerapps/maker/)
- [Power Apps canvas apps documentation](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/)


<img src="https://telemetry.sharepointpnp.com/powerapps-samples/samples/readme-template" />


