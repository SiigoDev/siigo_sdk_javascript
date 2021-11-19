# SiigoApi.CostCenterApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCostCenters**](CostCenterApi.md#getCostCenters) | **GET** /v1/cost-centers | Returns a list of cost centers.




## getCostCenters

> [CostCentersViewModel] getCostCenters()

Returns a list of cost centers.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CostCenterApi();


apiInstance.getCostCenters().then((data) => {
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
    let apiInstance = new SiigoApi.CostCenterApi();

    const data = await apiInstance.getCostCenters();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[CostCentersViewModel]**](CostCentersViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

