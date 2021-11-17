# SiigoApi.RetentionsOutModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Represents the id of the retention, the value of this field must be an integer  number that represents the unique id of the retention. | [optional] 
**name** | **String** | Represents the name of the retention. This value can be an alphanumeric  name like &#39;VAT 19%&#39; or &#39;RET 0.55%&#39;. | [optional] 
**type** | **String** | Represents the type of retention. For example its type can be IVA, &#39;Retefuente&#39;, &#39;ReteIVA&#39;,  &#39;ReteICA&#39;, &#39;Impoconsumo&#39;, &#39;AdValorem&#39;, &#39;Autorretencion&#39;, or &#39;ReteIVA&#39;. | [optional] 
**percentage** | **Number** | Represents the percentage of the tax. For example, for Colombia in the year 2021   the percentage value of the VAT was 19%. | [optional] 
**value** | **Number** | Represents the value of retention associated with the document.   For example, 5 dollars. | [optional] 


