import {useEffect, useCallback} from 'react';
import {getDBConnection, seed} from '../db';

const useLoadData = () => {
  const loadData = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await seed(db);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);
};

export default useLoadData;
