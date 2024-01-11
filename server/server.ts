import { app } from "./app";
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
