import { MessageCircle } from "lucide-react";
import Link from "next/link";

const Chat = () => {
  return (
    <Link href="https://wa.me/2349030627892" target="_blank">
      <div className="flex items-center justify-center h-16 w-16 bg-green-500 text-white rounded-full fixed bottom-10 right-10 cursor-pointer">
        <MessageCircle />
      </div>
    </Link>
  );
};

export default Chat;
