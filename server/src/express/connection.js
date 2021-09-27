export const initializeServer = (express) => {
  app.get("/api/:id", (req, res) => {
    res.json({
      "id": req.params.id,
      "name": "Dumb",
      "description": "Another dumb thing"
    });
  });

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  });
}