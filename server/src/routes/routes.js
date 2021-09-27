export default app => {
  const vitamins = require("../controllers/vitaminsController.js");
  
  app.get("/api/vitamins/:vitaminId", vitamins.findByVitaminId);
  app.post("/api/vitamins", vitamins.createVitamin);
}