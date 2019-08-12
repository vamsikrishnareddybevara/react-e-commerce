import React from "react";
import "./menu-item.styles.scss";
const MenuItem = ({ imageUrl, title, size }) => (
	<div className={`${size} menu-item`}>
		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className="background-image"
		/>
		<div className="content">
			<h2 className="title">{title}</h2>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default MenuItem;
