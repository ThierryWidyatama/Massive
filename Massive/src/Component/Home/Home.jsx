import React from 'react'
import './Home.css'
import Slide from '../Slide/Slide'
import foto1 from '../../assets/logo1.png'
import foto2 from '../../assets/logo2.png'
import foto3 from '../../assets/logo3.png'
import foto4 from '../../assets/logo4.png'
import display from '../../assets/display.jpg'
import display1 from '../../assets/display1.jpg'
import display2 from '../../assets/display2.jpg'
import Guest from '../../Component/Guest/Navbar'
import Footer from '../../Component/Footer/Footer'




const Home = () => {
  return (
    <>
    <Guest/>
    <div className="header-text">
        <br />
        <br />
        <br />
            <h1>Kebersihan adalah kebahagiaan,<br />
            Jadikan Rumah Anda Tempat Yang Bahagia</h1>
            <p>"Rumah Bersih, Hidup Sehat - Kami Membantu Anda Mewujudkannya"</p>
            <p1>"Bergabunglah dengan kami dalam perjalanan menuju rumah yang paling bersih dan sehat!"</p1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    <div id='layanan'>
          <div className="layanan-text">
              <p>LAYANAN KAMI</p>
              <h3>APA SAJA YANG KAMI TAWARKAN</h3>
          </div>
          <div className="box-content">
              <div className="box">
                  <img src={foto2} alt="" className='half' />
                  <h3>Membersihkan Rumah</h3>
                  <p10>Rumah bersih dan segar dengan layanan profesional kami</p10>
              </div>
              <div className="box">
                  <img src={foto1} alt="" className='half' />
                  <h3>Membersihkan Kos</h3>
                  <p10>Tingkatkan kenyamanan penghuni kost dengan layanan terpercaya kami</p10>
              </div>
              <div className="box">
                  <img src={foto3} alt="" className='half' />
                  <h3>Membersihkan Lantai</h3>
                  <p10>Dapatkan lantai bersih dan bersinar seperti baru dengan layanan kebersihan kami</p10>
              </div>
              <div className="box">
                  <img src={foto4} alt="" className='half' />
                  <h3>Membersihkan Jendela</h3>
                  <p10>Jendela bersih dan jernih dengan layanan berkualitas kami</p10>
              </div>
          </div>
      </div>
          {/* // --------------------------------------konten kanan kiri------------------------------------------------- */}
    <div className="allcontent3">
    <div class="content3">
            <div class="left-content1">
            <h2>Layanan</h2><br />
            <p10>Kami memberikan layanan kebersihan harian yang profesional untuk rumah Anda. Dengan tim yang berpengalaman dan peralatan terbaik, kami menjamin kebersihan dan kenyamanan lingkungan Anda.</p10>
        </div>
            <div class="right-content1">
            <img src={display} alt="Gambar" />
        </div>
    </div>

    <div class="content3">
            <div class="left-content2">
            <img src={display1} alt="Gambar" />
        </div>
            <div class="right-content2">
            <h2>Pesan</h2><br />
            <p10>Jangan biarkan kekacauan mengganggu hari Anda. Dengan beberapa klik saja, Anda bisa memesan layanan kebersihan kami. Kami siap membantu Anda kapan saja, di mana saja."</p10>
        </div>
    </div>

    <div class="content3">
        <div class="left-content3">
        <h2>Rating</h2><br />
        <p10>Kepuasan pelanggan adalah prioritas kami. Lihatlah penilaian dan ulasan dari pelanggan kami yang puas. Kami bangga dengan layanan berkualitas tinggi yang kami berikan dan kami berusaha untuk selalu memenuhi dan melampaui harapan pelanggan."</p10>
     </div>
     <div class="right-content3">
        <img src={display2} alt="Gambar" />
    </div>
    </div>
    </div>
    <Slide/>
    <Footer/>
</>
  )
}

export default Home