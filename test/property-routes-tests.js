process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const mongoose = require("mongoose");
const Property = require("../models/property");
const should = chai.should();

chai.use(chaiHttp);

describe("PropertyAPI Tests", () => {
    Property.collection.drop();

    beforeEach(done => {
        let newProperty = new Property({
            thumbnail_url:
                "https://vrooms-s3.s3.amazonaws.com/141scarolwooddr.jpg",
            street: "141 S Carolwood Dr",
            city: "Los Angeles",
            state: "CA",
            zip: "90024",
            bedrooms: 9,
            baths: 10,
            built_year: 1936,
            price: 180000000,
            square_feet: 12201
        });
        newProperty.save(err => {
            done();
        });
    });

    afterEach(done => {
        Property.collection.drop();
        done();
    });

    /**
     * Get all properties
     */
    it("should list ALL properties on /api/property GET", done => {
        chai
            .request(server)
            .get("/api/property")
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a("array");
                res.body[0].should.have.property("_id");
                res.body[0].street.should.equal("141 S Carolwood Dr");
                res.body[0].city.should.equal("Los Angeles");
                res.body[0].state.should.equal("CA");
                res.body[0].zip.should.equal("90024");
                res.body[0].bedrooms.should.equal(9);
                res.body[0].baths.should.equal(10);
                res.body[0].built_year.should.equal(1936);
                res.body[0].price.should.equal(180000000);
                res.body[0].square_feet.should.equal(12201);
                done();
            });
    });

    /**
     * Get a single property
     */
    it("should list a SINGLE property on /api/property/<propertyId> GET", done => {
        let newProperty = new Property({
            street: "1234 Main St",
            city: "San Diego",
            price: 123456
        });
        newProperty.save((err, data) => {
            chai
                .request(server)
                .get("/api/property/" + data.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a("array");
                    res.body[0].should.have.property("_id");
                    res.body[0].should.have.property("street");
                    res.body[0].should.have.property("city");
                    res.body[0].should.have.property("price");
                    res.body[0].street.should.equal("1234 Main St");
                    res.body[0].city.should.equal("San Diego");
                    res.body[0].price.should.equal(123456);
                    res.body[0]._id.should.equal(data.id);
                    done();
                });
        });
    });

    /**
     * Add a single property
     */
    it("should add a SINGLE property on /api/property/<userID> POST", done => {
        let userID = "59c5a7f1d9076629d8278740";
        let property = {
            thumbnail_url:
                "https://s3-us-west-1.amazonaws.com/transported-content/tours/xjjIM4Fg/Media/hero.jpg",
            street: "1605 Viewmont Drive",
            city: "Los Angeles",
            state: "CA",
            zip: 90069,
            country: "United States",
            bedrooms: 3,
            baths: 3,
            built_year: 2011,
            price: 11000000,
            square_feet: 3000
        };

        chai
            .request(server)
            .post(`/api/property/${userID}`)
            .send(property)
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a("object");
                res.body.should.have.property("_id");
                res.body.street.should.equal("1605 Viewmont Drive");
                res.body.city.should.equal("Los Angeles");
                res.body.state.should.equal("CA");
                res.body.zip.should.equal("90069");
                res.body.country.should.equal("United States");
                res.body.bedrooms.should.equal(3);
                res.body.baths.should.equal(3);
                res.body.built_year.should.equal(2011);
                res.body.price.should.equal(11000000);
                res.body.square_feet.should.equal(3000);
                done();
            });
    });

    it("should update a SINGLE property on /api/property/<propertyID> PATCH", done => {
        chai
            .request(server)
            .get("/api/property")
            .end((err, res) => {
                chai
                    .request(server)
                    .patch("/api/property/" + res.body[0]._id)
                    .send({ street: "99999 College Dr." })
                    .end((error, response) => {
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a("object");
                        response.body.should.have.property("street");
                        response.body.should.have.property("_id");
                        response.body.should.have.property("price");
                        response.body.street.should.equal("99999 College Dr.");
                        done();
                    });
            });
    });

    it("should delete a SINGLE property on /api/property/<propertyID> DELETE", done => {
        chai
            .request(server)
            .get("/api/property")
            .end((err, res) => {
                chai
                    .request(server)
                    .delete("/api/property/" + res.body[0]._id)
                    .end((error, response) => {
                        console.log("response: ", JSON.stringify(response, null, 2));
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a("object");
                        response.body.should.have.property("street");
                        response.body.should.have.property("_id");
                        response.body.street.should.equal("141 S Carolwood Dr");
                        done();
                    });
            });
    });
});
