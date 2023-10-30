import prisma from "../../lib/prisma";

export async function GET() {
  try {
    const sidebar = await prisma.myData.findMany({
        where: {
            NOT: [
                {field : 'displayName'},
                {field : 'photoURL'},
            ]
        }});
    return Response.json(sidebar)
  }

  catch (error) {
    console.error(error)
    return Response.json(error)
  }

}

export async function POST() {
  return Response.json({msg:"POST method is not a allowable now"},{status:400})
}