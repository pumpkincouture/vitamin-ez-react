class VitaminRepository {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS vitamins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT)`

    return this.dao.run(sql);
  }

  seedInitialData() {
    const sql = `
    INSERT INTO vitamins(name, description) VALUES(?, ?)
    `
    const values = ['Vitamin A', 'One type comes from animal sources of food. It helps you see at night, make red blood cells, and fight off infections. The other type is in plant foods. It helps prevent damage to cells and an eye problem called age-related macular degeneration. (But too much vitamin A can hurt your liver.) Eat orange veggies and fruits like sweet potato and cantaloupe, spinach and other greens, dairy foods, and seafood such as shrimp and salmon.'];
    console.log('did we seed');
    return this.dao.run(sql, values);  
  }

  getById(id) {
    return this.dao.get(
      `SELECT * FROM vitamins WHERE id = ?`,
      [id])
  }

  create(name, description) {
    return this.dao.run(
      'INSERT INTO vitamins (name, description) VALUES (?, ?)',
      [name, description])
  }
}

export { VitaminRepository };