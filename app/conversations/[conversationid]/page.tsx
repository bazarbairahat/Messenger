import getConversationByid from "@/app/actions/getConversationByid";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmtyState";
import Header from "./components/Header";
import Body from "./components/Body";
import { Form } from "react-hook-form";

interface IParams {
    conversationId: string;
};

const ConversationId = async ({ params }: { params: IParams }) => {
    const conversation =  await getConversationByid(params.conversationId);
    const messages = await getMessages(params.conversationId)

    if (!conversation) {
        return (
            <div
            className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
            <EmptyState />
            </div>
            </div>
        );
    }

    return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
            <Header conversation={conversation} />
            <Body initialMessages={messages} />
            <Form />
            </div>
        </div>
    )
};

export default ConversationId;