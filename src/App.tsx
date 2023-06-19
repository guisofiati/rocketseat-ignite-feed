import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/guisofiati.png",
      name: "Jose Vieira",
      role: "Software Engineer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋", },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-01 00:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/guisofiati.png",
      name: "Maria Santos",
      role: "Front-End Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋", },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-13 00:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
