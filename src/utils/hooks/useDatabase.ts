/**
 * 
 This page contains a custom React hook called useDatabase
 that provides a simple and flexible way to interact with a database.
 The hook uses a set of functions from the  ../db
 module to perform CRUD operations on a specified database table,
 */

import {ITablesName} from '~/model';
import {useState} from 'react';
import {getDBConnection, getList, getOne, saveItems, searchList} from '../db';

interface UseDatabaseResult {
  data: any[];
  error: any;
  isLoading: boolean;
  createItem: (item: any, tablesName: ITablesName) => Promise<void>;
  getOneItem: (id: number, tablesName: ITablesName) => Promise<void>;
  getItems: (tablesName: ITablesName, needToReturn?: string[]) => Promise<void>;
  search: (
    tablesName: ITablesName,
    column: string,
    searchTerm: string,
  ) => Promise<void>;
}

const useDatabase = (): UseDatabaseResult => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getItems = async (
    tablesName: ITablesName,
    needToReturn?: string[],
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const db = await getDBConnection();

      const items = await getList(db, tablesName, needToReturn);

      setData(items);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const createItem = async (
    item: any,
    tablesName: ITablesName,
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const db = await getDBConnection();
      await saveItems(db, item, tablesName);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getOneItem = async (id: number): Promise<void> => {
    setIsLoading(true);
    try {
      const db = await getDBConnection();
      const item = await getOne(db, id);
      setData(item);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const search = async (
    tablesName: ITablesName,
    column: string,
    searchTerm: string,
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const db = await getDBConnection();
      const items = searchList(db, tablesName, column, searchTerm);
      items.then(res => {
        // @ts-ignore
        setData(res);
      });
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {data, error, isLoading, createItem, getOneItem, getItems, search};
};

export default useDatabase;
