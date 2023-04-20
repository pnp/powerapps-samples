# Incident Management Teams App

## Summary

This is a PowerApp that is deeply integrated with Microsoft Teams. 

It is context aware so it knows if it's running as a personal app or as a tab in a channel. If it's running in a channel we have the possibility of filtering incidents by default based on the team/channel IDs and showing only relevant information for the users.

By using Power Automate flows, when a new incident is created, one adaptive card is sent to a channel with all relevant details of the incident, based on it's category. Members of the channel can than have a contextual conversation about that specific incident and assign an owner to it.

It's also possible to share incidents with someone or on other teams/channels, making it even easier to collaborate and resolve incidents.

The app is responsive so it looks great on mobile, tablets and desktop.


## Screeshots

[Home page](assets/IncidentsAppHome.png)

[View Incident](assets/IncidentsAppIncident.png)

[Share Incident](assets/IncidentsAppIncidentShare.png)

[Adaptive Card Incident](assets/IncidentsAdaptiveCardIncident.png)

[Categories page](assets/IncidentsAppCategories.png)

[Categories form](assets/IncidentsAppCategoryForm.png)


## Features

* Manage Incident Categories
	- Create Categories
	- Assign a Team Channel for each category (Used for sending notifications)
	- Assign an Owner for the Category (Used for sending approvals for deletion of incidents)

* Manage Incidents
	- Create Incidents
	- Search, Filter Incidents
	- Share Incidents with someone or in a channel
	- Assign Incidents to Me
	- Approvals for deletion of Incidents

* Responsive
* FLW can use their camera to take a picture when using mobile phone to create incidents.

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
Incident Management Teams App | [Marcus Castro](https://github.com/marcus-castro-sp) (https://www.linkedin.com/in/marcuscastrosp))

## Version history

Version|Date|Comments
-------|----|--------
1.0|April 20, 2023|Initial release

## Prerequisites



### Solution Components

The following solution components are used in this sample:

* Canvas App
	- Incidents App
* Cloud Flows 
	- Incidents App - Notify New Incident
	- Incidents App - Share Incident
	- Incidents App - Delete Incident
* Environment variable
	- varIncidentsSharePointSiteURL
	- varIncidentCategoriesListConnection
	- varIncidentsListConnection 
	- varIncidentsAppID 
	- varTenantID
* Connection reference
	- Approvals MSFTPOCIncidentsApp-08058
	- Microsoft Teams MSFTPOCIncidentsApp-48a4d
	- Office 365 Users MSFTPOCIncidentsApp-f0eb8
	- SharePoint MSFTPOCIncidentsApp-4f9a6

## Data Sources

We use 2 SharePoint lists to store data.

* Incident Categories
* Incidents

Approvals app is used for deletion of Incidents.

## Minimal Path to Awesome

* Create the required SharePoint lists.
	- You can create manually or using the PnP Template provided on the splists folder.
* [Download](./solution/MSFTPOCIncidentsApp_1_0_0_9.zip) the solution `.zip` from the `solution` folder.
* Within **https://make.powerapps.com**, import the `.zip` file via **Solutions** > **Import solution** > **Browse** and select the `.zip` file you just downloaded.
* Click next.
* Update the Connection reference to your environment.
* Update the Environment Variables to your SharePoint site, lists and tenant.
* Turn on your Power Automate Flows.
* Publish the App to Teams and get the app ID to update the varIncidentsAppID environment variable.
* Create one Team with multiple public channels, one team per incident category.
* Add the app as a tab on the team.
* Go to categories > create a category > The Team ID and Channel ID will be automatically populated by the current channel you are running the app at.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## Help

We do not support samples, but we this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

If you encounter any issues while using this sample, you can [create a new issue](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=PDF%20Reader%20-%20Creator%20Kit&authors=@angelogulisano&title=PDF%20Reader%20-%20Creator%20Kit%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=PDF%20Reader%20-%20Creator%20Kit&authors=@angelogulisano&title=PDF%20Reader%20-%20Creator%20Kit%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=PDF%20Reader%20-%20Creator%20Kit&authors=@angelogulisano&title=PDF%20Reader%20-%20Creator%20Kit%20-%20).

## For more information

* [Overview of creating apps in Power Apps](https://docs.microsoft.com/powerapps/maker/)
* [Power Apps canvas apps documentation](https://docs.microsoft.com/powerapps/maker/canvas-apps/)

<img src="https://telemetry.sharepointpnp.com/powerapps-samples/CONTRIBUTING.md" />
