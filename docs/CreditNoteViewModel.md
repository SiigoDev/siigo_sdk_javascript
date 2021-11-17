# SiigoApi.CreditNoteViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Represents the unique Id of credit note, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | [optional] 
**document** | [**DocumentModel**](DocumentModel.md) |  | [optional] 
**number** | **Number** | Represents the sequential number of the document,   this number is required depending of document type. | [optional] 
**name** | **String** | Contains information about document type,   document type Id, and the sequential number of the document.  For example &#39;NC-2-22&#39; indicates that its document type is a &#39;Credit note&#39;,  its document type id is &#39;2&#39; and its sequential number is &#39;22&#39;. | [optional] 
**date** | **String** | Represents the date of the document. This format must be &#39;yyyy-MM-dd&#39;.  For example, &#39;2021-10-31&#39; to indicate the date &#39;October 31st, 2021&#39;. | [optional] 
**invoice** | [**InvoiceModel**](InvoiceModel.md) |  | [optional] 
**customer** | [**InvoiceCustomerModel**](InvoiceCustomerModel.md) |  | [optional] 
**costCenter** | **Number** | Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center. | [optional] 
**currency** | [**CurrencyModel**](CurrencyModel.md) |  | [optional] 
**seller** | **Number** | Represents the Id of the seller associated with the invoice.   For example, the id &#39;629&#39; can represent a seller called &#39;Mike&#39;. | [optional] 
**retentions** | [**[RetentionsOutModel]**](RetentionsOutModel.md) | Contains a list of information about every Retention associated to the invoice. | [optional] 
**advancePayment** | **Number** | Represent the Advance Payment. For example, an advance payment of 33.3 dollars  for a product of 40 dollars. | [optional] 
**total** | **Number** | Represent the total value of document. For example, 25.5 dollars. | [optional] 
**observations** | **String** | Represent additional comments in document. | [optional] 
**items** | [**[ItemsModel]**](ItemsModel.md) | Contains a list with items associated to invoice. | [optional] 
**payments** | [**[PaymentsModel]**](PaymentsModel.md) | Contains a list with payments types associated to invoice. | [optional] 
**stamp** | [**StampViewModel**](StampViewModel.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 


