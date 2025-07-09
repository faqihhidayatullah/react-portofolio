
import DataImage from './data';
import {listTools, listProyek} from './data';
function App() {  


  return (
    <>
   <div className="hero grid grid-cols-1 md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6">
  <div className="animate__animated animate__fadeInUp animate__delay-2s px-4">
    <div className="flex items-center gap-3 bg-zinc-800 w-fit p-4 rounded-2xl">
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q className="text-sm md:text-base">never listen to other people's bad words. 🙌</q>
          </div>
          <h1 className="text-5xl/tight font-bold mt-4 mb-4">hi, I'm Muhammad Faqih Hidayatullah</h1>
          <p className="text-base/loose mb-6 opacity-50">
          Highly motivated and results-oriented Full Stack Developer specializing in building and deploying robust web and 
mobile applications using PHP, Java, Laravel, Code Igniter, and Android (Java). Proven ability to create user- 
friendly and impactful digital solutions with a focus on clean code, efficient functionality, and user-centric design. 
Eager to contribute to a collaborative team environment and leverage skills to develop innovative solutions for 
real-world problems.
</p>
          <div className="flex items-center sm:gap-4 gap-2">
            

            <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">
              Lihat project<i className="ri-arrow-down-line ri-lg "></i>
              </a>
          </div>
      </div>
      <div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
      </div>
    </div>
     {/* tentang */}
    <div className="tentang mt-32 py10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className='text-base/loose mb-10'>
          Hello! I’m a student at Dian Nuswantoro University (UDINUS).
I am an enthusiastic and result-oriented student majoring in Informatics at UDINUS, focusing on becoming both a Full Stack Web Developer and a Mobile Developer.

I have strong skills in building and deploying robust web and mobile applications using PHP, Java, Laravel, CodeIgniter, and Android (Java). I enjoy designing and developing backend systems, including database design, API integration, and server-side logic.

I’m passionate about creating impactful, user-friendly digital solutions with an emphasis on clean code, efficient functionality, and user-centered design. I thrive in collaborative team environments and I’m ready to contribute fresh ideas and build innovative solutions for real-world challenges.
        </p>
        <div className="flex items-center justify-between ">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block 
          hidden" loading="lazy" />
          <div  className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                20<span className="text-violet-500">+</span>
              </h1>
              <p>Project selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                2<span  className="text-violet-500">+</span>
              </h1>
              <p>tahun pengalaman</p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true">tools yang dipakai</h1>
        <p className="xl:w-2/5 lg: w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"  data-aos-once="true">berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website ataupun mobile</p>
      </div>
      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listTools.map(tool => (
 <div key={tool.id} className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group " data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
          <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
          <div>
            <h4 className="font-bold">{tool.nama}</h4>
            <p className="opacity-50">{tool.ket}</p>
          </div>
        </div>
        ))}
       

      </div>
    </div>
     {/* tentang */}

    { /* project */}
    <div className="project mt-32 py-10" id="project">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true">project</h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"  data-aos-once="true">berikur ini beberpa project yan telah saya buat</p>
      <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map(proyek => (
          <div key={proyek.id} className="project-item bg-zinc-800 p-4 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}  data-aos-once="true">
            <img src={proyek.gambar} alt="Project Image" loading="lazy" className="" />
            <div>
            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
            </div>
            <p className="text-base/loose opacity-50 mb-4">{proyek.desk}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proyek.tools.map((tool, index) => (
                <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-r-md font-semibold" key={index}>{tool}</p>
              ))}
            </div>
            <div className="mt-8 text-center">
            <a href={proyek.link} className="bg-violet-700 p-3 rounded-lg block border
            border-zinc-600 hover:bg-violet-600">Lihat Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
     { /* project */}

     { /* kontak */}
     <div className="kontak mt-32 sm:p-10 p:0 " id="kontak">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true">Kontak </h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"  data-aos-once="true">Mari terhubung dengan saya</p>
        <form action="" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" autoComplete="off"  data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama lengkap:</label>
              <input type="Name" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email:</label>
              <input type="Email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan:</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border
            border-zinc-600 hover:bg-violet-600">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
     
     </div>
     { /* kontak */}

   </>
  );
}

export default App
