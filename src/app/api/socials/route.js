import prisma from "../../lib/prisma";

export async function GET() {
  try {
    const socials = await prisma.socials.findMany({
        where: {
            NOT: [
                {name : 'mail'}
            ]
        }
    })
    return Response.json(socials)
  }

  catch (error) {
    console.error(error)
    return Response.json(error)
  }

}

export async function POST() {
  return Response.json({msg:"POST method is not a allowable now"},{status:400})
}