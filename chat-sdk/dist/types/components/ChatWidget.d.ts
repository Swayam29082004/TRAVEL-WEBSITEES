import React from "react";
import './ChatWidget.css';
interface ChatWidgetProps {
    apiUrl: string;
    agentId: string;
    apiKey?: string;
    welcomeMessage?: string;
    placeholderText?: string;
    themeColor?: string;
}
export declare const ChatWidget: React.FC<ChatWidgetProps>;
export {};
