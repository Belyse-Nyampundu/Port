import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Skills from "../components/articles/article";
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "skills");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Skills | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.title} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.skills.title}
						</div>

					
						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles.map((skills, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Skills
											key={(index + 1).toString()}
											date={skills().logo}
											title={skills().title}
										
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
