# SiigoApi.JournalEntryProductModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Represents the unique Id of item, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | [optional] 
**code** | **String** | Represents the unique code of the item. This value can be an alphanumeric  code that will represent the code id of the item.  For example,&#39;item-1&#39; or &#39;toy-007&#39;. | [optional] 
**name** | **String** | Represents the name of product or service. | [optional] 
**warehouse** | [**JournalEntryWarehouseModel**](JournalEntryWarehouseModel.md) |  | [optional] 
**quantity** | **Number** | Represents product quantity.  For example, &#39;2&#39; quantities of the &#39;item-01&#39;. | [optional] 


