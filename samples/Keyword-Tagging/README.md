# Title of the sample

Keyword Tagger


## Summary

This app sample allows users to easily and intuitively apply existing or newly created “Tags” during or after the content creation process. It uses only out of the box functionality to provide a rich user experience.

![Overview of Sample](./Assets/annimation.gif)

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
KeywordTagging | [Matt Schuessler](https://github.com/mschuess) ([@mattschues](https://twitter.com/mattschues)), Canviz

## Version history

Version|Date|Comments
-------|----|--------
1.0|June 17, 2022|Initial release

## Features

This sample illustrates the following concepts:

* Touch to Add/Remove Tags from New Content
* Touch to Add/Remove Tags while Editing Content
* Ability to provide Suggested Tags based on Content Category
* Prevention of Duplicate Tags
* Ability to add new tags to Master Tag List
* Modern UX

## Prerequisites

This sample requires the following items:
* A Master Tag Table or List to store all tags
* A Tag Field or Column used to hold selected tags in the primary data source

## Data Sources

Two tables or lists of any type, SharePoint, Dataverse, or SQL can be used.

### TagList

This SharePoint list contains the master list of all tags. Set the list up as follows:

|Type|Internal Name|Required|
|---|---|:---:|
|Single line of text|Title|Yes|
|Single line of text|Category|Yes|

![Tag List](./Assets/tag-list.png)

### Notes List

This SharePoint list contains the output of the sample form. Set the list up as follows:

|Type|Internal Name|Required|
|---|---|:---:|
|Single line of text|Title|Yes|
|Multiple lines of text line of text|Note|Yes|
|Multiple lines of text line of text|Tag|Yes|
|Single line of text|Category|Yes|

![Notes List](./Assets/notes-list.png)

## Minimal Path to Awesome

* [Download](./solution/KeywordTagging.msapp) the `.msapp` from the `solution` folder
* Within **Power Apps Studio**, use the `.msapp` file using **File** > **Open** > **Browse** and select the `.msapp` file you just downloaded.
* Select the **Data** tab
* Connect the app with the two SharePoint Lists created above.

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

---