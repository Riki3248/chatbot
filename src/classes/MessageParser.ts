class MessageParser {
    state: { actionProvider: any; };
    constructor(actionProvider:any
        // , state
    ) {
      this.state={actionProvider : actionProvider};
    //   this.state = state;
    }
  
    parse(message:any) {
        const lowerCaseMessage = message.toLowerCase()
        
        if (lowerCaseMessage.includes("hello")) {
          this.state.actionProvider.greet()
        }
        if (lowerCaseMessage.includes("javascript")) {
          this.state.actionProvider.handleJavascriptList();
        }
      }
  }
  
  export default MessageParser;