# SiigoApi.CreateCreditNoteCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**DocumentCommand**](DocumentCommand.md) |  | [optional] 
**number** | **Number** | Represents the sequential number of the document,   this number is required depending of document type. | [optional] 
**name** | **String** | Represents information about document type,   document type Id, and the sequential number of the document.  For example &#39;NC-2-22&#39; indicates that its document type is a &#39;Credit note&#39;,  its document type id is &#39;2&#39; and its sequential number is &#39;22&#39;. | [optional] 
**date** | **String** | Represents the date of the document. This format must be &#39;yyyy-MM-dd&#39;  for example, &#39;2021-10-31&#39; to indicate the date &#39;October 31st, 2021&#39;. | [optional] 
**invoice** | **String** | Represents the GUID of invoice to which the credit note was applied. | [optional] 
**reason** | [**DianReason**](DianReason.md) |  | [optional] 
**seller** | **Number** | Represents the Id of the seller associated with the invoice,   for example, the id &#39;629&#39; can represent a seller called &#39;Micke&#39;. | [optional] 
**costCenter** | **Number** | Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center. | [optional] 
**currency** | [**CurrencyCommand**](CurrencyCommand.md) |  | [optional] 
**retentions** | [**[RetentionsCommand]**](RetentionsCommand.md) | Contains a list of information about every Retention associated to the invoice. | [optional] 
**advancePayment** | **Number** | Represent the Advance Payment. For example, an advance payment of 33.3 dollars  for a product of 40 dollars. | [optional] 
**observations** | **String** | Represent additional comments in document. | [optional] 
**items** | [**[ItemsCommand]**](ItemsCommand.md) | Contains a list with items associated to invoice. | [optional] 
**payments** | [**[PaymentsCommand]**](PaymentsCommand.md) | Contains a list with payments types associated to invoice. | [optional] 


