import { Header } from "./componentes/Header";
import { Post, PostType } from "./componentes/Post";
import { Siderbar } from "./componentes/Sidebar";

import styles from "./css/App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/68870775?v=4",
      nome: "Maria Eduarda",
      role: "Dev",
    },

    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      { type: "link", content: "Jane.design/doctorcare" },
    ],

    publishedAt: new Date("2023-07-11 20:35:02"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      nome: "Daiana Rubi",
      role: "Modelo",
    },

    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      { type: "link", content: "Jane.design/doctorcare" },
    ],

    publishedAt: new Date("2023-05-01 20:35:02"),
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}