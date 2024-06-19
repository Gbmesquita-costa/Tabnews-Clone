interface ApiStatusProps {
  updated_at: Date;
  dependencies: {
    database: {
      version: string;
      max_connections: number;
      opened_connections: number;
    };
  };
}

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const statusCode = response.status;

  expect(statusCode).toBe(200);

  const { updated_at, dependencies } =
    (await response.json()) as ApiStatusProps;

  const parsedUpdatedAt = new Date(updated_at).toISOString();
  expect(updated_at).toEqual(parsedUpdatedAt);

  expect(dependencies.database.version).toEqual("16.0");
  expect(dependencies.database.max_connections).toEqual(100);

  expect(dependencies.database.opened_connections).toEqual(1);
});
