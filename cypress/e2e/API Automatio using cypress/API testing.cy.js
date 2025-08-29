/// <reference types="cypress" />

describe("API Automation with Cypress - Reqres.in", () => {
  it("GET list users", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2")
      .its("status")
      .should("eq", 200);
  });

  it("GET single user", () => {
    cy.request("GET", "https://reqres.in/api/users/2")
      .its("body.data")
      .should("have.property", "id", 2);
  });

  it("PUT update user", () => {
    cy.request("PUT", "https://reqres.in/api/users/2", {
      name: "morpheus",
      job: "zion resident",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("job", "zion resident");
    });
  });

  it("PATCH update user job", () => {
    cy.request("PATCH", "https://reqres.in/api/users/2", {
      job: "zion resident",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("job", "zion resident");
    });
  });

  it("DELETE user", () => {
    cy.request("DELETE", "https://reqres.in/api/users/2")
      .its("status")
      .should("eq", 204);
  });

  it("POST register successful", () => {
    cy.request("POST", "https://reqres.in/api/register", {
      email: "eve.holt@reqres.in",
      password: "pistol",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("token");
    });
  });
});
