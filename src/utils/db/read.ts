/**
 * This file contains function that makes read from database
 * @function getList().
 * @function getOne().
 *
 */

import {ResultSet, SQLiteDatabase} from 'react-native-sqlite-storage';
import {ITablesName} from '../../model';

const handleWhatToReturn = async (needToReturn: string[] | undefined) => {
  if (needToReturn) {
    return needToReturn.join(',');
  }
  return '*';
};

export const getList = async (
  db: SQLiteDatabase,
  tableName: ITablesName,
  needToReturn?: string[],
): Promise<any[]> => {
  try {
    const sql = `SELECT ${await handleWhatToReturn(
      needToReturn,
    )} FROM ${tableName}`;

    const results = await db.executeSql(sql, []);

    return await handleResult(results);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get List');
  }
};

export const getOne = async (
  db: SQLiteDatabase,
  modelId: number,
): Promise<any> => {
  try {
    const sqlModel = 'SELECT * FROM models WHERE id = ?';
    const sqlNote = 'SELECT * FROM notes WHERE model_id = ?';
    const resultOfModel: any = await db.executeSql(sqlModel, [modelId]);

    if (!resultOfModel[0].rows.length) {
      throw Error(`Model with ID ${modelId} not found`);
    }
    const resultOfNotes: any = await db.executeSql(sqlNote, [modelId]);

    return {
      model: resultOfModel[0].rows.item(0),
      notes: await handleResult(resultOfNotes),
    };
  } catch (error) {
    console.error(error);
    throw Error('Failed to get data');
  }
};

const handleResult = async (results: ResultSet[]) => {
  const items: any[] = [];
  results?.forEach((result: any) => {
    for (let i = 0; i < result.rows.length; i++) {
      items.push(result.rows.item(i));
    }
  });
  return items;
};

export const searchList = async (
  db: SQLiteDatabase,
  tableName: ITablesName,
  column: string,
  searchTerm: string,
) => {
  const queryString = `SELECT * FROM ${tableName} WHERE ${column} LIKE ?`;
  const params = [`%${searchTerm}%`];

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        queryString,
        params,
        (_, data) => {
          let result = [];
          for (let i = 0; i < data.rows.length; i++) {
            result.push(data.rows.item(i));
          }
          resolve(result);
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });
};
