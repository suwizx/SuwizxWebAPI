import prisma from "../../../lib/prisma";

export async function GET(request, context) {
  const slug = context.params.slug

  try {
    const socials = await prisma.socials.findFirst({
      where: { name : slug }
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