
# Leave Request Application

## Summary

This application has been designed to facilitate the process of requesting leave by enabling users to submit their leave requests to their respective managers. It streamlines the approval or rejection workflow, ensuring a seamless and efficient process for managing leave applications.

Submit leave requests for manager approval.
Track the status of requests as they await approval or rejection.
Option to delete submitted leave requests.

Flow of the application:

![image](./assets/image%20(5).png)
![image](./assets/image%20(4).png)
![image](./assets/image%20(3).png)


## Applies to

* [Microsoft Power Apps](https://docs.microsoft.com/powerapps/)
* [Microsoft Power Automate](https://learn.microsoft.com/power-automate/)
* [Microsoft SharePoint]( https://learn.microsoft.com/sharepoint/dev/)

## Compatibility

![Power Apps Source File Pack and Unpack Utility 0.20](https://img.shields.io/badge/Packing%20Tool-0.20-green.svg)
![Premium License](https://img.shields.io/badge/Premium%20License-Not%20Required-green.svg "Premium Power Apps license not required")
![Experimental Features](https://img.shields.io/badge/Experimental%20Features-No-green.svg "Does not rely on experimental features")
![On-Premises Connectors](https://img.shields.io/badge/On--Premises%20Connectors-No-green.svg "Does not use on-premise connectors")
![Custom Connectors](https://img.shields.io/badge/Custom%20Connectors-Not%20Required-green.svg "Does not use custom connectors")

## Authors

 [Muhammad Ahmad](https://github.com/Ahmadriazz)

## Version history

Version|Date|Comments
-------|----|--------
1.0|November 28, 2023|Initial release


## Data Sources

SharePoint List Used.


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


## For more information

* [Overview of creating apps in Power Apps](https://docs.microsoft.com/powerapps/maker/)
* [Power Apps canvas apps documentation](https://docs.microsoft.com/powerapps/maker/canvas-apps/)

