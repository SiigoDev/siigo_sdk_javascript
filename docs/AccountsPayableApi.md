# SiigoApi.AccountsPayableApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountsPayable**](AccountsPayableApi.md#getAccountsPayable) | **GET** /v1/accounts-payable | Returns a list of document types.




## getAccountsPayable

> AccountsPayableViewModelGetAllModel getAccountsPayable(opts)

Returns a list of document types.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.AccountsPayableApi();

let opts = {
  'page': 56, // Number | 
  'pageSize': 56, // Number | 
  'providerIdentification': "providerIdentification_example", // String | 
  'providerBranchOffice': 56, // Number | 
  'dueDateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dueDateEnd': new Date("2013-10-20T19:20:30+01:00") // Date | 
};

apiInstance.getAccountsPayable(opts).then((data) => {
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
    let apiInstance = new SiigoApi.AccountsPayableApi();
    let opts = {
      'page': 56, // Number | 
      'pageSize': 56, // Number | 
      'providerIdentification': "providerIdentification_example", // String | 
      'providerBranchOffice': 56, // Number | 
      'dueDateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | 
      'dueDateEnd': new Date("2013-10-20T19:20:30+01:00") // Date | 
    };

    const data = await apiInstance.getAccountsPayable(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **providerIdentification** | **String**|  | [optional] 
 **providerBranchOffice** | **Number**|  | [optional] 
 **dueDateStart** | **Date**|  | [optional] 
 **dueDateEnd** | **Date**|  | [optional] 

### Return type

[**AccountsPayableViewModelGetAllModel**](AccountsPayableViewModelGetAllModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

