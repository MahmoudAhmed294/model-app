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

const createTable = async (
  db: SQLiteDatabase,
  query: string,
): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        query,
        [],
        () => {
          resolve();
        },
        error => {
          reject(error);
        },
      );
    });
  });
};

const createDataBase = async (db: SQLiteDatabase) => {
  if (DATABASE_TABLE_QUERY && db) {
    DATABASE_TABLE_QUERY.forEach((query: string) => {
      createTable(db, query);
    });
    return true;
  }
};

export {getDBConnection, createDataBase};
