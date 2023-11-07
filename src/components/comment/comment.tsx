import React from "react";
import { Component } from "react";

interface CommentProps{

}

interface CommentState{

}

class Comment extends React.Component<CommentProps, CommentState>{
    constructor(props: CommentProps) {
        super(props);
        
      }

    render(){
        return(
            <div>
                <p>Ovo je komentar unutar komponente.</p>
            </div>
        );
    }
}

export default Comment;