# If Value/Text Color Conditions - KPI Usecase


## Summary

Short summary on functionality and used technologies.

This PowerFX example shows how to leverage an IF statement, against Text or Values on the Fill property of a text label.
This can of course be used for conditional fonts, font weight, combining with dynamic variables and many more.

![KPI Values in a condition](assets/screenshotkpivalues.png)

* [If](#If)
* [Value](#Value)
* [Text](#Text)
* [Color](#Color)

## Applies to

* [Microsoft Power Fx](https://docs.microsoft.com/en-us/power-platform/power-fx/overview)

## Compatibility

![Power Apps Source File Pack and Unpack Utility 0.20](https://img.shields.io/badge/PSAopa-0.20-green.svg)

## Solution

Solution|Author(s)
--------|---------
Ifcolorconditions-function | [Author Name](Nathalie-:eenders) ([@NathLeenders](https://twitter.com/yourtwitterhandle))

## Version history

Version|Date|Comments
-------|----|--------
1.0|March 30, 2023|Initial release


## Prerequisites

No pre requisities needed for this app.

## Minimal Path to Awesome

* [Download](solution\KPIUsecases.msapp) the `.msapp` from the `solution` folder
* Use the `.msapp` file using **File** > **Open** > **Browse** within Power Apps Studio.


## Using the Source Code

  You can also use the [Power Apps Source Code tool](https://github.com/microsoft/PowerApps-Language-Tooling) to the code using these steps:
* Clone the repository to a local drive
* Pack the source files back into `.msapp` file:
  * [Power Apps Tooling Usage](https://github.com/microsoft/PowerApps-Language-Tooling)
* Use the `.msapp` file using **File** > **Open** > **Browse** in Power Apps Studio.

## Features

Description of the sample with possible additional details than in short summary.
This sample illustrates the following Power Fx concepts:

* If Statement with 2, and 3 conditions
* Value functions
* Text function
* Using "" for string/text wrapping



## Functions


### [Color]

Get colors for the fill Property, without using RGBA codes.

### [If]

If it matches your condition, followup with true or false actions/further functions.

### [Text]

Recognise the parameter as text (to use for choice columns, or converting other formats to text)

### [Value]

Recognise the parameter as values (to use for currency, numbers, or converting other formats to values)

#### Syntax


```excel
If(Value('KPI Value 1 Text 1'.Text)<20,Color.Green,Color.Red)
```


Parameter | Description | Required | Type
---|---|---|--
KPI Value 1 Text 1 |Text label holding the number/value| Yes |Value

#### Output

If the value is less than 20, make green, otherwise make red.

#### Syntax


```excel
If(Value('KPI Value Text 2'.Text)<20,Color.Green,If(Value('KPI Value Text 2'.Text) >=20  And Value('KPI Value Text 2'.Text) <=40, Color.Orange,Color.Red))
```

Parameter | Description | Required | Type
---|---|---|--
KPI Value Text 2'.Text |Text label holding the value| Yes | Value


#### Output

If the value is below 20, make green. Between 20 and 39, make orange. 40 equal and larger make red.


#### Syntax


```excel
If(Text('KPI Text.Text) =Resolved within same day,Color.Green,Color.Red)
```


Parameter | Description | Required | Type
---|---|---|--
KPI Text.Text |Text label holding the text| Yes | Text



#### Output

This function enables colors based on whether it's Resolved within same day. It's hardcoded to this text, but you can use variables.


## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## Help

> Note: don't worry about this section, we'll update the links.

We do not support samples, but we this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

If you encounter any issues while using this sample, [create a new issue](https://github.com/pnp/powerfx-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=YOUR-SOLUTION-NAME&authors=@YOURGITHUBUSERNAME&title=YOUR-SOLUTION-NAME%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/powerfx-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=YOUR-SOLUTION-NAME&authors=@YOURGITHUBUSERNAME&title=YOUR-SOLUTION-NAME%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerfx-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=YOUR-SOLUTION-NAME&authors=@YOURGITHUBUSERNAME&title=YOUR-SOLUTION-NAME%20-%20).

<img src="https://telemetry.sharepointpnp.com/powerfx-samples/samples/readme-template" />
