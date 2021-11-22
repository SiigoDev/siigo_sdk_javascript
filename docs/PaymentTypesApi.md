# SiigoApi.PaymentTypesApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentTypes**](PaymentTypesApi.md#getPaymentTypes) | **GET** /v1/payment-types | Returns a list of payment types.




## getPaymentTypes

> PaymentTypesViewModel getPaymentTypes(opts)

Returns a list of payment types.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.PaymentTypesApi();

let opts = {
  'documentType': "documentType_example" // String | Returns the payment method by the document type associated. For example, 'FV' to invoices, 'NC' to credit notes, or 'RC' to vouchers.
};

apiInstance.getPaymentTypes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.PaymentTypesApi();
    let opts = {
    'documentType': "documentType_example" // String | Returns the payment method by the document type associated. For example, 'FV' to invoices, 'NC' to credit notes, or 'RC' to vouchers.
    };

    const data = await apiInstance.getPaymentTypes(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentType** | **String**| Returns the payment method by the document type associated. For example, &#39;FV&#39; to invoices, &#39;NC&#39; to credit notes, or &#39;RC&#39; to vouchers. | [optional] 

### Return type

[**PaymentTypesViewModel**](PaymentTypesViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

