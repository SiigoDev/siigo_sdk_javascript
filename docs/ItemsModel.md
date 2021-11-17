# SiigoApi.ItemsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Represents the unique Id of item, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | [optional] 
**code** | **String** | Represents the unique code of the item. This value can be an alphanumeric  code that will represent the code id of the item.  For example,&#39;item-1&#39; or &#39;toy-007&#39;. | [optional] 
**quantity** | **Number** | Represents product quantity.  For example, &#39;2&#39; quantities of the &#39;item-01&#39;. | [optional] 
**price** | **Number** | Represents product price.  For example, &#39;50&#39;, dollars. | [optional] 
**seller** | **Number** | Represents the Id of the seller associated with the invoice,   for example, the id &#39;629&#39; can represent a seller called &#39;Micke&#39;. | [optional] 
**description** | **String** | Represents product description. | [optional] 
**discount** | [**DiscountModel**](DiscountModel.md) |  | [optional] 
**taxes** | [**[TaxesModel]**](TaxesModel.md) | Contains a list of taxes associated to item. | [optional] 
**warehouse** | [**WarehouseModel**](WarehouseModel.md) |  | [optional] 
**total** | **Number** | Represents the price of item with the tax included. | [optional] 


