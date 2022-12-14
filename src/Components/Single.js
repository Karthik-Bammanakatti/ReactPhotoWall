import React, { Component } from "react";
import Photo from "./Photo";
import Comment from "./Comments";

export default class Single extends Component {
	render() {
		const { match, posts } = this.props;
		const id = Number(match.params.id);
		const post = posts.find((post) => post.id === id);
		const comments = this.props.comments[match.params.id] || [];
		const index = this.props.posts.findIndex((post) => post.id === id);
		console.log(comments);
		return (
			<div className="single-photo">
				<Photo post={post} {...this.props} index={index} />
				<Comment
					startAddingComment={this.props.startAddingComment}
					comments={comments}
					id={id}
				/>
			</div>
		);
	}
}
