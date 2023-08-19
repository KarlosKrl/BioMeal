import prismadb from "lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req) {
  // luam task-ul
  const res = await req.json(); // am luat body-ul request-ului
  const { value } = res;
  console.log(value);

  // adaugam task-ul in baza de date
  const task = await prismadb.todo.create({ data: { taskName: value } });

  return NextResponse.json(task);
}

export async function GET() {
  return NextResponse.json(await prismadb.todo.findMany());
}

export async function PUT(req) {
  const res = await req.json();
  const { id, isCompleted, taskName } = res;

  if (taskName === undefined) {
    const task = await prismadb.todo.update({
      where: { id },
      data: { isCompleted: !isCompleted },
    });
  } else {
    const task = await prismadb.todo.update({
      where: { id },
      data: { taskName: taskName },
    });
  }
  return NextResponse.json("OK");
}
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    await prismadb.todo.delete({
      where: { id },
    });
  }
  return NextResponse.json("OK");
}
