const express = require ("express");
const morgan = require ("morgan");
const models = require('./models');
const app = express();
const layout = require("./views/layout")
const bodyParser = require("body-parser");
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/wiki', wikiRouter);

app.get("/", (req, res) => {
  console.log("Req Body", req.body);
  res.send(layout(""));
})

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
})


models.db.authenticate().
then(() => {
  console.log('connected to the database');
})


const PORT = 1338;

const init = async() => {
  await models.db.sync({force:true})
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
  })

}

init();
