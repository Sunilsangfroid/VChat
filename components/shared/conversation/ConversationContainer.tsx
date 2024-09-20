import { Card } from "@/components/ui/card";


type Props = React.PropsWithChildren<{}>;

const ConversationContainer = ({ children }: Props) => {
  return (
    <Card className="w-full h-[calc(100svh-32px)] lg:h-full p-2 flex flex-col gap-2 bg-[#e2e8f0]">
      {children}
    </Card>
  );
};

export default ConversationContainer;
