import mongoose, { ConnectOptions } from "mongoose";

type DBInput = {
  db: string;
};
export default () => {
  const connect = () => {
    mongoose
      .connect(
        `mongodb+srv://victoredu22:Cz3mRMI1M7ayxSjW@cluster0.3xcjkc4.mongodb.net/db`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoIndex: true,
        } as ConnectOptions
      )
      .then((db) => {
        console.log("Database Connected Successfuly.");
      })
      .catch((err) => {
        console.log("Error Connectiong to the Database");
      });
  };
  connect();
};
