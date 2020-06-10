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

import { ApiClient } from './ApiClient'
import { AlertNotificationRequest } from './model/AlertNotificationRequest'
import { AlertRule } from './model/AlertRule'
import { AlertRuleScheduleTimeRangeDto } from './model/AlertRuleScheduleTimeRangeDto'
import { AlertRuleScheduleWeekdayDto } from './model/AlertRuleScheduleWeekdayDto'
import { App } from './model/App'
import { AppDescription } from './model/AppDescription'
import { AppMetadata } from './model/AppMetadata'
import { BasicAuthMethodDto } from './model/BasicAuthMethodDto'
import { BasicOrganizationDto } from './model/BasicOrganizationDto'
import { BillingInfo } from './model/BillingInfo'
import { CloudWatchSettings } from './model/CloudWatchSettings'
import { CreateAppInfo } from './model/CreateAppInfo'
import { DataSeriesFilter } from './model/DataSeriesFilter'
import { DataSeriesRequest } from './model/DataSeriesRequest'
import { Error } from './model/Error'
import { FilterValue } from './model/FilterValue'
import { GenericApiResponse } from './model/GenericApiResponse'
import { Invitation } from './model/Invitation'
import { NotificationIntegration } from './model/NotificationIntegration'
import { Plan } from './model/Plan'
import { ReportInfo } from './model/ReportInfo'
import { SavedQuery } from './model/SavedQuery'
import { ServiceIntegration } from './model/ServiceIntegration'
import { UpdateAppInfo } from './model/UpdateAppInfo'
import { UserInfo } from './model/UserInfo'
import { UserPermissions } from './model/UserPermissions'
import { UserRole } from './model/UserRole'
import { AlertNotificationsApi } from './api/AlertNotificationsApi'
import { AlertsApi } from './api/AlertsApi'
import { AppsApi } from './api/AppsApi'
import { AwsSettingsControllerApi } from './api/AwsSettingsControllerApi'
import { BillingApi } from './api/BillingApi'
import { LogsAppApi } from './api/LogsAppApi'
import { MetricsApi } from './api/MetricsApi'
import { MonitoringAppApi } from './api/MonitoringAppApi'
import { ResetPasswordApi } from './api/ResetPasswordApi'
import { SavedQueriesApi } from './api/SavedQueriesApi'
import { SubscriptionsApi } from './api/SubscriptionsApi'
import { TagApiControllerApi } from './api/TagApiControllerApi'

/**
 * Client library for https://sematext.com/docs/api/.<br>
 * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
 * <p>
 * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
 * <pre>
 * var SematextApiClientJavascript = require('index'); // See note below*.
 * var xxxSvc = new SematextApiClientJavascript.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new SematextApiClientJavascript.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new SematextApiClientJavascript.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new SematextApiClientJavascript.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 * @module index
 * @version 0.1.0
 */
export {
  /**
   * The ApiClient constructor.
   * @property {module:ApiClient}
   */
  ApiClient,
  /**
   * The AlertNotificationRequest model constructor.
   * @property {module:model/AlertNotificationRequest}
   */
  AlertNotificationRequest,
  /**
   * The AlertRule model constructor.
   * @property {module:model/AlertRule}
   */
  AlertRule,
  /**
   * The AlertRuleScheduleTimeRangeDto model constructor.
   * @property {module:model/AlertRuleScheduleTimeRangeDto}
   */
  AlertRuleScheduleTimeRangeDto,
  /**
   * The AlertRuleScheduleWeekdayDto model constructor.
   * @property {module:model/AlertRuleScheduleWeekdayDto}
   */
  AlertRuleScheduleWeekdayDto,
  /**
   * The App model constructor.
   * @property {module:model/App}
   */
  App,
  /**
   * The AppDescription model constructor.
   * @property {module:model/AppDescription}
   */
  AppDescription,
  /**
   * The AppMetadata model constructor.
   * @property {module:model/AppMetadata}
   */
  AppMetadata,
  /**
   * The BasicAuthMethodDto model constructor.
   * @property {module:model/BasicAuthMethodDto}
   */
  BasicAuthMethodDto,
  /**
   * The BasicOrganizationDto model constructor.
   * @property {module:model/BasicOrganizationDto}
   */
  BasicOrganizationDto,
  /**
   * The BillingInfo model constructor.
   * @property {module:model/BillingInfo}
   */
  BillingInfo,
  /**
   * The CloudWatchSettings model constructor.
   * @property {module:model/CloudWatchSettings}
   */
  CloudWatchSettings,
  /**
   * The CreateAppInfo model constructor.
   * @property {module:model/CreateAppInfo}
   */
  CreateAppInfo,
  /**
   * The DataSeriesFilter model constructor.
   * @property {module:model/DataSeriesFilter}
   */
  DataSeriesFilter,
  /**
   * The DataSeriesRequest model constructor.
   * @property {module:model/DataSeriesRequest}
   */
  DataSeriesRequest,
  /**
   * The Error model constructor.
   * @property {module:model/Error}
   */
  Error,
  /**
   * The FilterValue model constructor.
   * @property {module:model/FilterValue}
   */
  FilterValue,
  /**
   * The GenericApiResponse model constructor.
   * @property {module:model/GenericApiResponse}
   */
  GenericApiResponse,
  /**
   * The Invitation model constructor.
   * @property {module:model/Invitation}
   */
  Invitation,
  /**
   * The NotificationIntegration model constructor.
   * @property {module:model/NotificationIntegration}
   */
  NotificationIntegration,
  /**
   * The Plan model constructor.
   * @property {module:model/Plan}
   */
  Plan,
  /**
   * The ReportInfo model constructor.
   * @property {module:model/ReportInfo}
   */
  ReportInfo,
  /**
   * The SavedQuery model constructor.
   * @property {module:model/SavedQuery}
   */
  SavedQuery,
  /**
   * The ServiceIntegration model constructor.
   * @property {module:model/ServiceIntegration}
   */
  ServiceIntegration,
  /**
   * The UpdateAppInfo model constructor.
   * @property {module:model/UpdateAppInfo}
   */
  UpdateAppInfo,
  /**
   * The UserInfo model constructor.
   * @property {module:model/UserInfo}
   */
  UserInfo,
  /**
   * The UserPermissions model constructor.
   * @property {module:model/UserPermissions}
   */
  UserPermissions,
  /**
   * The UserRole model constructor.
   * @property {module:model/UserRole}
   */
  UserRole,
  /**
   * The AlertNotificationsApi service constructor.
   * @property {module:api/AlertNotificationsApi}
   */
  AlertNotificationsApi,
  /**
   * The AlertsApi service constructor.
   * @property {module:api/AlertsApi}
   */
  AlertsApi,
  /**
   * The AppsApi service constructor.
   * @property {module:api/AppsApi}
   */
  AppsApi,
  /**
   * The AwsSettingsControllerApi service constructor.
   * @property {module:api/AwsSettingsControllerApi}
   */
  AwsSettingsControllerApi,
  /**
   * The BillingApi service constructor.
   * @property {module:api/BillingApi}
   */
  BillingApi,
  /**
   * The LogsAppApi service constructor.
   * @property {module:api/LogsAppApi}
   */
  LogsAppApi,
  /**
   * The MetricsApi service constructor.
   * @property {module:api/MetricsApi}
   */
  MetricsApi,
  /**
   * The MonitoringAppApi service constructor.
   * @property {module:api/MonitoringAppApi}
   */
  MonitoringAppApi,
  /**
   * The ResetPasswordApi service constructor.
   * @property {module:api/ResetPasswordApi}
   */
  ResetPasswordApi,
  /**
   * The SavedQueriesApi service constructor.
   * @property {module:api/SavedQueriesApi}
   */
  SavedQueriesApi,
  /**
   * The SubscriptionsApi service constructor.
   * @property {module:api/SubscriptionsApi}
   */
  SubscriptionsApi,
  /**
   * The TagApiControllerApi service constructor.
   * @property {module:api/TagApiControllerApi}
   */
  TagApiControllerApi
}
