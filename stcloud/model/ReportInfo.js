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

/**
 * The ReportInfo model module.
 * @module model/ReportInfo
 * @version 0.1.0
 */
export class ReportInfo {
  /**
   * Constructs a new <code>ReportInfo</code>.
   * @alias module:model/ReportInfo
   * @class
   */
  constructor () {}

  /**
   * Constructs a <code>ReportInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInfo} obj Optional instance to populate.
   * @return {module:model/ReportInfo} The populated <code>ReportInfo</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ReportInfo()
      if (data.hasOwnProperty('addresses'))
        // eslint-disable-line no-prototype-builtins
        obj.addresses = ApiClient.convertToType(data['addresses'], 'String')
      if (data.hasOwnProperty('appId'))
        // eslint-disable-line no-prototype-builtins
        obj.appId = ApiClient.convertToType(data['appId'], 'Number')
      if (data.hasOwnProperty('endDate'))
        // eslint-disable-line no-prototype-builtins
        obj.endDate = ApiClient.convertToType(data['endDate'], 'Date')
      if (data.hasOwnProperty('filters'))
        // eslint-disable-line no-prototype-builtins
        obj.filters = ApiClient.convertToType(data['filters'], 'String')
      if (data.hasOwnProperty('reportName'))
        // eslint-disable-line no-prototype-builtins
        obj.reportName = ApiClient.convertToType(data['reportName'], 'String')
      if (data.hasOwnProperty('startDate'))
        // eslint-disable-line no-prototype-builtins
        obj.startDate = ApiClient.convertToType(data['startDate'], 'Date')
      if (data.hasOwnProperty('subject'))
        // eslint-disable-line no-prototype-builtins
        obj.subject = ApiClient.convertToType(data['subject'], 'String')
      if (data.hasOwnProperty('text'))
        // eslint-disable-line no-prototype-builtins
        obj.text = ApiClient.convertToType(data['text'], 'String')
    }
    return obj
  }
}

/**
 * Comma separated list of email addresses
 * @member {String} addresses
 */
ReportInfo.prototype.addresses = undefined

/**
 * @member {Number} appId
 */
ReportInfo.prototype.appId = undefined

/**
 * @member {Date} endDate
 */
ReportInfo.prototype.endDate = undefined

/**
 * @member {String} filters
 */
ReportInfo.prototype.filters = undefined

/**
 * @member {String} reportName
 */
ReportInfo.prototype.reportName = undefined

/**
 * @member {Date} startDate
 */
ReportInfo.prototype.startDate = undefined

/**
 * @member {String} subject
 */
ReportInfo.prototype.subject = undefined

/**
 * @member {String} text
 */
ReportInfo.prototype.text = undefined
