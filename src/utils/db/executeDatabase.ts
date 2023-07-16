/**
 * This file function that create the database if it not exist
 * and execute Query that comes from write and read files
 */

import {
  DEBUG,
  SQLiteDatabase,
  Transaction,
  enablePromise,
  openDatabase,
} from 'react-native-sqlite-storage';
import {DATABASE_TABLE_QUERY} from './query';

enablePromise(true);
DEBUG(true);

const getDBConnection = async () => {
  return openDatabase({name: 'model-data.db'});
};

const executeQuery = (
  db: Transaction | SQLiteDatabase,
  query: string,
  params: any = [],
  // callback?: StatementCallback,
  // errorCallback?: StatementErrorCallback,
) => {
  if (query) {
    return db.executeSql(query, params);
  }
};

const createTable = async (db: SQLiteDatabase, query: string) => {
  await db.transaction(async tx => {
    await executeQuery(tx, query, []);
  });
};

const createDataBase = async (db: SQLiteDatabase) => {
  if (DATABASE_TABLE_QUERY && db) {
    await DATABASE_TABLE_QUERY.forEach((query: string) => {
      createTable(db, query);
    });
    return true;
  }
};

export {getDBConnection, createDataBase, executeQuery};
