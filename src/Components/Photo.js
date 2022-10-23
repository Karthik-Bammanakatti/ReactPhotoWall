import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photo(props) {
	const post = props.post;
	return (
		<figure className="figure">
			<Link to={`/single/${post.id}`}>
				<img
					src={post.imageLink}
					alt={post.description}
					className="photo"
				/>
			</Link>
			<figurecaption>
				<p className="caption"> {post.description} </p>
			</figurecaption>
			<div className="button-container">
				<button
					className="button"
					onClick={() => {
						props.startRemovingPost(props.index, post.id);
						props.history.push("/");
					}}
				>
					Remove
				</button>
				<Link className="button" to={`/single/${post.id}`}>
					<div className="comment-count">
						<div className="speech-bubble"></div>
						{props.comments[post.id]
							? props.comments[post.id].length
							: 0}
					</div>
				</Link>
			</div>
		</figure>
	);
}
Photo.propTypes = {
	post: PropTypes.object.isRequired,
};

export default Photo;
