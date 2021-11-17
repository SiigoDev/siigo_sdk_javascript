# SiigoApi.CreateJournalEntryCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**DocumentCommand**](DocumentCommand.md) |  | [optional] 
**number** | **Number** | Represents the sequential number of the document,   this number is required depending of document type. | [optional] 
**date** | **String** | Represents the date of the document. This format must be &#39;yyyy-MM-dd&#39;.  For example, &#39;2021-10-10&#39; to indicate the date &#39;October 10th, 2021&#39;. | [optional] 
**currency** | [**CurrencyCommand**](CurrencyCommand.md) |  | [optional] 
**items** | [**[JournalEntryItem]**](JournalEntryItem.md) | Contains a list of items associated with the journal. | [optional] 
**observations** | **String** | Represent additional comments in document. | [optional] 


