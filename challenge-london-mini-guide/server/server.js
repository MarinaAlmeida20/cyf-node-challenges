const express = require("express");
const harrow = require("../data/Harrow.json");
const heathrow = require("../data/Heathrow.json");
const stratford = require("../data/Stratford.json");

const app = express();

const port = 8080;

const allPharmacies = [harrow, heathrow, stratford]; // all pharmacies

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

app.listen(port, () => {
  console.log(`Listen in http://localhost:${port}`);
});
