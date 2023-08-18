import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./index.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";

interface ComentariosProps {
  content: string;
  deleteComment: (comment: string) => void;
}

export function Comment({ content, deleteComment }:ComentariosProps ) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleterComment() {
    deleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.Comment}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luan Pedro</strong>
              <time
                title="25 de junho de 2023"
                dateTime="25 de junho de 2023 00:00:01"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleterComment} title="Deletar comentários">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} className={styles.aplaudir}>
            <ThumbsUp />
            Aplaudir
            <span> {likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
