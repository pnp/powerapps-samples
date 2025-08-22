### Summary
Power 365 CRM is a community solution based on Microsoft Dataverse low-code and pro-code.
In this release v1.0 you will be able to manage your entire sales process from Prosect to Quote. This will include management of opportunities during the sales process and autonomous opportunity amount calculation.

![](https://github.com/Power365initiatives/power365crm/raw/master/assets/Power365CRMSales.gif)

### Applies to

[Microsoft Power Apps](https://learn.microsoft.com/en-us/power-apps/)

[Model-Driven Power Apps](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/)

[Custom Pages](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-app-page-overview)

### Compatibility

> Don't worry about this section, we'll take care of it. Unless you really want to...

![Power Apps Source File Pack and Unpack Utility 0.20](https://img.shields.io/badge/Packing%20Tool-0.20-green.svg)
![Premium License](https://img.shields.io/badge/Premium%20License-Not%20Required-green.svg "Premium Power Apps license not required")
![Experimental Features](https://img.shields.io/badge/Experimental%20Features-No-green.svg "Does not rely on experimental features")
![On-Premises Connectors](https://img.shields.io/badge/On--Premises%20Connectors-No-green.svg "Does not use on-premise connectors")
![Custom Connectors](https://img.shields.io/badge/Custom%20Connectors-Not%20Required-green.svg "Does not use custom connectors")

### Authors

Solution|Author(s)
--------|---------
Power 365 CRM | [Nicolás Fernández](https://www.linkedin.com/in/nfernandezba/)
Power 365 CRM | [Ignacio Barrios](https://www.linkedin.com/in/ignaciobarriosantos/)
Power 365 CRM | [Wilmer Alcivar](https://www.linkedin.com/in/wilmeralcivar/) - [Github](https://github.com/walcivar)

### Version history

Version|Date|Comments
-------|----|--------
1.0|March 1, 2024|Initial release

### Data Sources

* Dataverse
  
### Data Model

Objects present in the solution:

  Type | Tables |
|-----:|-----------|
| Common | Account, Contact, Currency |
| Core | List Item, Price List, Product, Sales Unit |
| Sales | Lead, Opportunity, Opportunity Product, Quote, Quote Product, Account Plan, Action Plan, Opportunity Closure |


<details>
<summary>Development</summary>

| Rank | Name |
|-----:|-----------|
|WebResources| opportunity, quote, enums, helpers, ribbon |
|Custom APIs| CloseOpportunity, CreateQuoteFromOpp, QualifyProspect |
|Plugins| OpportunityPostOp, OpportunityProductPostOp, QUoteProductPostOp |

</details>

### Minimal path to awesome

1. Download up-to-date release
2. Install Core solution with common components first
3. Install specific product solution
4. Set the user language to English

   
https://github.com/Power365initiatives/power365crm/releases

### Features
In this release v1.0 you will be able to manage your entire sales process from Prosect to Quote. This will include management of opportunities during the sales process and autonomous opportunity amount calculation.
1. Create a Prospect
2. Qualify a Prospect
3. Automatic record creation (Account, Contact and Opportunity) when qualify a Prospect
4. Automatic Quote creation including its quote products
5. Close Opportunity as Won or Lost

### Solution Componentes

Solution|Components
--------|---------
Power365CRMCore | 6 tables, 6 web resources
Power365CRMSales | 1 Model Driven App (Sales Center), 2 Custom Pages, 3 Custom APIs, 1 Plugin assembly, 18 tables, 8 web resources

### Prerequisites
None

### User manual
For more information on how to start using this solution, please visit the [Power365CRM Wiki](https://github.com/Power365initiatives/power365crm/wiki)

### Help
Note: don't worry about this section, we'll update the links.

We do not support samples, but this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for community members to volunteer their time and help resolve issues.

If you encounter any issues while using this sample, you can [create a new issue](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20)

For questions regarding this sample, [create a new question](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20)

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20)

### Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
