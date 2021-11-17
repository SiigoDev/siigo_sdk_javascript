# SiigoApi.WarehousesApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductWarehouse**](WarehousesApi.md#getProductWarehouse) | **GET** /v1/warehouses | Gets a list of Warehouses.




## getProductWarehouse

> WarehouseViewModel getProductWarehouse()

Gets a list of Warehouses.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.WarehousesApi();


apiInstance.getProductWarehouse().then((data) => {
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
    let apiInstance = new SiigoApi.WarehousesApi();

    const data = await apiInstance.getProductWarehouse();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**WarehouseViewModel**](WarehouseViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

