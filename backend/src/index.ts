import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res)=>{
   res.send("Server is up and running");
})

app.listen(PORT, ()=>console.log(`Running on http://localhost:${PORT}`)
)

// use node --import=jsx --watch src/index.ts