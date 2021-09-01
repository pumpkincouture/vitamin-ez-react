const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/1", (req, res) => {
  res.json({
    "id": 1,
    "name": "Vitamin A",
    "description": "One type comes from animal sources of food. It helps you see at night, make red blood cells, and fight off infections. The other type is in plant foods. It helps prevent damage to cells and an eye problem called age-related macular degeneration. (But too much vitamin A can hurt your liver.) Eat orange veggies and fruits like sweet potato and cantaloupe, spinach and other greens, dairy foods, and seafood such as shrimp and salmon."
  });
});

app.get("/api/2", (req, res) => {
  res.json({
    "id": 2,
    "name": "Vitamin C",
    "description": "Despite claims made by some over-the-counter remedies, it doesn’t prevent colds. But once you have symptoms, drink orange or grapefruit juice to help yourself stay hydrated. Your symptoms may not go away any sooner,  but staying hydrated can help you feel better while your symptoms run their course.  Your body also needs vitamin C to help your bones, skin, and muscles grow. You'll get enough by including bell peppers, papaya, strawberries, broccoli, cantaloupe, leafy greens, and other fruits and veggies in your diet."
  });
});

app.get("/api/3", (req, res) => {
  res.json({
    "id": 3,
    "name": "Vitamin D",
    "description": "Like calcium, it keeps your bones strong and helps your nerves carry messages. It also plays a role in fighting germs. Careful time in the sun -- 10 to 15 minutes on a clear day, without sunscreen -- is the best source. Or you could eat fish such as salmon, tuna, and mackerel. There's a little in egg yolks, too. You can also get milk and sometimes orange juice with added vitamin D."
  });
});

app.get("/api/4", (req, res) => {
  res.json({
    "id": 4,
    "name": "Vitamin E",
    "description": "It’s something called an antioxidant, which protects your cells from damage caused by cigarette smoke, pollution, sunlight, and more. Vitamin E also helps your cells talk to each other and keeps blood moving. Sunflower seeds and nuts including almonds, hazelnuts, and peanuts are good sources. If you’re allergic to those, vegetable oils (like safflower and sunflower), spinach, and broccoli have vitamin E, too."
  });
});

app.get("/api/5", (req, res) => {
  res.json({
    "id": 5,
    "name": "Vitamin K",
    "description": "You need it for blood clotting and healthy bones. People who take warfarin, a blood-thinner, have to be careful about what they eat, because vitamin K stops the drug from working. A serving of leafy greens -- like spinach, kale, or broccoli -- will give you more than enough K for the day. A Japanese dish called natto, made from fermented soybeans, has even more."
  });
});

app.get("/api/6", (req, res) => {
  res.json({
    "id": 6,
    "name": "Vitamin B1",
    "description": "It helps your body turn food into energy. It's also key for the structure of brain cells. Legumes, like black beans and lentils, and seeds are go-to sources. Pork and whole grains are also good. Most people get enough thiamin from the foods they eat, but pregnant and breastfeeding women need a little more. People with diabetes tend to have low levels of it."
  });
});

app.get("/api/7", (req, res) => {
  res.json({
    "id": 7,
    "name": "Vitamin B2",
    "description": "You could get enough for the day from a good breakfast! It’s added to many fortified breads and grain products and also found naturally in eggs, asparagus and other green veggies, and milk. Your cells need it to work right, and it might help prevent migraines. (It gets its name from the Latin word 'flavus' for yellow -- a lot of B2 will turn your pee a bright color.)"
  });
});

app.get("/api/8", (req, res) => {
  res.json({
    "id": 8,
    "name": "Vitamin B3",
    "description": "This is a family of compounds that your body needs to turn food into energy and store it. It helps protect your skin and tissues, too, and may improve your cholesterol levels. Three ounces of canned tuna has nearly all you’ll need in a day. Or serve up some chicken, turkey, salmon, or other lean meats. You're vegan? Eat crimini mushrooms, peanuts, and peanut butter."
  });
});

app.get("/api/9", (req, res) => {
  res.json({
    "id": 9,
    "name": "Vitamin B5",
    "description": "Pantothenic acid is a vitamin, also known as vitamin B5. It is widely found in both plants and animals including meat, vegetables, cereal grains, legumes, eggs, and milk."
  });
});

app.get("/api/10", (req, res) => {
  res.json({
    "id": 10,
    "name": "Vitamin B7",
    "description": "Biotin, also known as vitamin H or B7, is a water-soluble vitamin that helps the body metabolize fats, carbohydrates, and protein. It is widely found in both plants and animals including meat, vegetables, cereal grains, legumes, eggs, and milk."
  });
});

app.get("/api/11", (req, res) => {
  res.json({
    "id": 11,
    "name": "Vitamin B6",
    "description": "This vitamin plays a role in more than 100 different reactions in your body. Some research has shown that B6 may help protect against memory loss, colorectal cancer, and PMS. It’s found in many kinds of foods including leafy and root vegetables; non-citrus fruits like bananas, avocados, and watermelon; legumes; and fish, poultry, and lean meat."
  });
});

app.get("/api/12", (req, res) => {
  res.json({
    "id": 12,
    "name": "Vitamin B12",
    "description": "Rev up before hitting the gym with a snack like a hard-boiled egg or cereal with vitamins added. B12 helps your body break down food for energy. Some athletes and trainers take supplements before workouts, but these don’t really boost your success if you're getting enough in your meals."
  });
});

app.get("/api/13", (req, res) => {
  res.json({
    "id": 13,
    "name": "Vitamin B9",
    "description": "Vitamin B9 is also called folate or folic acid; folic acid is the synthetic form of B9, found in supplements and fortified foods, while folate occurs naturally in foods. Folic acid is crucial for proper brain function and plays an important role in mental and emotional health. It aids in the production of DNA and RNA, the body's genetic material, and is especially important when cells and tissues are growing rapidly, such as in infancy, adolescence, and pregnancy."
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});