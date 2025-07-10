import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

// GET /api/messages
export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(JSON.stringify('User ID is required'), {
        status: 401,
      });
    }

    const { userId } = sessionUser;

    const readMessages = await Message.find({ recipient: userId, read: true })
      .sort({ createdAt: -1 }) // Sort read messages in asc order
      .populate('property', 'name');

    const unReadMessages = await Message.find({
      recipient: userId,
      read: false,
    })
      .sort({ createdAt: -1 }) // Sort read messages in asc order
      .populate('property', 'name');

    const messages = [...unReadMessages, ...readMessages];

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

// POST /api/messages
export const POST = async (request) => {
  try {
    await connectDB();

    const { name, email, phone, message, property, recipient } =
      await request.json();

    const sessionUser = await getSessionUser();
    const user = sessionUser?.user;

    // Si está logueado y trata de enviarse un mensaje a sí mismo
    if (user && user.id === recipient) {
      return new Response(
        JSON.stringify({ message: 'Can not send a message to yourself' }),
        { status: 400 }
      );
    }

    const messageData = {
      recipient,
      property,
      name,
      email,
      phone,
      body: message,
    };

    if (user) {
      messageData.sender = user.id;
    }

    const newMessage = new Message(messageData);

    await newMessage.save();

    return new Response(JSON.stringify({ message: 'Message Sent' }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
