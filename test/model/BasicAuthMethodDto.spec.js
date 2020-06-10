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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../stcloud/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../stcloud/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SematextApiClientJavascript)
  }
})(this, function (expect, SematextApiClientJavascript) {
  'use strict'

  var instance

  describe('(package)', function () {
    describe('BasicAuthMethodDto', function () {
      beforeEach(function () {
        instance = new SematextApiClientJavascript.BasicAuthMethodDto()
      })

      it('should create an instance of BasicAuthMethodDto', function () {
        // TODO: update the code to test BasicAuthMethodDto
        expect(instance).to.be.a(SematextApiClientJavascript.BasicAuthMethodDto)
      })

      it('should have the property authType (base name: "authType")', function () {
        // TODO: update the code to test the property authType
        expect(instance).to.have.property('authType')
        // expect(instance.authType).to.be(expectedValueLiteral);
      })

      it('should have the property uuid (base name: "uuid")', function () {
        // TODO: update the code to test the property uuid
        expect(instance).to.have.property('uuid')
        // expect(instance.uuid).to.be(expectedValueLiteral);
      })
    })
  })
})
