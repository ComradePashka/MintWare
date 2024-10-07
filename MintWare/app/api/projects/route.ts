import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const projects = await prisma.project.findMany()
  return Response.json(projects)
}

export async function POST(request: Request) {
  const r = { msg: 'woooot!'}
  return Response.json(r)
}