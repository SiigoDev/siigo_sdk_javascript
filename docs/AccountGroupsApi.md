# SiigoApi.AccountGroupsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountGroups**](AccountGroupsApi.md#getAccountGroups) | **GET** /v1/account-groups | Gets a list of AccountGroups.




## getAccountGroups

> [AccountGroupViewModel] getAccountGroups()

Gets a list of AccountGroups.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.AccountGroupsApi();


apiInstance.getAccountGroups().then((data) => {
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
    let apiInstance = new SiigoApi.AccountGroupsApi();

    const data = await apiInstance.getAccountGroups();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[AccountGroupViewModel]**](AccountGroupViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

