/*
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient'
import { CloudWatchSettings } from '../model/CloudWatchSettings' // eslint-disable-line no-unused-vars
import { GenericApiResponse } from '../model/GenericApiResponse'

/**
 * AwsSettingsController service.
 * @module api/AwsSettingsControllerApi
  */
export class AwsSettingsControllerApi {
  /**
   * Constructs a new AwsSettingsControllerApi.
   * @alias module:api/AwsSettingsControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
   * Update App's AWS CloudWatch settings
   * Applicable only for AWS Apps
   * @param {Number} appId appId
   * @param {module:model/CloudWatchSettings} dto dto
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
   */
  updateUsingPUTWithHttpInfo(appId, dto) {
    let postBody = dto

    // verify the required parameter 'appId' is set
    if (appId === undefined || appId === null) {
      throw new Error(
        "Missing the required parameter 'appId' when calling updateUsingPUT"
      )
    }

    // verify the required parameter 'dto' is set
    if (dto === undefined || dto === null) {
      throw new Error(
        "Missing the required parameter 'dto' when calling updateUsingPUT"
      )
    }

    let pathParams = {
      appId: appId
    }
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{appId}/aws',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Update App's AWS CloudWatch settings
   * Applicable only for AWS Apps
   * @param {Number} appId appId
   * @param {module:model/CloudWatchSettings} dto dto
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
   */
  updateUsingPUT(appId, dto) {
    return this.updateUsingPUTWithHttpInfo(appId, dto).then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }
}
