import express from "express";
import questionRoutes from "./routes/question.mjs";
import answerRoutes from "./routes/answer.mjs";
import voteRoutes from "./routes/vote.mjs";
import { swaggerUi, specs } from './swagger.mjs'


const app = express();
const port = 4000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use("/questions", questionRoutes);
app.use("/", answerRoutes);  // เพื่อให้ path /questions/:id/answers ใช้งานได้
app.use("/", voteRoutes);

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
