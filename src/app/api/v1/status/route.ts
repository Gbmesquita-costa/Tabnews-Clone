import { NextRequest, NextResponse } from "next/server";
import database from "infra/database";

export const GET = async (req: NextRequest) => {
  const result = await database.query("SELECT 1 + 1 as sum");
  console.log(result.rows);

  return NextResponse.json(
    { message: "Alunos do curso.dev são sensacionais" },
    {
      status: 200,
    },
  );
};
