import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { content } = req.body;
      const mail = await prisma.mailbox.create({
        data: {
          content,
        },
      });
      res.status(201).json(mail);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
