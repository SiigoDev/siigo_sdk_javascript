# SiigoApi.UsersApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsers**](UsersApi.md#getUsers) | **GET** /v1/users | Gets a list of Users with pagination.




## getUsers

> UsersViewModel getUsers(opts)

Gets a list of Users with pagination.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.UsersApi();

let opts = {
  'page': 1, // Number | Represents the current page of the results that you get. For example, '1'.
  'pageSize': 25 // Number | Represents the number of users that you will get per page. For example, '20'.
};

apiInstance.getUsers(opts).then((data) => {
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
    let apiInstance = new SiigoApi.UsersApi();
    let opts = {
    'page': 1, // Number | Represents the current page of the results that you get. For example, '1'.
    'pageSize': 25 // Number | Represents the number of users that you will get per page. For example, '20'.
    };

    const data = await apiInstance.getUsers(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Represents the current page of the results that you get. For example, &#39;1&#39;. | [optional] 
 **pageSize** | **Number**| Represents the number of users that you will get per page. For example, &#39;20&#39;. | [optional] 

### Return type

[**UsersViewModel**](UsersViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

