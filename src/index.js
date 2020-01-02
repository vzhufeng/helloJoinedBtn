import React, { Component } from "react";
import './style.scss';

export default class JoinedBtn extends Component {
  changeActive = v => {
    const { changeActiveBtn } = this.props;
    // 点击当前已激活的按钮还是自己来判断比较合适
    changeActiveBtn(v);
  };

  render() {
    const { disableBtns = [], btns = [], className, activeBtn } = this.props;
    const { changeActive } = this;

    return (
      <div className={`joined-btn-contain ${className ? className : ''}`}>
        {btns.map((v, k) => {
          const disable = disableBtns.includes(v.id);
          return (
            <span
              className={`joined-btn ${activeBtn === v.id ? 'active-btn' : ''} ${disable ? 'disabled-btn' : ''}`}
              key={k}
              onClick={disable ? null : changeActive.bind(this, v.id)}
            >
              {v.text}
            </span>
          );
        })}
      </div>
    );
  }
}
