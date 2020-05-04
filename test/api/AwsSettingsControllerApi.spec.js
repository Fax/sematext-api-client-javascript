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

  beforeEach(function() {
    instance = new SematextApiClientJavascript.AwsSettingsControllerApi();
  });

  describe('(package)', function() {
    describe('AwsSettingsControllerApi', function() {
      describe('updateUsingPUT', function() {
        it('should call updateUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUsingPUT call and complete the assertions
          /*
          var appId = 789;
          var dto = new SematextApiClientJavascript.CloudWatchSettings();
          dto.accessKey = "";
          dto.fetchFrequency = "MINUTE";
          dto.region = "US_EAST_1";
          dto.secretKey = "";

          instance.updateUsingPUT(appId, dto).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SematextApiClientJavascript.GenericApiResponse);
            expect(data.data).to.be.a(Object);
            // expect(data.data).to.be();
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SematextApiClientJavascript.Error);
                expect(data.code).to.be.a('string');
                // expect(data.code).to.be("");
                expect(data.message).to.be.a('string');
                // expect(data.message).to.be("");
              }
            }
            expect(data.message).to.be.a('string');
            // expect(data.message).to.be("");
            expect(data.success).to.be.a('boolean');
            // expect(data.success).to.be(false);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
