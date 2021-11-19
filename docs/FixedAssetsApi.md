# SiigoApi.FixedAssetsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssetGroups**](FixedAssetsApi.md#getAssetGroups) | **GET** /v1/asset-groups | Returns a list of asset groups.
[**getFixedAssets**](FixedAssetsApi.md#getFixedAssets) | **GET** /v1/fixed-assets | Returns a list of fixed assets.




## getAssetGroups

> [AssetGroupsViewModel] getAssetGroups()

Returns a list of asset groups.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.FixedAssetsApi();


apiInstance.getAssetGroups().then((data) => {
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
    let apiInstance = new SiigoApi.FixedAssetsApi();

    const data = await apiInstance.getAssetGroups();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[AssetGroupsViewModel]**](AssetGroupsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getFixedAssets

> [FixedAssetsViewModel] getFixedAssets()

Returns a list of fixed assets.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.FixedAssetsApi();


apiInstance.getFixedAssets().then((data) => {
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
    let apiInstance = new SiigoApi.FixedAssetsApi();

    const data = await apiInstance.getFixedAssets();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**[FixedAssetsViewModel]**](FixedAssetsViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

