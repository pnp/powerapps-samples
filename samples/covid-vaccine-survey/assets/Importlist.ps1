# install the PnP powershell
#Install-Module -Name PnP.PowerShell

$DestSiteUrl = Read-Host -Prompt 'Please enter SharePoint URL'
$ListPath = Read-Host -Prompt 'Please provide full path to Lists XML file'


#1 - Connect to the destination SharePoint site 
Connect-PnPOnline -Url $DestSiteUrl -UseWebLogin

#2 - Import the items from the template file
Invoke-PnPSiteTemplate -Path $ListPath