import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from '../component/LearningOptions/LearningOptions';
import LinkList from '../component/LinkList/LinkList';
const Config =
{
    botName: "LearningBot",
    initialMessages:
    [
        createChatBotMessage("Hi, I'm here to help. What do you want to learn?",
            { widget: "learningOptions", },
            // { widget: "javascriptLinks", }
            )
    ],
    customStyles:
    {
        botMessageBox:
        {
            backgroundColor: "#376B7E",
        },
        chatButton:
        {
            backgroundColor: "#376B7E",
        },
    },
    // widgets: [
    //     {
    //         widgetName: "learningOptions",
    //         widgetFunc: (props:any) => 
    //             <LearningOptions:any  props= {...props} /> 
    //           ,
    //         props: {
    //             options: [
    //                 {
    //                     text: "Introduction to JS",
    //                     url:
    //                         "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
    //                     id: 1,
    //                 },
    //                 {
    //                     text: "Mozilla JS Guide",
    //                     url:
    //                         "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    //                     id: 2,
    //                 },
    //                 {
    //                     text: "Frontend Masters",
    //                     url: "https://frontendmasters.com",
    //                     id: 3,
    //                 }
    //             ]
    //         }
           
    //     },
    //     {
    //         widgetName: "javascriptLinks",
    //         // widgetFunc: (props:any) => <LinkList {...props} />,
          
    //     }
    //     // {
    //     //     widgetName: "learningOptions",
    //     //     widgetFunc: (props) => <LearningOptions {...props} />,
    //     // },
    //     // {
    //     //   widgetName: "javascriptLinks",
    //     //   widgetFunc: (props) => <LinkList {...props} />,
    //     // },
    // ]
}
export default Config