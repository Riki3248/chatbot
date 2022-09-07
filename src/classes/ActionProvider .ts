class ActionProvider {
    //לשאול
    state: { createChatBotMessage: any; setStateFunc: any; createClientMessage: any; stateRef: any; createCustomMessage: any; };
    constructor(
        createChatBotMessage:any,
        setStateFunc:any,
        createClientMessage:any,
        stateRef :any,
        createCustomMessage:any,
        ...rest:any
    ) 
   { 
    this.state=
       { createChatBotMessage :createChatBotMessage,
        setStateFunc : setStateFunc,
        createClientMessage : createClientMessage,
        stateRef : stateRef,
        createCustomMessage :createCustomMessage,}
    }
    greet() {
        const greetingMessage  =this.state.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
    }
​
    handleJavascriptList = () =>
    {
        const message = this.state.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
        widget: "javascriptLinks",
        }
        );
        this.updateChatbotState(message);
    };
​
    updateChatbotState(message:any)
    {
        this.state.setStateFunc((prevState: 
            //לשאול
            { messages: any; }
            ) => (
        {
            ...prevState, messages: [...prevState.messages, message]
            }
        ))
    }
}
​
export default ActionProvider;