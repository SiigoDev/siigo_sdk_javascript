# SiigoApi.CustomerCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personType** | **String** | Represents the person type, this type can be a &#39;Person&#39; or &#39;Company&#39;. | [optional] 
**idType** | **String** | Represents the code of type id. | [optional] 
**identification** | **String** | Represents the identification number of customer.  For example, the identifitication number &#39;13832081&#39;. | [optional] 
**checkDigit** | **String** | Represents the check digit, this digit will be calculated automatically. | [optional] 
**name** | **[String]** | Contains a list of strings with information about customer  this information will be commercial_name (or first name and last name, depnding of customer)  branch_office, active and vat_responsible | [optional] 
**commercialName** | **String** | Represents the commercial name of customer organization.  For example, &#39;Siigo&#39;. | [optional] 
**branchOffice** | **Number** | Represents the branch office of customer, this value by default will be 0. | [optional] 
**active** | **Boolean** |  | [optional] 
**vatResponsible** | **Boolean** |  | [optional] 
**fiscalResponsibilities** | [**[FiscalResponsibilitiesCommand]**](FiscalResponsibilitiesCommand.md) | Represents a list of tax responsibilities of a person, by default will be &#39;R-99-PN&#39;. | [optional] 
**address** | [**AddressCommand**](AddressCommand.md) |  | [optional] 
**phones** | [**[PhoneCommand]**](PhoneCommand.md) | Represents the phones of the customer. | [optional] 
**contacts** | [**[ContactCommand]**](ContactCommand.md) | Represents the associated contantacts of customer. | [optional] 
**comments** | **String** | Represents additional comments or observations. | [optional] 
**relatedUsers** | [**RelatedUsersCommand**](RelatedUsersCommand.md) |  | [optional] 
**customFields** | [**[CustomFieldsCommand]**](CustomFieldsCommand.md) | Allows you to send the purchase order and delivery order fields. | [optional] 
**type** | **String** |  | [optional] 


