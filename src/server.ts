import express from 'express';
import { categoriesRoutes } from './routes/categories.routes'

const app = express()
app.use(express.json())

//Routes
app.use("/categories", categoriesRoutes)

//Server start
app.listen(3333, () => console.log("Server is running!"))