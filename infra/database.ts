import { Client, QueryConfig } from "pg";

const query = async (queryObject: string | QueryConfig<any[]>) => {
  const client = new Client({
    host: process.env.POSTGRES_HOST as string,
    port: process.env.POSTGRES_PORT as number | undefined,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();

  try {
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
  }
};

export default {
  query: query,
};
