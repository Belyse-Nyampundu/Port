import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Skills = (props) => {
	const {title,logo,link } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{logo}</div>
				</div>

				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Skills;
