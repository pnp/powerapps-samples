---
page_type: sample
languages:
- powerapps-comma
products:
- power-apps
- powerapps
- canvas
name: Fluent UI for Teams theme
description: "Implementing a custom theme to apply the style of the Microsoft Teams Fluent UI controls with extensive modification of the theme.json file and providing components that fit into Teams' look & feel"
urlFragment: powerapps-fluentui-teams-theme
ms.date: 06/20/2021
author: LuiseFreese
ms.author: pnp
level: advanced
ms.prod: power-apps
---


# FluentUI for Teams theme

Building Power Apps canvas apps for Microsoft Teams can include some tedious tasks, as there is no theme included in the Power Apps studio and even Microsoft's new [Creator kit](https://docs.microsoft.com/power-platform/guidance/creator-kit/overview) doesn't offer Microsoft Teams specific Fluent UI components. If you are looking into a non-Teams-specific Fluent UI theme vor canvas apps, check out [this sample](https://github.com/pnp/powerapps-samples/tree/main/samples/fluentui-custom-theme) by [Fabio Franzini](twitter.com/franzinifabio) (Apvee) | @franzinifabio.

This sample

* provides you with a reference Power Apps canvas app that includes a customized `themes.json` to manipulate the default style of controls to blend into the look & feel of Microsoft Teams. It includes

  * [Button](#button)
  * [Checkbox](#checkbox)
  * [Dropdown](#dropdown)
  * [Combobox](#combobox)
  * [Datatable](#datatable)
  * [Datepicker](#datepicker)
  * [Icons](#icons)
  * [Listbox](#listbox)
  * [Radiobutton](#radiobutton)
  * [Rating](#rating)
  * [Slider](#slider)
  * [Textlabel](#textlabel)
  * [Textinput](#textinput)
  * [Toggle](#toggle)
* exemplifies [canvas components](#components) for
  * [Carousel](#carousel-component)
  * [Coachmark](#coachmark-component)
  * [Combobox](#combobox-component)
  * [Datepicker & Calendar](#datepicker-component)
  * [Donut Chart](#donut-chart-component)
  * [Dropdown](#dropdown-component)
  * [Likert scale](#likert-component)
  * [Sidebar navigation](#sidebar-navigation-component)
  * [TextInput](#textinput-component)
  * [Toast](#toast-component)
* gives you examples on how [screens](#screens) could look like
  * [List](#list-screen)
  * [Empty list](#empty-list-screen)
  * [Chart](#chart-screen)
* reflects all styles in [3 modes](#microsoft-teams-themes): default, dark, and high-contrast.

## Demo

![Fluent UI for Teams walkthrough](assets/FluentUiforTeams.gif)

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
Fluent UI for Teams theme | [Luise Freese](https://github.com/luisefreese) ([@LuiseFreese](https://www.twitter.com/LuiseFreese) )

## Version history

Version|Date|Comments
-------|----|--------
1.0|June 20, 2021|Initial release

## Context

The app is context aware in terms of language (example in navigation, works in English and German) and Teams theme. Users can override the context by selecting a different language and theme in the app. (This also serves development and debugging purposes.)

## Microsoft Teams themes

Teams' Desktop and Web client support default, dark and high contrast theme, the mobile client supports default and dark theme. The app reacts dynamically on a theme change as all colors as `gblAppColors` and the styles as `gblAppStyles` for or all controls are stored in the App's **OnStart** property.

## Controls

This is an overview of all controls how they are now defined in the `themes.json` file. This work is based on the [Teams UI toolkit](https://docs.microsoft.com/microsoftteams/platform/concepts/design/design-teams-app-ui-templates), which is based on [Fluent UI](https://fluentsite.z22.web.core.windows.net/0.63.0) and also guides developers to more likely pass the App source validation of their Microsoft Teams applications.

All controls respect the font and color schema regarding the states **rest**, **hover**, **pressed**, and **disabled**.

> However, styling these controls even in the `themes.json` has its limits, for example you can't manipulate the background color of the calendar in the DatePicker control. This is why I also created canvas components and included these in the sample. You can find information on what ist not stylable neither out-of-the-box in Power Apps Studio nor with manipulation of `themes.json` in each section below.

I tried to get as close as possible to achieve that *Teams native* look, still not every desirable modification is supported.

### Button

![button](assets/button.gif)

A drop shadow is not stylable for the button control, however you can achieve it with an **HTML control** in inject CSS inline:

``` CSS

"<div style='margin:10px;width:"&btn_1.Width&"px;height:"&btn_1.Height &"px;background-color:#;box-shadow:3px 3px 6px 3px  rgba(0,0,0,0.14); border-radius:4px'></div>"

```

### Checkbox

![Checkbox](assets/Checkbox.gif)

### Dropdown

![Dropdown](assets/Dropdown.gif)

The Dropdown should have a primary-colored line at the bottom, this is not achievable out-of-the box, I created a [Dropdown component](#dropdown-component) for this design requirement.

### Combobox

![Combobox](assets/Combobox.gif)

The Combobox should have a primary-colored line at the bottom, this is not achievable out-of-the box, I created a [Combobox component](#combobox-component) for this design requirement.

### Datatable

![Datatable](assets/Datatable.gif)

### Datepicker

![Datepicker](assets/Datepicker.gif)

The DatePicker is a bit stylable, however the background color of the calendar can't be changed, which doesn't look good in dark mode or high contrast mode. I built a [Datepicker component](#datepicker-component) to tackle this.

### Icons

![Icons](assets/Icons.gif)

### Listbox

![Listbox](assets/Listbox.gif)

### Radiobutton

![Radiobutton](assets/Radiobutton.gif)

### Rating

![Rating](assets/Rating.gif)

### Slider

![Slider](assets/Slider.gif)

The slider looks as it should, still I created some components that make use of it: Check out [Likert component](#likert-component) and [Donut chart component](#donut-chart-component)

### Textlabel

![Textlabel](assets/Textlabel.gif)

### TextInput

![Textinput](assets/Textinput.gif)

The Textinput should have a primarycolored line at the bottom, this is not achievable out-of-the box, I created a [Textinput component](#Textinput-component) for this design requirement.

### Toggle

![Toggle](assets/Toggle.gif)

## Components

The provided components refer to the custom theme with custom properties.

### Carousel component

![Carousel component](assets/Carousel-component.gif)

### Coachmark component

![Coachmark component](assets/Coachmark-component.gif)

### Combobox component

![Combobox component](assets/Combobox-component.gif)

### Donut chart component

![Donut chart component](assets/Donut-chart-component.gif)

### Datepicker component

![Datepicker component](assets/Datepicker-component.gif)

### Dropdown component

![Dropdown component](assets/Dropdown-component.gif)

### Likert component

![Likert component](assets/Likert-component.gif)

### Textinput component

![Textinput component](assets/Textinput-component.gif)

### Toast component

![Toast component](assets/Toast-component.gif)

### Sidebar navigation component

![Sidebar navigation component](assets/Sidebar-navigation-component.gif)

## Screens

### List screen

![List screen](assets/ListScreen.png)

#### Empty list screen

![List screen empty](assets/ListScreenEmpty.png)

### Chart screen

I also manipulated the primary palette which determines which colors are shown in charts.

![Chart screen](assets/ChartScreen.png)

## Minimal Path to Awesome

* [Download](https://github.com/pnp/powerapps-samples/raw/main/samples/fluentui-for-teams-theme/solution/fluentui-for-teams-theme.msapp) the `.msapp` from the [`solution`](https://github.com/pnp/powerapps-samples/tree/main/samples/fluentui-for-teams-theme/solution) folder
* Within **Power Apps Studio**, use the `.msapp` file using **File** > **Open** > **Browse** and select the `.msapp` file you just downloaded.
* Save and Publish

## Using the Source Code

You can also use the [Power Apps CLI](https://docs.microsoft.com/powerapps/developer/data-platform/powerapps-cli) to pack the source code by following these steps::

* Clone the repository to a local drive
* Pack the source files back into `.msapp` file

``` bash
pac canvas pack --sources pathtosourcefolder --msapp pathtomsapp
```

* Make sure to replace `pathtosourcefolder` to point to the path to this sample's `sourcecode` folder, and `pathtomsapp` to point to the path of this solution's `.msapp` file (located under the `solution` folder)
* Within **Power Apps Studio**, use the `.msapp` file using **File** > **Open** > **Browse** and select the `.msapp` file you just packed.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## Support

While we don't support samples, if you encounter any issues while using this sample, you can [create a new issue](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=fluentui-custom-theme&authors=@fabiofranzini&title=fluentui-custom-theme%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=fluentui-custom-theme&authors=@fabiofranzini&title=fluentui-custom-theme%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=fluentui-custom-theme&authors=@fabiofranzini&title=fluentui-custom-theme%20-%20).

## For more information

- [Overview of creating apps in Power Apps](https://docs.microsoft.com/powerapps/maker/)
- [Power Apps canvas apps documentation](https://docs.microsoft.com//powerapps/maker/canvas-apps/)
