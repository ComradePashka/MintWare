import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const projects = await prisma.project.findMany()
  return Response.json(projects)
}

export async function POST(request: Request) {
  let project : Prisma.ProjectCreateInput
  project = request.json()

  // `authority` VARCHAR(64) NOT NULL,
  // `name` VARCHAR(64) NOT NULL,
  // `description` VARCHAR(128) NOT NULL,
  // `token_mint` VARCHAR(64) NOT NULL,
  // `reward_percent` TINYINT NOT NULL DEFAULT 5,
  // `tx` VARCHAR(128) NOT NULL,


  return Response.json(r)
}