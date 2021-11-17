# SiigoApi.PaymentTypesViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Represents the id of the payment method, the value of this field must be an integer  number that represents the unique id of the payment method. For example &#39;5636&#39;. | [optional] 
**name** | **String** | Represents the name of the payment method. This value can be an alphanumeric name  like &#39;Crédito&#39; (credit). | [optional] 
**type** | **String** | Type of the payment method. This value can be &#39;Cartera&#39;, &#39;Proveedor&#39; or &#39;CarteraProveedor&#39;. | [optional] 
**active** | **Boolean** | Represents if payment method status is activated or disabled,   the value of this status will be true (for activated) or false (disabled).  By default, this field will be true. | [optional] 
**dueDate** | **Boolean** | Indicates if the payment method has an expiration date. This value can be &#39;true&#39; or &#39;false&#39;. | [optional] 


