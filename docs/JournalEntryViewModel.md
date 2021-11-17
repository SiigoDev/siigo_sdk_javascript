# SiigoApi.JournalEntryViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Represents the unique Id of credit note, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | [optional] 
**document** | [**JournalEntryDocumentModel**](JournalEntryDocumentModel.md) |  | [optional] 
**number** | **Number** | Represents the sequential number of the document,   this number is required depending of document type. | [optional] 
**name** | **String** | Contains information about document type,   document type Id, and the sequential number of the document.  For example, &#39;CC-10-20&#39; indicates that its document type is a &#39;Journal&#39;,  its document type id is &#39;10&#39; and its sequential number is &#39;20&#39;. | [optional] 
**date** | **String** | Represents the date of the document. This format must be &#39;yyyy-MM-dd&#39;.  For example, &#39;2021-10-10&#39; to indicate the date &#39;October 10th, 2021&#39;. | [optional] 
**currency** | [**CurrencyModel**](CurrencyModel.md) |  | [optional] 
**items** | [**[JournalEntryItemModel]**](JournalEntryItemModel.md) | Contains a list of items associated with the journal. | [optional] 
**observations** | **String** | Represent additional comments in document. | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 


