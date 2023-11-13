# Holiday Advent Calendar - together with Keith Atherton

## Summary

This PowerApps example shows how to use a Gallery, PowerFX and a FAQ table to get a 24-day advent calendar with tips & tricks, accompanied by Copilot.

## Applies to

* PowerFX
* Gallery
* Variables
* Media
* Conditions

## Compatibility

![Power Apps Source File Pack and Unpack Utility 0.20](https://img.shields.io/badge/PSAopa-0.20-green.svg)

## Solution

Solution|Author(s)
--------|Keith Atherton & Nathalie Leenders

Holiday Advent Calendar | [Nathalie Leenders](https://github.com/Nathalie-Leenders) ([@NathLeenders](https://twitter.com/NathLeenders))
| [Keith Atherton](https://github.com/KeithAtherton) ([@MrKeithAtherton]([https://twitter.com/NathLeenders](https://twitter.com/MrKeithAtherton)))

Contributed content by:

Cat Schneider
Lindsay Shelton
Craig White

## Version history

Version|Date|Comments
-------|----|--------
1.2|November 13th, 2023|Initial release

## Prerequisites

No prerequisites needed for this app.

## Minimal Path to Awesome

* [Download](./solution/solution.zip) the `.zip` from the `solution` folder
* Within **Power Apps Studio**, import the solution `.zip` file using **Solutions** > **Import Solution** and select the `.zip` file you just packed.

## Using the Source Code

You can also use the [Power Apps CLI](https://docs.microsoft.com/powerapps/developer/data-platform/powerapps-cli) to pack the source code by following these steps::

* Clone the repository to a local drive
* Pack the source files back into a solution `.zip` file:

  ```bash
  pac solution pack --zipfile pathtodestinationfile --folder pathtosourcefolder --processCanvasApps
  ```

  Making sure to replace `pathtosourcefolder` to point to the path to this sample's `sourcecode` folder, and `pathtodestinationfile` to point to the path of this solution's `.zip` file (located under the `solution` folder)
* Within **Power Apps Studio**, import the solution `.zip` file using **Solutions** > **Import Solution** and select the `.zip` file you just packed.

## Features

This sample illustrates the following Power Fx concepts:

* If Statements
* Set for variables
* Switch Statements
* Navigate

## Functions

### [Color]

Get colors for the fill Property, using RGBA codes, Color. or ColorFade.

### [If]

If it matches your condition, followup with navigation or datesetting.


#### Syntax

```Gallery
If(gblIsOpenWindowAllowed,
    // Navigate to open window screen.
    Set(gblMessage, $"Happy {gblDayText} of December!");
    // NOTE: Commented-out, no longer required, kept for reference.
    //Navigate('Open Window Screen', ScreenTransition.Fade);
    Navigate(
        Switch(gblDay,
            1, 'Day 01 Screen -x blog series',
Continued code
```

Parameter | Description | Required | Type
---|---|---|--
Gallery |When the item has been clicked| Yes |Gallerycontrol Onselect

#### Output

Switch to match the number of the gallery to the day, and navigate to the corresponding day.


## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## Help

> Note: don't worry about this section, we'll update the links.

We do not support samples, but we this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

If you encounter any issues while using this sample, [create a new issue](https://github.com/pnp/powerfx-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=kpi-usecase&authors=@Nathalie-Leenders&title=kpi-usecase%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/powerfx-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=kpi-usecase&authors=@Nathalie-Leenders&title=kpi-usecase%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerfx-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=kpi-usecase&authors=@Nathalie-Leenders&title=kpi-usecase%20-%20).

<img src="https://telemetry.sharepointpnp.com/powerapps-samples/samples/readme-template" />
