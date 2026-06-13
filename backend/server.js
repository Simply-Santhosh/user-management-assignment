require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alert: true });
    console.log("Database Connected Successfully");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Database Connection Failed", error);
  }
};

startServer();
