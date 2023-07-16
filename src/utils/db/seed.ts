import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {INote, IProductDetails} from '../../model';
import {saveItems, createDataBase} from '.';

/**
 * This file will make seed to data after create the database
 *
 */
// const seedImage ={
//  img1: require('../../assets/images/product1.png'),
//   img2:require('../../assets/images/product2.png')
//   img3:require('../../assets/images/product3.png')
//   img4:require('../../assets/images/product4.png')

// }
const models: IProductDetails[] = [
  {
    id: 1,
    code: 'M001',
    name: 'Model 1',
    type: 'Type 1',
    cost: 100,
    category: 'Category 1',
    description: 'This is Model 1',
    imageUrl: '`~/assets/images/product1.png',
  },
  {
    id: 2,
    code: 'M002',
    name: 'Model 2',
    type: 'Type 2',
    cost: 200,
    category: 'Category 1',
    description: 'This is Model 2',
    imageUrl: '~/assets/images/product2.png',
  },
  {
    id: 3,
    code: 'M003',
    name: 'Model 3',
    type: 'Type 1',
    cost: 150,
    category: 'Category 2',
    description: 'This is Model 3',
    imageUrl: '~/assets/images/product3.png',
  },
  {
    id: 4,
    code: 'M004',
    name: 'Model 4',
    type: 'Type 2',
    cost: 250,
    category: 'Category 2',
    description: 'This is Model 4',
    imageUrl: '~/assets/images/product3.png',
  },
];

const notes: INote[] = [
  {
    id: 1,
    by: 'John Doe',
    date: new Date(),
    details: 'This is a note for Model 1',
    model_id: 1,
  },
  {
    id: 2,
    by: 'Jane Doe',
    date: new Date(),
    details: 'This is another note for Model 1',
    model_id: 1,
  },
  {
    id: 3,
    by: 'John Smith',
    date: new Date(),
    details: 'This is a note for Model 2',
    model_id: 2,
  },
  {
    id: 4,
    by: 'Jane Smith',
    date: new Date(),
    details: 'This is another note for Model 2',
    model_id: 2,
  },
  {
    id: 5,
    by: 'John Brown',
    date: new Date(),
    details: 'This is a note for Model 3',
    model_id: 3,
  },
  {
    id: 6,
    by: 'Jane Brown',
    date: new Date(),
    details: 'This is another note for Model 3',
    model_id: 3,
  },
  {
    id: 7,
    by: 'John Black',
    date: new Date(),
    details: 'This is a note for Model 4',
    model_id: 4,
  },
  {
    id: 8,
    by: 'Jane Black',
    date: new Date(),
    details: 'This is another note for Model 4',
    model_id: 4,
  },
];

export const seed = async (db: SQLiteDatabase) => {
  try {
    let count = 0;
    await createDataBase(db).then(async () => {
      for (let i = 0; i < models.length; i++) {
        await saveItems(db, models[i], 'models');
        await saveItems(db, notes[count], 'notes');
        await saveItems(db, notes[count + 1], 'notes');
        count += 2;
      }
    });
    return true;
  } catch (error: any) {
    console.log(`Error : ${error.message}`);
    return false;
  }
};
