import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const { MAILBOXES_KEY } = process.env;

export default async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }

    const apiKey = req.query.key;

    if (apiKey !== MAILBOXES_KEY) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const allMailboxes = await prisma.mailbox.findMany();
    res.status(200).json(allMailboxes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
};
