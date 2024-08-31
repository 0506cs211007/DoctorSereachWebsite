const express = require("express");
// const alert=require("alert");
const app = express();
const http=require("http").Server(app);
// const popups=require("popups");
require("./db_connecction");
const path = require("path");
// global.window={};
const Listings = require("./DB_model/Doctor_Listing");
 const LoginData = require("./DB_model/LoginData");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, resp) => {
  const data = await Listings.find({});
  resp.render("Home.ejs",{ data });
});


app.get("/DoctorSearch/ContactUs", (req, resp) => {
  resp.render("contactUs.ejs");
});

app.get("/DoctorSearch/services", (req, resp) => {
  resp.render("services.ejs");
});



app.get("/DoctorSearch/ourTeam", async(req, resp) => {
  const allListings = await Listings.find({});
  resp.render("ourTeam.ejs", { allListings });
});

// app.get("/renterhub/:id",async(req,resp)=>{
//   let {id}=req.params;
//   const  listing=await Listings.findById(id);
// resp.render("show.ejs",{listing});

// })

app.post("/DoctorSearch/SignUp_verification", async (req, resp) => {
  // let data=await LoginData.insertOne(req.body);
  let formData = req.body;
  let data = await LoginData.insertMany([formData]);
  console.log("this data is by sign up  form ", data);
  resp.redirect("/DoctorSearch");
});

app.post("/DoctorSearch/Login_verification", async (req, resp) => {
  try {
    const data = await LoginData.findOne({ name: req.body.name});
    console.log("this data is by login form ", data);
   
    if (data.password == req.body.password) {
      
   

      resp.redirect("/DoctorSearch");
    } else{
      // resp.redirect("/renterhub/about");
       resp.send("can't login ,please provide wright details");
      resp.redirect("/DoctorSearch");
    }
  } catch {
    // resp.redirect("/renterhub");


    resp.send("incorrect details please provide wright details");
  }
});
console.log("hello");


const PORT =process.env.PORT||3000;

http.listen(PORT, () => {
  console.log("http port ${PORT}connected ");
});
