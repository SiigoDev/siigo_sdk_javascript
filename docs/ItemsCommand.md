# SiigoApi.ItemsCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Represents the unique code of the item. This value can be an alphanumeric  code that will represent the code id of the item.  For example,&#39;item-1&#39; or &#39;toy-007&#39;. | [optional] 
**description** | **String** | Represents product description. | [optional] 
**warehouse** | **Number** | Represents the id of the warehouse, by default this field will be null. | [optional] 
**quantity** | **Number** | Represents product quantity.  For example, &#39;2&#39; quantities of the &#39;item-01&#39;. | [optional] 
**price** | **Number** | Represents product price.  For example, &#39;50&#39;, dollars. | [optional] 
**taxedPrice** | **Number** | Represents the price of item with the tax included. | [optional] 
**discount** | **Number** | Represents the numerical percentage of the discount.  For example, &#39;13&#39; represents 13%. | [optional] 
**seller** | **Number** | Represents the Id of the seller associated with the invoice,   For example, the id &#39;629&#39; can represent a seller called &#39;Micke&#39;. | [optional] 
**vatExcluded** | **Boolean** | Represents whether this product is excluded or does not to pay VAT. | [optional] 
**taxes** | [**[TaxesCommand]**](TaxesCommand.md) | Contains a list of Ids of taxes associated to invoice. | [optional] 


