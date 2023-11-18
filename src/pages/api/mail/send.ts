import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const { content, name = "anonymous" } = req.query;

    if (req.method === "POST") {
      const mail = await prisma.mailbox.create({
        data: {
          content,
        },
      });
      res.status(201).json(mail);
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
