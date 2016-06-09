/**
 * Created by alex on 5/19/14.
 */
define(['backbone', 'marionette', 'jquery', 'js/widgets/abstract/widget',
    'js/widgets/base/base_widget','js/bugutils/minimal_pubsub' ],
  function (Backbone, Marionette, $, AbstractWidget, BaseWidget, MinimalPubSub) {


    describe("Abstract Renderer (abstract_widget.spec.js)", function(){

      var testJSON, minsub;
      beforeEach(function(){
        testJSON = {  "responseHeader": {    "status": 0, "QTime": 62, "params": {
          "fl": "abstract,title,author,aff,pub,pubdate,keyword",
          "indent": "true",
          "start": "4",
          "q": "planet\n",
          "wt": "json",
          "rows": "1",
          "__show" : "foo"
        }},
          "response": {
            "numFound": 238540, "start": 4,
            "docs": [
              { "bibcode": "foo",
                "keyword": ["HARMONY OF THE UNIVERSE", "THEORY OF MUSIC", "PLATO'S BODIES"],
                "author": ["Lieske, J. H.", "Standish, E. M."],
                "abstract": "In the past twenty years there has been a great amount of growth in radiometric observing methods.",
                "pub": "IAU Colloq. 56: Reference Coordinate Systems for Earth Dynamics",
                "pubdate": "1981-00-00",
                "title": ["Planetary Ephemerides"],
                "aff": ["Heidelberg, Universität, Heidelberg, Germany", "California Institute of Technology, Jet Propulsion Laboratory, Pasadena, CA"],
                "citation_count" : 5,
                "[citations]" : { num_citations : 3 }
              }
            ]}};



        minsub = new (MinimalPubSub.extend({
          request: function (apiRequest) {
            if (apiRequest.get("query").get("q")[0] == "bibcode:foo") return testJSON;
          }
        }))({verbose: false});

        var fakeAppStorage = {getHardenedInstance :function(){return this}, getCurrentQuery : function(){return new MinimalPubSub.prototype.T.QUERY()}};

        var stashTestDoc = _.cloneDeep(testJSON.response.docs[0]);
        //change bibcode so it doesn't interfere with other tests (that
        // should request the bibcode from the API)
        stashTestDoc.bibcode = "baz";

        var fakeDocStashController = {getHardenedInstance :function(){return this},
          getDocs : function(){ return [ stashTestDoc ]}
        };
        minsub.beehive.addObject("AppStorage", fakeAppStorage);
        minsub.beehive.addObject("DocStashController", fakeDocStashController );

      });

      afterEach(function(){
        $("#test").empty();
        minsub.destroy();
      });

      it("should be a simple widget consisting of Base Widget, an ItemView, and a Backbone Model", function(){
        var aw = new AbstractWidget();
        expect(aw).to.be.instanceof(BaseWidget);
        expect(aw.view).to.be.instanceof(Marionette.ItemView);
        expect(aw.model).to.be.instanceof(Backbone.Model);
      });

      it("should show an appropriate default page in the case that the bibcode isn't found", function(){

        var aw = new AbstractWidget();
        aw.activate(minsub.beehive.getHardenedInstance());
        $("#test").append(aw.render().el);

        expect($("article").text().trim().replace(/\s{2}/gi, "")).to.eql("Abstract Not FoundNo valid abstract selected for retrieval or abstract not yet indexed in ADS.")

      });

      it("should have a model that takes raw solr data and parses it to template-ready condition", function(){
        var aw = new AbstractWidget();

        var spy = sinon.spy(aw, 'processResponse');
        aw.activate(minsub.beehive.getHardenedInstance());

        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:foo'}));

        expect(spy.callCount).to.eql(1);
        expect(aw._docs['foo'].hasAffiliation).to.equal(2);
        expect(aw._docs['foo'].hasMoreAuthors).to.equal(undefined);
        expect(aw._docs['foo'].pubdate).to.equal("1981-00-00");
        expect(aw._docs['foo'].formattedDate).to.equal("1981");
        expect(aw._docs['foo'].pub).to.equal("IAU Colloq. 56: Reference Coordinate Systems for Earth Dynamics");
        expect(aw._docs['foo'].authorAff[0]).to.eql(["Lieske, J. H.","Heidelberg, Universität, Heidelberg, Germany","%22Lieske%2C+J.+H.%22"]);
        expect(aw._docs['foo'].authorAff[1]).to.eql(["Standish, E. M.","California Institute of Technology, Jet Propulsion Laboratory, Pasadena, CA","%22Standish%2C+E.+M.%22"]

        );
        expect(aw._docs['foo'].authorAffExtra).to.eql(undefined);

        aw.maxAuthors = 1;
        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:foo'}));
        expect(spy.callCount).to.eql(1); // it is not loaded again

        delete aw._docs['foo'];

        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:foo'}));
        expect(spy.callCount).to.eql(2);
        expect(aw._docs['foo'].hasAffiliation).to.eql(2);
        expect(aw._docs['foo'].hasMoreAuthors).to.eql(1);
        expect(aw._docs['foo'].authorAff[0]).to.eql(["Lieske, J. H.","Heidelberg, Universität, Heidelberg, Germany","%22Lieske%2C+J.+H.%22"]);
        expect(aw._docs['foo'].authorAffExtra[0]).to.eql(["Standish, E. M.","California Institute of Technology, Jet Propulsion Laboratory, Pasadena, CA","%22Standish%2C+E.+M.%22"]);

      });

      it("should render a view with the properly rendered information and 'view more' user interactions", function(){
        var aw = new AbstractWidget();
        aw.activate(minsub.beehive.getHardenedInstance());
        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:foo'}));
        var $w = aw.render().$el;

        // normally the query comes back with the __show parameter, but in the test we'll help it
        aw.model.set(aw._docs['foo']);

        $("#test").append($w);

        expect($w.find(".affiliation").filter(".hide").length).to.equal($w.find(".affiliation").length);

        $("#test").find("#toggle-aff").click();

        expect($w.find(".affiliation").filter(".hide").length).to.equal(0);
        expect($w.find(".s-abstract-text").text()).to.match(/In the past twenty years there has been a great amount of growth in radiometric observing methods./);
      });

      it("should pre-populate with values from the docstashcontroller", function(){
        var aw = new AbstractWidget();
        aw.activate(minsub.beehive.getHardenedInstance());
        aw.dispatchRequest = sinon.spy();

        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:goo'}));

        expect(Object.keys(aw._docs)).to.eql(["baz"]);

        //docs should be parsed in the mergestasheddocs function
        //an 'authoraff' array is proof that the parsing occured

        expect(JSON.stringify(_.values(aw._docs)[0])).to.eql(JSON.stringify({
          "bibcode": "baz",
          "keyword": [
            "HARMONY OF THE UNIVERSE",
            "THEORY OF MUSIC",
            "PLATO'S BODIES"
          ],
          "author": [
            "Lieske, J. H.",
            "Standish, E. M."
          ],
          "abstract": "In the past twenty years there has been a great amount of growth in radiometric observing methods.",
          "pub": "IAU Colloq. 56: Reference Coordinate Systems for Earth Dynamics",
          "pubdate": "1981-00-00",
          "title": "Planetary Ephemerides",
          "aff": [
            "Heidelberg, Universität, Heidelberg, Germany",
            "California Institute of Technology, Jet Propulsion Laboratory, Pasadena, CA"
          ],
          "citation_count": 5,
          "[citations]": {
            "num_citations": 3
          },
          "hasAffiliation": 2,
          "authorAff": [
            [
              "Lieske, J. H.",
              "Heidelberg, Universität, Heidelberg, Germany",
              "%22Lieske%2C+J.+H.%22"
            ],
            [
              "Standish, E. M.",
              "California Institute of Technology, Jet Propulsion Laboratory, Pasadena, CA",
              "%22Standish%2C+E.+M.%22"
            ]
          ],
          "formattedDate": "1981"
        }));

      });

      it("should request a new bibcode if it can't find it in this._docs", function(){

        var aw = new AbstractWidget();

        aw._docs["goo"] = "fake";

        aw.activate(minsub.beehive.getHardenedInstance());
        aw.dispatchRequest = sinon.spy();

        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:goo'}));

        expect(aw.dispatchRequest.callCount).to.eql(0);

        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:foo'}));

        expect(aw.dispatchRequest.callCount).to.eql(1);
        expect(aw.dispatchRequest.args[0][0].toJSON()).to.eql({
          "q": [
            "bibcode:foo"
          ],
          "__show": [
            "foo"
          ]
        });

      });

      it("should trigger the page_manager_event 'broadcast_payload' every time it is shown to provide data for abstract page widgets", function(){

        var payload;

        var aw = new AbstractWidget();
        aw.activate(minsub.beehive.getHardenedInstance());
        aw.on("page-manager-event", function(ev, data){
          if (ev === 'broadcast-payload') payload = data;
        })
        $("#test").append(aw.view.render().el);
        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:foo'}));

        expect(payload).to.eql({
          "title": "Planetary Ephemerides",
          "bibcode": "foo",
          "citation_discrepancy": 2,
          "citation_count": 5
        });


      });

      it("should completely clear its (single) model before inserting the next page's data", function(){
        var aw = new AbstractWidget();

        aw._docs =  {
          1 : { field1 : 'boo', field2 : 'goo'},
          2: { field1 : 'boo2' }
        };

        $("#test").append(aw.render().el);

        aw.displayBibcode('1');

        expect(aw.model.toJSON()).to.eql({
          "field1": "boo",
          "field2": "goo"
        });

        aw.displayBibcode('2');

        expect(aw.model.toJSON()).to.eql({
          "field1": "boo2",
        });


      });


      it("should populate the document head with  highwire-style metatags + trigger events to inform citation managers of update", function(){
        var aw = new AbstractWidget();
        aw.activate(minsub.beehive.getHardenedInstance());
        var $w = aw.render().$el;
        $("#test").append($w);
        $("head [data-highwire]").remove();


        //check that bbb fired the correct events to contact reference manager
        var fired = false;
        document.addEventListener('ZoteroItemUpdated', function(){fired = true}, false);

        minsub.publish(minsub.DISPLAY_DOCUMENTS, minsub.createQuery({'q': 'bibcode:foo'}));

        expect(fired).to.be.true;

        expect(
            $("head [data-highwire]")
            .map(function(ind, el){return {name : el.name, content : el.content} })
            .get()
        ).to.eql([
          {
            "name": "citation_title",
            "content": "Planetary Ephemerides"
          },
          {
            "name": "citation_author",
            "content": "Lieske, J. H."
          },
          {
            "name": "citation_author",
            "content": "Standish, E. M."
          },
          {
            "name": "citation_publication_date",
            "content": "1981-00-00"
          },
          {
            "name": "citation_journal_title",
            "content": "IAU Colloq. 56: Reference Coordinate Systems for Earth Dynamics"
          }
        ]);

      });

    });



  });