const express = require("express");
const bookings = require("./bookings.json");

const app = express();

app.use(express.json());

const port = 8080;

const booking = bookings;

app.get("/", (req, res) => {
  res.send("GET it's working, Go to /bookings to see all bookings");
});

// Read all bookings
app.get("/bookings", (req, res) => {
  res.send(booking);
});

// Create a new booking
app.post("/bookings", (req, res) => {
  const {
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
  } = req.body;

  const newBooking = {
    id: booking.length + 1,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
  };

  if (
    !newBooking.title ||
    !newBooking.firstName ||
    !newBooking.surname ||
    !newBooking.email ||
    !newBooking.roomId ||
    !newBooking.checkInDate ||
    !newBooking.checkOutDate
  ) {
    return res.status(400).json("Please include all property of the booking");
  }

  booking.push(newBooking);

  res.send(booking);
});

// Read one booking, specified by an ID
app.get("/bookings/:id", (req, res) => {
  const foundId = booking.find((i) => i.id === Number(req.params.id));

  if (foundId) {
    res.status(200).send(foundId);
  }

  res.status(404).send("booking not found");
});

// Delete a booking, specified by an ID
app.delete("/bookings/:id", (req, res) => {
  const foundId = booking.find((i) => i.id === Number(req.params.id));

  if (foundId) {
    return res.status(200).json({
      msg: `Booking id: ${req.params.id} deleted `,
      "All bookings: ": booking.filter((i) => i.id !== Number(req.params.id)),
    });
  }

  res.status(404).send("booking not found");
});

app.listen(port, () => {
  console.log(`Listen in http://localhost:${port}`);
});
