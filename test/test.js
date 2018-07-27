var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("remote-driver", function () {
  // The default tests in mocha is 2 seconds.
  // Extending it to 5 seconds to have time to load the pages

  this.timeout(5000);
  it("Should send the user to the main page", function (done) {
    Nightmare({ show: true })
      .goto("https://remote-driver.herokuapp.com/)
      .click("a[href='/home']")
      .evaluate(function () {
        return document.title;
      })
      .then(function (title) {
        expect(title).to.equal("Remote Driver");
        done();
      });
  });
  it("should press the left button", function (done) {
    new Nightmare({ show: true })
      .goto("https://remote-driver.herokuapp.com/")
      .click("#left-button")
      .then(function (button) {
        expect(button).to.not.equal(undefined);
        done();
      });
  });

  it("should press the down button", function (done) {
    new Nightmare({ show: true })
      .goto("https://remote-driver.herokuapp.com/")
      .click("#down-button")
      .then(function (button) {
        expect(button).to.not.equal(undefined);
        done();
      });
  });

  it("should press the right button", function (done) {
    new Nightmare({ show: true })
      .goto("https://remote-driver.herokuapp.com/")
      .click("#right-button")
      .then(function (button) {
        expect(button).to.not.equal(undefined);
        done();
      });
  });

  it("should press the up button", function (done) {
    new Nightmare({ show: true })
      .goto("https://remote-driver.herokuapp.com/")
      .click("#up-button")
      .then(function (button) {
        expect(button).to.not.equal(undefined);
        done();
      });
  });

  it("should throw an error for fun", function () {
    throw new Error("Failed on purpose, just to have another test here");
  });
});