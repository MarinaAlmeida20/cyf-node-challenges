const express = require("express");
const harrow = require("../data/Harrow.json");
const heathrow = require("../data/Heathrow.json");
const stratford = require("../data/Stratford.json");

const app = express();

app.use(express.json());

const port = 8080;

const allLocationNames = ["harrow", "heathrow", "stratford"]
const allLocationObjects = [harrow, heathrow, stratford]; // all location objects

const stratfordPharmacies = stratford;

app.get("/", (req, res) => {
  // res.send("hello");
  res.send({ msg: "All Pharmacies", data: allPharmacies });
});

// returns pharmacies list for stratford
app.get("/pharmacies", (req, res) => {
  // const allpharmacies = []
  res.json(stratfordPharmacies);
});

// returns colleges list for stratford
app.get("/colleges", (req, res) => {
  const colleges = stratfordPharmacies.colleges;
  res.send(colleges);
});

// returns doctors list for stratford
app.get("/doctors", (req, res) => {
  const doctors = stratfordPharmacies.doctors;
  res.send(doctors);
});

// returns hospitals list for stratford
app.get("/hospitals", (req, res) => {
  const hospitals = stratfordPharmacies.hospitals;
  res.send(hospitals);
});

// level 300
// returns pharmacies list for :city
app.get("/:city/pharmacies", (req, res) => {

  let city = req.params.city;

  if (city) {
    let cityIndex = allLocationNames.indexOf(city)
      const pharmacies = allLocationObjects[cityIndex].pharmacies;
      return res.json(pharmacies);
    } else {
    res.json("Ops, something goes wrong!");
  }
});

// returns colleges list for :city
app.get("/:city/colleges", (req, res) => {

  let city = req.params.city;

  if (city) {
    let cityIndex = allLocationNames.indexOf(city)
      const colleges = allLocationObjects[cityIndex].colleges;
      return res.json(colleges);
    } else {
      res.json("Ops, something goes wrong!");
    }
});

// returns doctors list for :city
app.get("/:city/doctors", (req, res) => {

  let city = req.params.city;

  if (city) {
    let cityIndex = allLocationNames.indexOf(city)
      const doctors = allLocationObjects[cityIndex].doctors;
      return res.json(doctors);
    } else {
    res.json("Ops, something goes wrong!");

    }
});

// returns hospitals list for :city
app.get("/:city/hospitals", (req, res) => {
  let city = req.params.city;

  if (city) {
  let cityIndex = allLocationNames.indexOf(city)
    const hospitals = allLocationObjects[cityIndex].hospitals;
    return res.send(hospitals);
  } else {
  res.send("Ops, something goes wrong! Check the path again please!");
}
});


app.listen(port, () => {
  console.log(`Listen in http://localhost:${port}`);
});
