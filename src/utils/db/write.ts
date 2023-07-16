/**
 * This file contains function that makes write in database
 * @example
 *
 * @function saveItems().
 *
 */

import {enablePromise, SQLiteDatabase} from 'react-native-sqlite-storage';
import {ITablesName} from '../../model';

enablePromise(true);

export const saveItems = async <T extends object>(
  db: SQLiteDatabase,
  rows: T,
  tableName: ITablesName,
) => {
  try {
    if (!rows) {
      return;
    }

    const columnNames = Object.keys(rows);

    const placeholders = columnNames.map(() => '?').join(',');

    const values = Object.values(rows);

    const query = `INSERT INTO ${tableName}(${columnNames.join(
      ',',
    )}) VALUES (${placeholders})`;

    return db.executeSql(query, values.flat());
  } catch (error: any) {
    console.log(error);
  }
};
