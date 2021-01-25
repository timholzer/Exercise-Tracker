const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlroutes.js")(app);
require("./routes/apiroutes.js")(app);

mongoose.connect(
    rocess.env.MONGODB_URI || "mongodb://localhost/workout",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});

var path = require("path");

module.exports = function(app){ 
  app.get("/exercise",function (req,res){   
      res.sendFile(path.join(__dirname,"../public/exercise.html"));
  });

  app.get("/",function(req,res){    
      res.sendFile(path.join(__dirname,"../public/index.html"));
  });

  app.get("/stats",function(req,res){   
      res.sendFile(path.join(__dirname,"../public/stats.html"));
  });

}