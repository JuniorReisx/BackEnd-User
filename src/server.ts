import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { supabase } from "../src/database/db"; 
import routesUser from "./routes/user.routes";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use("/", routesUser);

async function testConnection() {
  const { error } = await supabase.from('User').select('*').limit(1);
  if (error) {
    console.error("Error connecting to Supabase:", error.message);
  } else {
    console.log("Connected to Supabase successfully.");
  }
}

testConnection();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
