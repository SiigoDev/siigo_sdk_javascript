# SiigoApi.CreateVoucherCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**DocumentCommand**](DocumentCommand.md) |  | [optional] 
**number** | **Number** | Represents the sequential number of the document,   this number is required depending of document type. | [optional] 
**name** | **String** | Contains information about document type,   document type Id and the sequential number of the document.  For example, &#39;RC-2-22&#39; indicates that its document type is a &#39;voucher&#39;,  its document type id is &#39;2&#39; and its sequential number is &#39;22&#39;. | [optional] 
**date** | **String** | Represents the date of the document. This format must be &#39;yyyy-MM-dd&#39;.  For example, &#39;2021-10-31&#39; to indicate the date &#39;October 31st, 2021&#39;. | [optional] 
**type** | **String** | Represents the voucher type, this type will be &#39;DebtPayment&#39;, &#39;AdvancePayment&#39; or &#39;Detailed&#39;. | [optional] 
**customer** | [**Customer**](Customer.md) |  | [optional] 
**costCenter** | **Number** | Represents the id of the cost center, the value of this field must be an integer  number that represents the unique id of the cost center. | [optional] 
**currency** | [**CurrencyCommand**](CurrencyCommand.md) |  | [optional] 
**items** | [**[Item]**](Item.md) | Contains a list with items associated to voucher. | [optional] 
**payment** | [**Payment**](Payment.md) |  | [optional] 
**observations** | **String** | Represent additional comments in document. | [optional] 


