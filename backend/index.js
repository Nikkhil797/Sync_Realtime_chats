const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      {
        headers: { "PRIVATE-KEY": "a2dad006-2463-4fdb-8da5-6c8e87bc9457" },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e && e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      console.error("An unexpected error occurred:", e);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
});


app.listen(3001);