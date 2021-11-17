# SiigoApi.TaxViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Represents the id of the tax, the value of this field must be an integer  number that represents the unique id of the tax. | [optional] 
**name** | **String** | Represents the name of tax. For example, &#39;VAT 19%&#39;. | [optional] 
**type** | **String** | Represents the type of the tax. This field can be &#39;Retefuente&#39;, &#39;IVA&#39;, &#39;ReteIVA&#39;,  &#39;ReteICA&#39;, &#39;Impoconsumo&#39;, &#39;AdValorem&#39;, or &#39;Autorretencion&#39;. | [optional] 
**percentage** | **Number** | Represents the numerical percentage of the tax. For example, &#39;19&#39; is equal to &#39;19%&#39;. | [optional] 
**active** | **Boolean** | Represents if the status of the tax is activated or disabled,   the value of this status will be true (for activated) or false (disabled).  By default, this field will be active. | [optional] 


