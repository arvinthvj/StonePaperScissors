import {Modal} from 'antd';
const info = (text, toDo) => {
    Modal.info({
        centered : "true",
        className:"modal_info",
      title: "Info",
      content: (
        <div>
          {text}
        </div>
      ),
      onOk() {
        if(toDo){
          debugger
          toDo()
        }
      },
    });
  };

  export default info