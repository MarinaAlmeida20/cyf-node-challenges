const express = require("express");
const harrow = require("../data/Harrow.json");
const heathrow = require("../data/Heathrow.json");
const stratford = require("../data/Stratford.json");

const app = express();

app.use(express.json());

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

// level 300
// returns pharmacies list for :city
app.get("/:city/pharmacies", (req, res) => {
  console.log(req.params.city);

  if (req.params.city === "stratford") {
    const pharmacies = stratford.pharmacies;
    return res.send(pharmacies);
  }
  if (req.params.city === "harrow") {
    const pharmacies = harrow.pharmacies;
    return res.send(pharmacies);
  }
  if (req.params.city === "heathrow") {
    const pharmacies = heathrow.pharmacies;
    return res.send(pharmacies);
  }
  res.send("Ops, something goes wrong! Check the path again please!");
});

// returns colleges list for :city
app.get("/:city/colleges", (req, res) => {
  console.log(req.params.city);

  if (req.params.city === "stratford") {
    const colleges = stratford.colleges;
    return res.send(colleges);
  }
  if (req.params.city === "harrow") {
    const colleges = harrow.colleges;
    return res.send(colleges);
  }
  if (req.params.city === "heathrow") {
    const colleges = heathrow.colleges;
    return res.send(colleges);
  }
  res.send("Ops, something goes wrong! Check the path again please!");
});

// returns doctors list for :city
app.get("/:city/doctors", (req, res) => {
  console.log(req.params.city);

  if (req.params.city === "stratford") {
    const doctors = stratford.doctors;
    return res.send(doctors);
  }
  if (req.params.city === "harrow") {
    const doctors = harrow.doctors;
    return res.send(doctors);
  }
  if (req.params.city === "heathrow") {
    const doctors = heathrow.doctors;
    return res.send(doctors);
  }
  res.send("Ops, something goes wrong! Check the path again please!");
});

// returns hospitals list for :city
app.get("/:city/hospitals", (req, res) => {
  console.log(req.params.city);

  if (req.params.city === "stratford") {
    const hospitals = stratford.hospitals;
    return res.send(hospitals);
  }
  if (req.params.city === "harrow") {
    const hospitals = harrow.hospitals;
    return res.send(hospitals);
  }
  if (req.params.city === "heathrow") {
    const hospitals = heathrow.hospitals;
    return res.send(hospitals);
  }
  res.send("Ops, something goes wrong! Check the path again please!");
});

app.listen(port, () => {
  console.log(`Listen in http://localhost:${port}`);
});
