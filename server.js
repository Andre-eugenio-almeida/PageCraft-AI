require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

app.post("/gerar", async (req, res) => {

    try {

        const { prompt, texto } = req.body;

        const resposta = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: "openai/gpt-oss-120b",
                    messages: [
                        {
                            role: "system",
                            content: prompt
                        },
                        {
                            role: "user",
                            content: texto
                        }
                    ]
                })
            }
        );

        const dados = await resposta.json();

        res.json({
            resultado: dados.choices[0].message.content
        });

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            erro: erro.message
        });

    }

});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

