const Sequelize = require('sequelize');
const router = require("express").Router();
const { addPage } = require("../views");
const { Page } = require("../models")
//GET
router.get("/", (req, res, ) => {
  res.send("got to GET /wiki/");
})

//POST
router.post("/", async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  // const page = new Page({
  //   title:{

  //   },
  //   content:{

  //   }
  try {
    console.log("Req Body,", req.body);
    const newPage = await Page.create(req.body);
    res.send(newPage);
  }
  catch (error) {
    next(error);
  }
});
// make sure we only redirect *after* our save is complete!
// note: `.save` returns a promise.
//   try {
//     await page.save();
//     res.redirect('/');
//   } catch (error) { next(error) }
// });



//GET
router.get("/add", (req, res, next) => {
  res.send(addPage());
})

module.exports = router;
