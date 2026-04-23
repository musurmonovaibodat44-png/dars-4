import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function About() {
    return (
        <div>

         
            <Header />
            <section style={{ padding: "20px" }}>
                <h2 style={{color:'white'}}>Men haqimda</h2>
                <p>
                    Men dasturlashni o‘rganayotgan oddiy talabalardan biriman.
                    React va C++ bilan ishlashni yaxshi ko‘raman.
                </p>
               <p>Robototexnika menga qiziq juda ham.</p>
               <img src="https://www.texnoman.uz/uploads/blogs/fc0e3a5697b330a6cb374718e77a83eb.jpg" alt="" />
                <h3>Maqsadlarim</h3>
                <ul class='container'>
                    <li>Kuchli dasturchi bo‘lish</li>
                    <li>Yaxshi loyihalar qilish</li>
                    <li>IT sohada ishlash</li>
                </ul>
            </section>
            <Footer />

        </div>
    );
}
