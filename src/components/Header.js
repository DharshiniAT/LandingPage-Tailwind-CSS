import logo from '../assests/logo.avif'
import banner from '../assests/Banner.webp'
import pic1 from '../assests/pic 1.webp'
import pic2 from '../assests/pic2.webp'
import pic3 from '../assests/pic3.webp'
import cart1 from '../assests/cart1.webp'
import cart2 from '../assests/cart2.webp'
import cart3 from '../assests/cart3.webp'
import cart4 from '../assests/cart4.webp'
import pig from '../assests/Pigmentation_.avif'
import sun from '../assests/Sun-Protection.avif'
import dry from '../assests/Dryness.avif'
import un from '../assests/Uneven-Skin-Tone.avif'
import age from '../assests/Ageing.avif'
import ace from '../assests/Oil-_-Acne-Control.avif'
import body from '../assests/body.webp'
import p1 from '../assests/p1.webp'
import p2 from '../assests/p2.webp'
import p3 from '../assests/p3.webp'
import p4 from '../assests/p4.webp'
import i1 from '../assests/ig1_400x.webp'
import i2 from '../assests/ig2_400x.webp'
import i3 from '../assests/ig3_400x.webp'
import i4 from '../assests/ig4_400x.webp'
import i5 from '../assests/ig5_400x.webp'
import uni from '../assests/unilever.webp'
import des from '../assests/des.webp'
function Head(){
    return(
        <div>
       <footer>
        <section>
        <div>
            <h1 className = "bg-[#f8d7dd] text-center p-2 font-extrabold text-[10]"> Try our AI Skin Expert & Get Personalized Skin Health Report</h1>
        </div>
        <div className='flex'>
        <img className='mt-7 ml-2' src={logo} alt ={logo} ></img>
        <input className='ml-9 border border-[#FF8DA1] w-[1000px] h-16 mt-9 rounded-3xl text-lg p-3' type = "text" placeholder="Search"></input>
        </div>
        <nav className='flex'>
            <ul className='flex justify-evenly m-2'>
                
                <li className='mr-16 font-bold mt-5'> AI SKIN EXPERT</li>
                <li className='mr-16 font-bold mt-5'>NEW</li>
                <li className='mr-16 font-bold mt-5'>FACE CARE</li>
                <li className='mr-16 font-bold mt-5'>BODY CARE</li>
                <li className='mr-16 font-bold mt-5'>BY CONCERNS</li>
                <li className='mr-16 font-bold mt-5'>SKIN SCIENCE</li>
                <li className='mr-16 font-bold mt-5'>POND'S PROMISE</li>
                
            </ul>
        </nav>
        </section>
        <section>
        <img className='mt-10' src = {banner} alt="banner"></img>
        </section>
        <section>
            <h2 className='text-center uppercase m-10 text-4xl font-extrabold text-[#d66f99]'>In the Spotlight</h2>
        </section>
        <section>
            <div className='flex m-10'>
                <div>
                <img className='rounded-[10%]' src = {pic1} alt='pic1'></img>
                </div>
                <div className='m-2'>
                    <img className='rounded-3xl'src={pic2} alt  = 'pic2'>
                    </img>
                    <img className='mt-5 rounded-3xl' src = {pic3} alt='pic3'></img>
                </div>
            </div>
        </section>
       </footer>
       <main>
<div>          
      <h2 className='text-center uppercase m-10 text-4xl font-extrabold text-[#d66f99]'>new launches</h2></div>
      <div className='flex m-7 p-3 gap-3'>
<div>
    <img className='rounded-2xl w-[300px] ' src ={cart1} alt ='cart1'></img>
    <h1 className='uppercase font-bold mt-6 text-center'>POND'S Anti-Pigmentation Serum<br></br> with  12% Gluta-Niacinamide Complex   <br></br>forFlawless Radiance</h1>
    <button className='bg-[#d66f99] border rounded-3xl p-3 text-white mt-5 text-center ml-11 w-44'>view product</button>
</div>
<div>
     <img className='rounded-2xl w-[300px]' src ={cart2} alt ='cart2'></img>
       <h1 className='uppercase  font-bold mt-6 text-center'>POND'S Anti-Pigmentation Serum<br></br> with  12% Gluta-Niacinamide Complex   <br></br>forFlawless Radiance</h1>
           <button className='bg-[#d66f99] border rounded-3xl p-3 text-white mt-5 text-center ml-11 w-44'>view product</button>
</div>
<div>
     <img className='rounded-2xl w-[300px]' src ={cart3} alt ='cart3'></img>
       <h1 className='uppercase  font-bold mt-6 text-center'>POND'S Anti-Pigmentation Serum<br></br> with  12% Gluta-Niacinamide Complex   <br></br>forFlawless Radiance</h1>
           <button className='bg-[#d66f99] border rounded-3xl p-3 text-white mt-5 text-center ml-11 w-44'>view product</button>
</div>
<div>
     <img className='rounded-2xl w-[300px]' src ={cart4} alt ='cart4'></img>
       <h1 className='uppercase  font-bold mt-6 text-center'>POND'S Anti-Pigmentation Serum<br></br> with  12% Gluta-Niacinamide Complex   <br></br>forFlawless Radiance</h1>
           <button className='bg-[#d66f99] border rounded-3xl p-3 text-white mt-5 text-center ml-11 w-44'>view product</button>
</div>
      </div>
      <div>
        <div>
    <h2 className='text-center uppercase  text-4xl font-extrabold text-[#d66f99]'>Shop by Concern</h2>
      <p className='text-center p-1 font-medium '>Explore our solutions, for your skin concerns</p>
        </div>
        <div className='m-9 flex'>
            <div className='m-3'>
            <img className='w-[215px] relative rounded-t-3xl' src ={pig} alt ='pigmentation'></img>
            <h2 className=' absolute bg-[#d66f99] w-44 -m-7 ml-0 text-center p-2 rounded-b-3xl font-extrabold text-white'>PIGMENTATION</h2>
            </div>

            <div className='m-3'>
            <img className='w-[215px] relative rounded-t-3xl' src ={sun} alt ='un prtection'></img>
            <h2 className=' absolute bg-[#d66f99] w-44 -m-7 ml-0 text-center p-2 rounded-b-3xl font-extrabold text-white '>SUN Protection</h2>
            </div>

             <div className='m-3'>
            <img className='w-[215px] relative rounded-t-3xl' src ={dry} alt ='dry skin'></img>
            <h2 className=' absolute bg-[#d66f99] w-44 -m-7 ml-0 text-center p-2 rounded-b-3xl font-extrabold text-white '>DRY SKIN</h2>
            </div>

             <div className='m-3'>
            <img className='w-[215px] relative rounded-t-3xl' src ={un} alt ='uneven'></img>
            <h2 className=' absolute bg-[#d66f99] w-44 -m-7 ml-0 text-center p-2 rounded-b-3xl font-extrabold text-white '>UNEVEN TONE</h2>

            </div>

             <div className='m-3'>
            <img className='w-[215px] relative rounded-t-3xl' src ={age} alt ='ageing'></img>
            <h2 className=' absolute bg-[#d66f99] w-44 -m-7 ml-0 text-center p-2 rounded-b-3xl font-extrabold text-white '>AGEING</h2>
            </div>

             <div className='m-3'>
            <img className='w-[215px] relative rounded-t-3xl' src ={ace} alt ='acene'></img>
            <h2 className=' absolute bg-[#d66f99] w-44 -ml-0 -m-7 text-center p-2 rounded-b-3xl font-extrabold text-white '>OIL & ACENE </h2>
            </div>
        </div>
      </div>
      <div className='flex bg-[#e7d1d9] m-16 rounded-3xl h-[460px]'>
        <div>
        <img className='w-[700px] rounded-s-3xl' src ={body} alt="body"></img>
        </div>
        <div className='text-center w-[600px] p-23 m-20 '>
            <h1 className='uppercase font-extrabold p-6 text-3xl'>Pioneers of Skincare</h1>
            <p className='p-6 justify-normal'>The Pond's promise is to create products that nurture the skin from the inside to transform it into beautiful and radiant skin on the outside. For more than 150 years, we have pioneered in skincare with superior science and technology.</p>
            <button className=' bg-[#d66f99] text-center text-white p-2 font-bold rounded-3xl w-44'>Know More</button>
        </div>
      </div>
      <div>
            <h2 className='text-center uppercase text-4xl font-extrabold text-[#d66f99]'>Best Selling</h2>
      </div>
      <div className='flex m-4 mt-7'>
        <div>
        <img className='rounded-2xl w-[300px] border border-[1px] border-[#d66f99]'  src  = {p1} alt="p1"></img>
         <h1 className='uppercase font-bold mt-6'>POND'S Anti-Pigmentation Serum<br></br> with  12% Gluta-Niacinamide Complex   <br></br>forFlawless Radiance</h1>
         <button className='bg-[#d66f99] border rounded-3xl p-3 text-white mt-5 text-center ml-11 w-44'>view product</button>
        </div>

           <div>
        <img className='rounded-2xl w-[300px] border border-[1px] border-[#d66f99]'  src  = {p2} alt="p2"></img>
         <h1 className='uppercase font-bold mt-6'>POND'S Anti-Pigmentation Serum<br></br> with  12% Gluta-Niacinamide Complex   <br></br>forFlawless Radiance</h1>
         <button className='bg-[#d66f99] border rounded-3xl p-3 text-white mt-5 text-center ml-11 w-44'>view product</button>
        </div>

           <div>
        <img className='rounded-2xl w-[300px] border border-[1px] border-[#d66f99]'  src  = {p3} alt="p3"></img>
         <h1 className='uppercase font-bold mt-6'>POND'S Anti-Pigmentation Serum<br></br> with  12% Gluta-Niacinamide Complex   <br></br>forFlawless Radiance</h1>
         <button className='bg-[#d66f99] border rounded-3xl p-3 text-white mt-5 text-center ml-11 w-44'>view product</button>
        </div>

           <div>
        <img className='rounded-2xl w-[300px] border border-[1px] border-[#d66f99]'  src  = {p4} alt="p4"></img>
         <h1 className='uppercase font-bold mt-6'>POND'S Anti-Pigmentation Serum<br></br> with  12% Gluta-Niacinamide Complex   <br></br>forFlawless Radiance</h1>
         <button className='bg-[#d66f99] border rounded-3xl p-3 text-white mt-5 text-center ml-11 w-44'>view product</button>
        </div>
      </div> 
      <div>
             <h2 className=' mt-20 text-center uppercase text-4xl font-extrabold text-[#d66f99]'>Be a part of the Pond's community</h2>
             <p className='p-2 text-center font-semibold text-zinc-600 '>Tag @pondsindia for a chance to be featured!</p>
      </div>
      <div className='m-5'>
        <div className='flex w-56 gap-7 '>
            <img className='rounded-3xl' src = {i1}  alt = "i1"></img>
             <img className='rounded-3xl' src = {i2}  alt = "i2"></img>
              <img className='rounded-3xl' src = {i3}  alt = "i3"></img>
               <img className='rounded-3xl' src = {i4}  alt = "i4"></img>
                <img className='rounded-3xl' src = {i5}  alt = "i5"></img>
        </div>
      </div>
      <hr></hr>
       </main>
        <footer>

        </footer>
        </div>
    )
}
export default Head;