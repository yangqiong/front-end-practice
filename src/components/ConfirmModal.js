import React, { useState } from 'react';
import { Modal } from 'antd';
import ReactDOM from 'react-dom'

const ConfirmModal = props => {
  let [visible, setVisible] = useState(true);
  let [loading, setLoading] = useState(false);
  let [value, setValue] = useState(null);

  const confirm = async () => {
    setLoading(true);
    let result = await props.onOk({value});
    if (result !== true){
      setVisible(true);
    } else {
      setVisible(false);
    }
    setLoading(false);
  }
  const close = () => setVisible(false);

  return (
    <Modal
      title="驳回原因"
      visible={visible}
      onOk={confirm}
      onCancel={close}
      confirmLoading={loading}
    >
      {props.body({value, setValue})}
    </Modal>
  )
}

ConfirmModal.open = options => {
  let el = document.createElement("div");
  ReactDOM.render(<ConfirmModal {...options}/>, el);
  document.body.appendChild(el);
}

ConfirmModal.defaultProps = {
  body: ({value, setValue}) => {}, // 返回对话框body显示内容
  onOk: ({value}) => {},           // 返回处理结果
}

export default ConfirmModal;