import express, { urlencoded }  from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js"
import reservationRouter from "./routes/reservationRoute.js"


const app = express();
dotenv.config({path: "./config/config.env"});

app.use(
    cors({                                                                      // 4)-> Here we are using the cors as the middleware.
    origin: ['http://localhost:5173'],                                         // 1) -> In this we are providing the path to connect frontend with the backend.    2)-> if we wants to connect the multiple frontend with backend the use by providing the , as it is in the array.
    methods: ['POST', 'GET', 'PUT', 'DELETE'],                                                          // 3)-> In this we are using the "POST" method only as we wants to send the data from frontend to backend.
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation" , reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);
// -----------------chatgpt-------------------
app.use((req, res, next) => {
  console.log(`error->${req.method}  ${req.url}`);
  next();
});
// ------------------------------------

// console.log(`MongoDB URI: ${process.env.MONGO_URI}`)

export default app;