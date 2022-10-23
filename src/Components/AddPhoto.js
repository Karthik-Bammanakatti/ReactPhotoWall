import React from "react";

class AddPhoto extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		const link = event.target.link.value;
		const imageDescription = event.target.description.value;
		const post = {
			id: Number(new Date()),
			description: imageDescription,
			imageLink: link,
		};
		if (imageDescription && link) {
			this.props.startAddingPost(post);
			this.props.onHistory.push("/");
		}
	}
	render() {
		return (
			<div>
				<div className="form">
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="Link" name="link" />
						<input
							type="text"
							placeholder="Description"
							name="description"
						/>
						<button>Post</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddPhoto;
