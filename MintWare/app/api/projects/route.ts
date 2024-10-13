import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const projects = await prisma.project.findMany()
  return Response.json(projects)
}

export async function POST(request: Request) {
  const project: Prisma.ProjectCreateInput = await request.json() as Prisma.ProjectCreateInput
  
  const prisma = new PrismaClient()

  console.log('INPUT PROJECT 0000000000:', project)

  const createProject = (
    authority: string,
    name: string,
    description: string,
    token_mint: string,
    tx: string,
    reward_percent?: number,
    ) => {
    return Prisma.validator<Prisma.ProjectCreateInput>()({    
        authority,
        name,
        description,
        token_mint,
        tx,
        reward_percent,
      })
    }

    let newProject = await prisma.project.create({
      data: createProject(
        project.authority,
        project.name,
        project.description,
        project.token_mint,
        project.tx,
        project.reward_percent,
      )
   })

  // `authority` VARCHAR(64) NOT NULL,
  // `name` VARCHAR(64) NOT NULL,
  // `description` VARCHAR(128) NOT NULL,
  // `token_mint` VARCHAR(64) NOT NULL,
  // `reward_percent` TINYINT NOT NULL DEFAULT 5,
  // `tx` VARCHAR(128) NOT NULL,

  console.log('INPUT PROJECT:', project)
  console.log('NEW PROJECT:', newProject)

  return Response.json(newProject)
}