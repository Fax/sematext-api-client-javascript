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
import { AlertRuleScheduleWeekdayDto } from './AlertRuleScheduleWeekdayDto'
import { FilterValue } from './FilterValue'
import { NotificationIntegration } from './NotificationIntegration'
import { UserPermissions } from './UserPermissions'

/**
 * The AlertRule model module.
 * @module model/AlertRule
  */
export class AlertRule {
  /**
   * Constructs a new <code>AlertRule</code>.
   * @alias module:model/AlertRule
   * @class
   */
  constructor() { }

  /**
   * Constructs a <code>AlertRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertRule} obj Optional instance to populate.
   * @return {module:model/AlertRule} The populated <code>AlertRule</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertRule()
      if (data.hasOwnProperty('accountEmail'))
        // eslint-disable-line no-prototype-builtins
        obj.accountEmail = ApiClient.convertToType(
          data['accountEmail'],
          'String'
        )
      if (data.hasOwnProperty('allowedAppTypes'))
        // eslint-disable-line no-prototype-builtins
        obj.allowedAppTypes = ApiClient.convertToType(data['allowedAppTypes'], [
          'Number'
        ])
      if (data.hasOwnProperty('analyzingTime'))
        // eslint-disable-line no-prototype-builtins
        obj.analyzingTime = ApiClient.convertToType(
          data['analyzingTime'],
          'String'
        )
      if (data.hasOwnProperty('appDisplayState'))
        // eslint-disable-line no-prototype-builtins
        obj.appDisplayState = ApiClient.convertToType(
          data['appDisplayState'],
          'String'
        )
      if (data.hasOwnProperty('appId'))
        // eslint-disable-line no-prototype-builtins
        obj.appId = ApiClient.convertToType(data['appId'], 'Number')
      if (data.hasOwnProperty('appName'))
        // eslint-disable-line no-prototype-builtins
        obj.appName = ApiClient.convertToType(data['appName'], 'String')
      if (data.hasOwnProperty('appState'))
        // eslint-disable-line no-prototype-builtins
        obj.appState = ApiClient.convertToType(data['appState'], 'String')
      if (data.hasOwnProperty('appToken'))
        // eslint-disable-line no-prototype-builtins
        obj.appToken = ApiClient.convertToType(data['appToken'], 'String')
      if (data.hasOwnProperty('appType'))
        // eslint-disable-line no-prototype-builtins
        obj.appType = ApiClient.convertToType(data['appType'], 'String')
      if (data.hasOwnProperty('backToNormalNeeded'))
        // eslint-disable-line no-prototype-builtins
        obj.backToNormalNeeded = ApiClient.convertToType(
          data['backToNormalNeeded'],
          'Boolean'
        )
      if (data.hasOwnProperty('chartKey'))
        // eslint-disable-line no-prototype-builtins
        obj.chartKey = ApiClient.convertToType(data['chartKey'], 'String')
      if (data.hasOwnProperty('color'))
        // eslint-disable-line no-prototype-builtins
        obj.color = ApiClient.convertToType(data['color'], 'String')
      if (data.hasOwnProperty('creatorEmail'))
        // eslint-disable-line no-prototype-builtins
        obj.creatorEmail = ApiClient.convertToType(
          data['creatorEmail'],
          'String'
        )
      if (data.hasOwnProperty('defaultAggType'))
        // eslint-disable-line no-prototype-builtins
        obj.defaultAggType = ApiClient.convertToType(
          data['defaultAggType'],
          'String'
        )
      if (data.hasOwnProperty('description'))
        // eslint-disable-line no-prototype-builtins
        obj.description = ApiClient.convertToType(data['description'], 'String')
      if (data.hasOwnProperty('disallowedAppTypes'))
        // eslint-disable-line no-prototype-builtins
        obj.disallowedAppTypes = ApiClient.convertToType(
          data['disallowedAppTypes'],
          ['Number']
        )
      if (data.hasOwnProperty('enabled'))
        // eslint-disable-line no-prototype-builtins
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean')
      if (data.hasOwnProperty('estimateOperation'))
        // eslint-disable-line no-prototype-builtins
        obj.estimateOperation = ApiClient.convertToType(
          data['estimateOperation'],
          'String'
        )
      if (data.hasOwnProperty('estimateValue'))
        // eslint-disable-line no-prototype-builtins
        obj.estimateValue = ApiClient.convertToType(
          data['estimateValue'],
          'Number'
        )
      if (data.hasOwnProperty('filterValues'))
        // eslint-disable-line no-prototype-builtins
        obj.filterValues = ApiClient.convertToType(
          data['filterValues'],
          'String'
        )
      if (data.hasOwnProperty('filterValuesObj'))
        // eslint-disable-line no-prototype-builtins
        obj.filterValuesObj = ApiClient.convertToType(data['filterValuesObj'], [
          FilterValue
        ])
      if (data.hasOwnProperty('ignoreRegularEventsEnabled'))
        // eslint-disable-line no-prototype-builtins
        obj.ignoreRegularEventsEnabled = ApiClient.convertToType(
          data['ignoreRegularEventsEnabled'],
          'Boolean'
        )
      if (data.hasOwnProperty('integrations'))
        // eslint-disable-line no-prototype-builtins
        obj.integrations = ApiClient.convertToType(
          data['integrations'],
          'String'
        )
      if (data.hasOwnProperty('lastDataReceivedDate'))
        // eslint-disable-line no-prototype-builtins
        obj.lastDataReceivedDate = ApiClient.convertToType(
          data['lastDataReceivedDate'],
          'Number'
        )
      if (data.hasOwnProperty('lastSent'))
        // eslint-disable-line no-prototype-builtins
        obj.lastSent = ApiClient.convertToType(data['lastSent'], 'Number')
      if (data.hasOwnProperty('lastTriggered'))
        // eslint-disable-line no-prototype-builtins
        obj.lastTriggered = ApiClient.convertToType(
          data['lastTriggered'],
          'Number'
        )
      if (data.hasOwnProperty('metadata'))
        // eslint-disable-line no-prototype-builtins
        obj.metadata = ApiClient.convertToType(data['metadata'], Object)
      if (data.hasOwnProperty('metricKey'))
        // eslint-disable-line no-prototype-builtins
        obj.metricKey = ApiClient.convertToType(data['metricKey'], 'String')
      if (data.hasOwnProperty('metricLabel'))
        // eslint-disable-line no-prototype-builtins
        obj.metricLabel = ApiClient.convertToType(data['metricLabel'], 'String')
      if (data.hasOwnProperty('minDelayBetweenNotificationsInMinutes'))
        // eslint-disable-line no-prototype-builtins
        obj.minDelayBetweenNotificationsInMinutes = ApiClient.convertToType(
          data['minDelayBetweenNotificationsInMinutes'],
          'String'
        )
      if (data.hasOwnProperty('name'))
        // eslint-disable-line no-prototype-builtins
        obj.name = ApiClient.convertToType(data['name'], 'String')
      if (data.hasOwnProperty('notificationEmails'))
        // eslint-disable-line no-prototype-builtins
        obj.notificationEmails = ApiClient.convertToType(
          data['notificationEmails'],
          ['String']
        )
      if (data.hasOwnProperty('notificationIntegrations'))
        // eslint-disable-line no-prototype-builtins
        obj.notificationIntegrations = ApiClient.convertToType(
          data['notificationIntegrations'],
          [NotificationIntegration]
        )
      if (data.hasOwnProperty('notificationsEnabled'))
        // eslint-disable-line no-prototype-builtins
        obj.notificationsEnabled = ApiClient.convertToType(
          data['notificationsEnabled'],
          'Boolean'
        )
      if (data.hasOwnProperty('query'))
        // eslint-disable-line no-prototype-builtins
        obj.query = ApiClient.convertToType(data['query'], 'String')
      if (data.hasOwnProperty('reportName'))
        // eslint-disable-line no-prototype-builtins
        obj.reportName = ApiClient.convertToType(data['reportName'], 'String')
      if (data.hasOwnProperty('ruleKey'))
        // eslint-disable-line no-prototype-builtins
        obj.ruleKey = ApiClient.convertToType(data['ruleKey'], 'Number')
      if (data.hasOwnProperty('ruleType'))
        // eslint-disable-line no-prototype-builtins
        obj.ruleType = ApiClient.convertToType(data['ruleType'], 'String')
      if (data.hasOwnProperty('runbook'))
        // eslint-disable-line no-prototype-builtins
        obj.runbook = ApiClient.convertToType(data['runbook'], 'String')
      if (data.hasOwnProperty('savedQueryId'))
        // eslint-disable-line no-prototype-builtins
        obj.savedQueryId = ApiClient.convertToType(
          data['savedQueryId'],
          'Number'
        )
      if (data.hasOwnProperty('schedule'))
        // eslint-disable-line no-prototype-builtins
        obj.schedule = ApiClient.convertToType(data['schedule'], [
          AlertRuleScheduleWeekdayDto
        ])
      if (data.hasOwnProperty('sematextService'))
        // eslint-disable-line no-prototype-builtins
        obj.sematextService = ApiClient.convertToType(
          data['sematextService'],
          'String'
        )
      if (data.hasOwnProperty('sendToEmail'))
        // eslint-disable-line no-prototype-builtins
        obj.sendToEmail = ApiClient.convertToType(data['sendToEmail'], 'String')
      if (data.hasOwnProperty('timezone'))
        // eslint-disable-line no-prototype-builtins
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String')
      if (data.hasOwnProperty('useOnlyAlertRuleIntegrations'))
        // eslint-disable-line no-prototype-builtins
        obj.useOnlyAlertRuleIntegrations = ApiClient.convertToType(
          data['useOnlyAlertRuleIntegrations'],
          'Boolean'
        )
      if (data.hasOwnProperty('userPermissions'))
        // eslint-disable-line no-prototype-builtins
        obj.userPermissions = UserPermissions.constructFromObject(
          data['userPermissions']
        )
      if (data.hasOwnProperty('valueColumnName'))
        // eslint-disable-line no-prototype-builtins
        obj.valueColumnName = ApiClient.convertToType(
          data['valueColumnName'],
          'String'
        )
      if (data.hasOwnProperty('valueName'))
        // eslint-disable-line no-prototype-builtins
        obj.valueName = ApiClient.convertToType(data['valueName'], 'String')
    }
    return obj
  }
}

  /**
   * @member {String} accountEmail
   */
  AlertRule.prototype.accountEmail = undefined

  /**
   * @member {Array.<Number>} allowedAppTypes
   */
  AlertRule.prototype.allowedAppTypes = undefined

  /**
   * @member {String} analyzingTime
   */
  AlertRule.prototype.analyzingTime = undefined

  /**
   * @member {String} appDisplayState
   */
  AlertRule.prototype.appDisplayState = undefined

  /**
   * @member {Number} appId
   */
  AlertRule.prototype.appId = undefined

  /**
   * @member {String} appName
   */
  AlertRule.prototype.appName = undefined

  /**
   * @member {String} appState
   */
  AlertRule.prototype.appState = undefined

  /**
   * @member {String} appToken
   */
  AlertRule.prototype.appToken = undefined

  /**
   * @member {String} appType
   */
  AlertRule.prototype.appType = undefined

  /**
   * @member {Boolean} backToNormalNeeded
   */
  AlertRule.prototype.backToNormalNeeded = undefined

  /**
   * @member {String} chartKey
   */
  AlertRule.prototype.chartKey = undefined

  /**
   * @member {String} color
   */
  AlertRule.prototype.color = undefined

  /**
   * @member {String} creatorEmail
   */
  AlertRule.prototype.creatorEmail = undefined

  /**
   * @member {String} defaultAggType
   */
  AlertRule.prototype.defaultAggType = undefined

  /**
   * @member {String} description
   */
  AlertRule.prototype.description = undefined

  /**
   * @member {Array.<Number>} disallowedAppTypes
   */
  AlertRule.prototype.disallowedAppTypes = undefined

  /**
   * @member {Boolean} enabled
   */
  AlertRule.prototype.enabled = undefined

/**
 * Allowed values for the <code>estimateOperation</code> property.
 * @enum {String}
 * @readonly
 */
AlertRule.EstimateOperationEnum = {
  /**
   * value: "LESS"
   * @const
   */
  LESS: 'LESS',

  /**
   * value: "MORE"
   * @const
   */
  MORE: 'MORE',

  /**
   * value: "EQUAL"
   * @const
   */
  EQUAL: 'EQUAL',

  /**
   * value: "UN_EQUAL"
   * @const
   */
  UN_EQUAL: 'UN_EQUAL',

  /**
   * value: "LESS_OR_EQUAL"
   * @const
   */
  LESS_OR_EQUAL: 'LESS_OR_EQUAL',

  /**
   * value: "MORE_OR_EQUAL"
   * @const
   */
  MORE_OR_EQUAL: 'MORE_OR_EQUAL'
}

/**
 * @member {module:model/AlertRule.EstimateOperationEnum} estimateOperation
 */
AlertRule.prototype.estimateOperation = undefined

/**
 * @member {Number} estimateValue
 */
AlertRule.prototype.estimateValue = undefined

/**
 * @member {String} filterValues
 */
AlertRule.prototype.filterValues = undefined

/**
 * @member {Array.<module:model/FilterValue>} filterValuesObj
 */
AlertRule.prototype.filterValuesObj = undefined

/**
 * @member {Boolean} ignoreRegularEventsEnabled
 */
AlertRule.prototype.ignoreRegularEventsEnabled = undefined

/**
 * @member {String} integrations
 */
AlertRule.prototype.integrations = undefined

/**
 * @member {Number} lastDataReceivedDate
 */
AlertRule.prototype.lastDataReceivedDate = undefined

/**
 * @member {Number} lastSent
 */
AlertRule.prototype.lastSent = undefined

/**
 * @member {Number} lastTriggered
 */
AlertRule.prototype.lastTriggered = undefined

/**
 * @member {Object} metadata
 */
AlertRule.prototype.metadata = undefined

/**
 * @member {String} metricKey
 */
AlertRule.prototype.metricKey = undefined

/**
 * @member {String} metricLabel
 */
AlertRule.prototype.metricLabel = undefined

/**
 * @member {String} minDelayBetweenNotificationsInMinutes
 */
AlertRule.prototype.minDelayBetweenNotificationsInMinutes = undefined

/**
 * @member {String} name
 */
AlertRule.prototype.name = undefined

/**
 * @member {Array.<String>} notificationEmails
 */
AlertRule.prototype.notificationEmails = undefined

/**
 * @member {Array.<module:model/NotificationIntegration>} notificationIntegrations
 */
AlertRule.prototype.notificationIntegrations = undefined

/**
 * @member {Boolean} notificationsEnabled
 */
AlertRule.prototype.notificationsEnabled = undefined

/**
 * @member {String} query
 */
AlertRule.prototype.query = undefined

/**
 * @member {String} reportName
 */
AlertRule.prototype.reportName = undefined

/**
 * @member {Number} ruleKey
 */
AlertRule.prototype.ruleKey = undefined

/**
 * @member {String} ruleType
 */
AlertRule.prototype.ruleType = undefined

/**
 * @member {String} runbook
 */
AlertRule.prototype.runbook = undefined

/**
 * @member {Number} savedQueryId
 */
AlertRule.prototype.savedQueryId = undefined

/**
 * @member {Array.<module:model/AlertRuleScheduleWeekdayDto>} schedule
 */
AlertRule.prototype.schedule = undefined

/**
 * @member {String} sematextService
 */
AlertRule.prototype.sematextService = undefined

/**
 * @member {String} sendToEmail
 */
AlertRule.prototype.sendToEmail = undefined

/**
 * @member {String} timezone
 */
AlertRule.prototype.timezone = undefined

/**
 * @member {Boolean} useOnlyAlertRuleIntegrations
 */
AlertRule.prototype.useOnlyAlertRuleIntegrations = undefined

/**
 * @member {module:model/UserPermissions} userPermissions
 */
AlertRule.prototype.userPermissions = undefined

/**
 * @member {String} valueColumnName
 */
AlertRule.prototype.valueColumnName = undefined

/**
 * @member {String} valueName
 */
AlertRule.prototype.valueName = undefined
