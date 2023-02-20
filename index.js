const express = require("express")

const app = express();

app.use(express.json());

app.post("/api/sum", (req, res) => {
    const numbers = req.body.numbers;

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return res.json({
        sum: sum
    })
})

app.post("/api/product", (req, res) => {
    const numbers = req.body.numbers;
    
    let product = 1;

     for(let i = 0; i < numbers.length; i++){
        product *= numbers[i];
    }

    return res.json({
        product: product
    })
})

app.listen(5000, () => {
    console.log("App started running");
})