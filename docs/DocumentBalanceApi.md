# SiigoApi.DocumentBalanceApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDocumentBalances**](DocumentBalanceApi.md#getDocumentBalances) | **GET** /v1/available-documents | 




## getDocumentBalances

> [DocumentBalanceViewModel] getDocumentBalances()



### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.DocumentBalanceApi();


apiInstance.getDocumentBalances().then((data) => {
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
    let apiInstance = new SiigoApi.DocumentBalanceApi();

    const data = await apiInstance.getDocumentBalances();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[DocumentBalanceViewModel]**](DocumentBalanceViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

