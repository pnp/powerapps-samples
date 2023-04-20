# install the PnP powershell
#Install-Module -Name PnP.PowerShell

$DestSiteUrl = Read-Host -Prompt 'Please enter the SharePoint site URL' 		
$TemplatePath = Read-Host -Prompt 'Please provide full path to Lists XML file' 	#Example: C:\Microsoft\PowerApps\Incidents POC\Assets\Import Lists\template.xml


#1 - Connect to the destination SharePoint site 
Connect-PnPOnline -Url $DestSiteUrl -Interactive 

#2 - Import the items from the template file
Invoke-PnPSiteTemplate -Path $TemplatePath






