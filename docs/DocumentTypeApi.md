# SiigoApi.DocumentTypeApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDocumentTypes**](DocumentTypeApi.md#getDocumentTypes) | **GET** /v1/document-types | Gets a list of Document Types.




## getDocumentTypes

> [DocumentTypeViewModel] getDocumentTypes(opts)

Gets a list of Document Types.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.DocumentTypeApi();

let opts = {
  'type': FV // String | Represents the document type. For example, 'FV' to invoices, 'NC' to credit notes, or 'RC' to vouchers.
};

apiInstance.getDocumentTypes(opts).then((data) => {
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
    let apiInstance = new SiigoApi.DocumentTypeApi();
    let opts = {
    'type': FV // String | Represents the document type. For example, 'FV' to invoices, 'NC' to credit notes, or 'RC' to vouchers.
    };

    const data = await apiInstance.getDocumentTypes(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Represents the document type. For example, &#39;FV&#39; to invoices, &#39;NC&#39; to credit notes, or &#39;RC&#39; to vouchers. | [optional] 

### Return type

[**[DocumentTypeViewModel]**](DocumentTypeViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

