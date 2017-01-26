import React from 'react';
export default class User extends React.Component{
	render(){
		return (
			<div className="user">
				<div className="user-title">
					<div className="user-icon">
						<img src="./images/user.png" />
					</div>
					<div className="user-mess">
						<p>手机用户0624</p>
						<p>ID:123456789</p>
						<a href="#/">退出</a>
					</div>
				</div>
				<a href="#/" className="user-order">
					<span className="icon-tit"></span>
					<span className="icon-txt">我的订单</span>
					<span className="icon-cut">0张</span>
					<img src="./images/rt.png" />
				</a>
				<a href="#/" className="user-order">
					<span className="icon-tit"></span>
					<span className="icon-txt">待付订单</span>
					<span className="icon-cut">0张</span>
					<img src="./images/rt.png" />
				</a>
				<a href="#/" className="user-order">
					<span className="icon-tit"></span>
					<span className="icon-txt">设置</span>
					<img src="./images/rt.png" />
				</a>
			</div>
		)
	}
}