import {Modal} from 'antd';

const info = (text) => {
    Modal.info({
        centered : "true",
        className:"modal_info",
      title: "Info",
      content: (
        <div>
          {text}
        </div>
      ),
      onOk() {},
    });
  };

  export default info