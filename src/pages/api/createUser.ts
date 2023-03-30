import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/pages/api/prisma";
import { z, ZodError } from "zod";

/*
 */
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    try {
      const { user } = createUserTest.parse(request.body);
      // Getting ID of list we will add product to.  If none there create one

      const { email, image, name } = user;

      let temp = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!temp) {
        temp = await prisma.user.create({
          data: {
            email: email,
          },
        });
      }
      if (name && image) {
        await prisma.user.update({
          where: {
            email: email,
          },
          data: {
            image: image,
            name: temp.name ? name : temp.name,
          },
        });
      }

      response.status(200);
    } catch (err) {
      if (err instanceof ZodError) {
        response
          .status(400)
          .send(`Wrong Data type Sent =>${JSON.stringify(err)}`);
      } else {
        response.status(418).send(JSON.stringify(err));
      }
    }
  }
}
const createUserTest = z.object({
  expires: z.string(),
  user: z.object({
    email: z.string(),
    image: z.nullable(z.optional(z.string())),
    name: z.nullable(z.optional(z.string())),
  }),
});

export type AuthType = z.infer<typeof createUserTest>;
