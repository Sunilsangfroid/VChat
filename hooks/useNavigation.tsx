import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MessageSquare, Users, MessageCircleDashed} from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const useNavigation = () => {
  const pathname = usePathname();

  const requestsCount = useQuery(api.requests.count);
  const conversations = useQuery(api.conversations.get);

  const unseenMessagesCount = useMemo(() => {
    return conversations?.reduce((acc, curr) => {
      return acc + curr.unseenCount;
    }, 0);
  }, [conversations]);

  const paths = useMemo(
    () => [
      {
        name: "Conversations",
        href: "/conversations",
        icon: <MessageSquare />,
        active: pathname.startsWith("/conversations"),
        count: unseenMessagesCount,
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <Users />,
        active: pathname === "/friends",
        count: requestsCount,
      },
      {
        name: "Status",
        href: "/",
        icon: <MessageCircleDashed />,
        active: pathname.startsWith("/status"),
        count: unseenMessagesCount,
      },
    ],
    [pathname, requestsCount, unseenMessagesCount]
  );

  return paths;
};
