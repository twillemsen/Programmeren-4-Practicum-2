var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('API Test', function() {
    it('Test GET /api/v2/recipes', function(done) {
        chai.request(server)
            .get('/api/v2/recipes')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('should show a description about the server', (done) => {
        chai.request(server)
            .get('/api/v2/info')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it('should show the recipe for the given number as parameter', (done) => {
        chai.request(server)
            .get('/api/v2/recipes/3')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');

                let response = res.body;
                response.should.have.property("name").equals("Tuna Salad");
                response.should.have.property("category").equals("Salad");
                response.should.have.property("procedure").deep.equals(["Mix ingredients in a bowl",
                "Chill before serving"]);
                done();
            });
    });

    it ('should show the recipe(s) for the given query String in the route', (done) => {
        chai.request(server)
            .get('/api/v2/recipes?category=Pizza')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');

                let response = res.body;
                response[0].should.have.property("name").equals("Calzone");
                response[0].should.have.property("category").equals("Pizza");
                response[0].should.have.property("procedure").equals("Steps to make calzone (pizza)");
                done();
            });
    });
});