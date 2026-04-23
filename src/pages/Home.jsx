import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Home() {
    return (
        <div>

            
            <Header />

            
            <section style={{ padding: "20px" }}>
                <h2 >Shahrim haqida</h2>
                <h3 ><b><i>Shahrisabz shahri</i></b></h3>
                <p>
                    Bu mening tug`ilib o`sgan shahrim. Bu yer juda chiroyli va odamlar mehmondo‘st.
                </p>
                <img src="/image.png" alt="" />
                <h3>Diqqatga sazovor joylar</h3>
                <ul class='container'>
                    <li>Markaziy bog‘</li>
                    <li>Tarixiy muzey</li>
                    <li>Yangi savdo markazi</li>
                </ul>
            </section>

            <Footer />

        </div>
    );
}
