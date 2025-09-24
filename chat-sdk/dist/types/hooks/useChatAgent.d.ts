export interface Message {
    role: "user" | "assistant";
    content: string;
}
interface UseChatAgentProps {
    apiUrl: string;
    agentId: string;
    apiKey?: string;
    initialMessages?: Message[];
}
export declare const useChatAgent: ({ apiUrl, agentId, apiKey, initialMessages }: UseChatAgentProps) => {
    messages: Message[];
    input: string;
    isLoading: boolean;
    error: string | null;
    setInput: import("react").Dispatch<import("react").SetStateAction<string>>;
    sendMessage: (e?: React.FormEvent, messageContent?: string) => Promise<void>;
    setMessages: import("react").Dispatch<import("react").SetStateAction<Message[]>>;
};
export {};
