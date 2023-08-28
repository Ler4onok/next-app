import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request) => {
  console.log({ request });
  const { userId, prompt, tag } = await request.json();

  console.log({ userId, prompt, tag });
  try {
    connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
