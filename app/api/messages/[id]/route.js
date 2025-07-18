import connectDB from '@/config/database';
import Message from '@/models/Message';

export const dynamic = 'force-dynamic';

// PUT /api/messages/:id

export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const { id } = await params;

    const message = await Message.findById(id);

    if (!message) {
      return new Response('Message Not Found', { status: 404 });
    }

    //Verify ownership
    // if (message.recipient.toString() !== userId) {
    //   return new Response('Unauthorized', { status: 401 });
    // }

    //Update message to read/unread

    message.read = !message.read;

    await message.save();

    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};


// DELETE /api/messages/:id
export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    const { id } = await params;

    const message = await Message.findById(id);

    if (!message) {
      return new Response('Message Not Found', { status: 404 });
    }

    //Verify ownership
    // if (message.recipient.toString() !== userId) {
    //   return new Response('Unauthorized', { status: 401 });
    // }

    await message.deleteOne()

    return new Response('Message Deleted', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
