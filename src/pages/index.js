import React from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1>代码片段</h1>
      <ul>
        <Link to="/snippets/confirm-modal">ConfirmModal - 确认对话框最佳实践</Link>
      </ul>
    </div>
  )
}