import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

// GET /api/messages/unread-count

export const GET = async (request) => {
  try {
    await connectDB();

    //Verify ownership
    // if (message.recipient.toString() !== userId) {
    //   return new Response('Unauthorized', { status: 401 });
    // }

    //Update message to read/unread

    const sessionUser = await getSessionUser();
    const { userId } = sessionUser;

    const count = await Message.countDocuments({
      recipient: userId,
      read: false,
    });

    return new Response(JSON.stringify(count), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
