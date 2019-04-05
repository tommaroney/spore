var db = require("../models");
const path = require("path");

function createMembersArr(idArr, modelName) {
  let modelMembers = [];

  idArr.forEach((memberId) => {
    db[modelName].findOne({where: {id: memberId}})
      .then((member) => modelMembers.push(member));
  });
  return modelMembers;
}

function getAttributesObj(_cb) {
  return new Promise ((resolve, reject) => {
    db.Attribute.findAll().then((Attributes) => {
      let mushAttributes = {};
      Attributes.forEach((entry) => {
        if(!mushAttributes[entry.type])
          mushAttributes[entry.type] = [];
        mushAttributes[entry.type].push(entry);
      });
      resolve(mushAttributes);
    });
  });
}

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

    // Load admin page
  app.get("/api/admin", function(req, res) {
    db.Icon.findAll({}).then(async (Icons) => {
      let mushroom = { icons: Icons }
          mushroom.attributes = await getAttributesObj();
          console.log(mushroom);
          res.render("admin", {
            mushroom: mushroom,
          });
      });
  });

  // Create a new mushroom
  app.post("/api/admin", function(req, res) {

    const postMushroom = req.body;

    let newMushroom = {
      latinName: postMushroom.latinName,
      commonName: postMushroom.commonName,
      pronunciation: postMushroom.pronunciation,
      content: postMushroom.content,
      mushroom_photo: postMushroom.mushroom_photo,
      thumbnail_photo: postMushroom.thumbnail_photo
    }

    let iconsArr = createMembersArr(postMushroom.icons, "Icon");
    let attributesArr = createMembersArr(postMushroom.attributes, "Attribute")

    // add new mushroom to database
    db.Mushroom.create(newMushroom).then(async function(mushroom) {
      //add association with icons
      let mushroomIcons = await mushroom.setIcons(iconsArr);
      let mushroomAttributes = await mushroom.setAttributes(attributesArr);
      res.json({
        mushroom: mushroom,
        icons: mushroomIcons,
        attributes: mushroomAttributes,
       });
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
