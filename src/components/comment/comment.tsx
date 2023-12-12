import * as React from 'react';
import styles from "./comment.module.css";
import AddComment from '../addComment/addComment';

export interface CommentsProps {

}

export interface CommentsState {
    comments: Comment[];
    isLoading?: boolean;
    error?: any;
}

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

class Comments extends React.Component<CommentsProps, CommentsState> {
    constructor(props: CommentsProps) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    addComment = (email: string, comment: string): void => {
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    id: this.state.comments.length + 1,
                    body: comment,
                    email,
                    name: '',
                    postId: 0,
                },
            ],
        });
    };

    componentDidMount(): void {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            throw new Error("Something went wrong!");
        })
        .then((comments) => {
            this.setState({ 
                comments, 
                isLoading: false, 
                error: null });
          })
        .catch((error) => {
            this.setState({ 
                isLoading: false, 
                error });
            console.log(error);
          });
        //dohvati
        //spremi u state
    }


    render() {
        const { comments, isLoading, error } = this.state;

        if (isLoading) {
          return <div>Loading comments...</div>;
        }
      
        if (error) {
          return <div>Error: {error.message}</div>;
        }

        return (<>
                <div className="titleContainer">
                    <h1 className={styles.title}>Komentari :</h1>
                </div>
                <div className={styles.commentsContainer}>
                {comments.map((comment) => (
                    <div className={styles.commentContainer} key={comment.id}>
                        <div className={styles.commentPersonal}>
                            <div className={styles.commentEmail}>
                                <strong>E-mail : </strong>
                                {comment.email}
                            </div>
                            <img
                                src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=6&m=1223671392&s=612x612&w=0&h=5VMcL3a_1Ni5rRHX0LkaA25lD_0vkhFsb1iVm1HKVSQ="
                                className={styles.commentImage}
                                alt={"IME"}
                            ></img>
                        </div>
                        <div className={styles.commentBody}>{comment.body}</div>
                    </div>
                ))}
                <AddComment submitHandler={(email, comment) => this.addComment(email, comment)} />
                </div>  
            </>);
    }
}

export default Comments;