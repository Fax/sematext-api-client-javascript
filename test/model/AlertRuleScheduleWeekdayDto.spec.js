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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../stcloud/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../stcloud/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SematextApiClientJavascript);
  }
}(this, function(expect, SematextApiClientJavascript) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AlertRuleScheduleWeekdayDto', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.AlertRuleScheduleWeekdayDto();
      });

      it('should create an instance of AlertRuleScheduleWeekdayDto', function() {
        // TODO: update the code to test AlertRuleScheduleWeekdayDto
        expect(instance).to.be.a(SematextApiClientJavascript.AlertRuleScheduleWeekdayDto);
      });

      it('should have the property day (base name: "day")', function() {
        // TODO: update the code to test the property day
        expect(instance).to.have.property('day');
        // expect(instance.day).to.be(expectedValueLiteral);
      });

      it('should have the property index (base name: "index")', function() {
        // TODO: update the code to test the property index
        expect(instance).to.have.property('index');
        // expect(instance.index).to.be(expectedValueLiteral);
      });

      it('should have the property intervals (base name: "intervals")', function() {
        // TODO: update the code to test the property intervals
        expect(instance).to.have.property('intervals');
        // expect(instance.intervals).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
