import React from 'react';
import { Button, Form, Input } from 'antd';
import ConfirmModal from '../../components/ConfirmModal';
import { sleep } from '../../utils';

export default () => {
  let formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  }

  let confirmModalOption = {
    body: ({ value, setValue }) => {
      return (
        <Form >
          <Form.Item label="申请企业" {...formItemLayout}>
            <span className="ant-form-text">深圳腾讯科技有限公司</span>
          </Form.Item>
          <Form.Item label="驳回原因" {...formItemLayout} required={true}>
            <Input.TextArea value={value} onChange={(event) => setValue(event.target.value)}/>
          </Form.Item>
        </Form>
      )
    },
    onOk: async ({value}) => {
      console.log(value);
      await sleep(3000) // 模拟请求
      return true; // 成功
    }
  }

  return (
    <div>
      <Button onClick={() => ConfirmModal.open(confirmModalOption)}>驳回</Button>
    </div>
  )
}