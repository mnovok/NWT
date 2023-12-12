import * as React from 'react';
import styles from "./addComment.module.css";
import { useState, useEffect } from 'react';

interface AddCommentProps {
    submitHandler: (email: string, comment: string) => void;
}

const AddComment: React.FunctionComponent<AddCommentProps> = ({ submitHandler }) => {
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmail('');
        setComment('');
        submitHandler(email, comment);
    };

    return(
        <>
            <div className={styles.formWrapper}>
                <form onSubmit={(e) => submitForm(e)}>
                    <label className={styles.title}>Dodaj svoj komentar!</label>

                    <label>E-mail</label>
                        <input
                            id="email"
                            type='text'
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e?.target.value)}
                        ></input>

                    <label>Vaš komentar</label>
                        <textarea
                            id="comment"
                            placeholder='Vaš komentar...'
                            value={comment}
                            onChange={(e) => setComment(e?.target.value)}
                        ></textarea>

                    <button type='submit'>
                        Pošalji komentar
                    </button>
                </form>
            </div>
        </>
    );

};

export default AddComment;