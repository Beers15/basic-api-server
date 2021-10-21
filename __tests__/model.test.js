'use strict';

//both models have same schema, including test for just 1 model
const { db, Food } = require('../src/models/');
// Initialize any things that our tests need
beforeAll(async () => {
  await db.drop();
  // make sure that my tables exist.
  await db.sync(); // creates our tables if they do not exist
});

// remove any side effects from our test
afterAll(async () => {
  // drops all table rows within our database instance.  After all tests 
  await db.drop();
});

describe('Testing our sequelize model', () => {
  it('Should be able to create a food item', async () => {
    let newFood = await Food.create({
      title: 'Pineapple Pizza',
      description: 'Absolutely terrible',
    });

    console.log(newFood);
    expect(newFood.id).toBe(1);
    expect(newFood.title).toBe('Pineapple Pizza');
    expect(newFood.description).toBe('Absolutely terrible');
  });

  it('Should be able to delete a food item', async () => {
    await Food.create({
      title: 'Sphagettios',
      description: 'Mighty delicious',
    });

    await Food.destroy({
      where: {
        id: 2,
        title: 'Sphagettios',
        description: 'Mighty delicious',
      },
    });

    let result = await Food.findByPk(2);
    expect(result).toBeNull();
  });

  it('Should be able to update a food item', async () => {
    //using item from first test
    let existingRecord = await Food.findByPk(1);

    console.log(existingRecord);
    expect(existingRecord.id).toBe(1);
    expect(existingRecord.title).toBe('Pineapple Pizza');
    expect(existingRecord.description).toBe('Absolutely terrible');


    existingRecord.title = 'Pepperoni Pizza';
    existingRecord.description = 'No longer terrible';
    existingRecord.save();

    //check to see if updates stuck
    let existingRecordCheck = await Food.findByPk(1);
    expect(existingRecordCheck.id).toBe(1);
    expect(existingRecordCheck.title).toBe('Pepperoni Pizza');
    expect(existingRecordCheck.description).toBe('No longer terrible');
  });

  it('Should be able to get all food items', async () => {
    //adding a 2nd item, 2 total records in db
    await Food.create({
      title: 'Cheeze-bits',
      description: 'Crunchy',
    });

    let allRecords = await Food.findAll();
    expect(allRecords.length).toBe(2);
  });

  it('Should be able to get a specific food item', async () => {
    let result = await Food.findByPk(3);
 
    expect(result.id).toBe(3);
    expect(result.title).toBe('Cheeze-bits');
    expect(result.description).toBe('Crunchy');
  });
});
