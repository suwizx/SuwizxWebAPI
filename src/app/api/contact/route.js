import prisma from "../../lib/prisma";

export async function GET() {
  try {
    const educations = await prisma.contact.findMany();
    return Response.json(educations)
  }

  catch (error) {
    console.error(error)
    return Response.json(error)
  }

}

export async function POST() {
  return Response.json({msg:"POST method is not a allowable now"},{status:400})
}