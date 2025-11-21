import withbg from '/fahim withbg.jpg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'


function App() {
  return (
    <>
      <Navbar />

      {/* Main content wrapper with custom scrollbar */}
      <div className="h-screen overflow-y-auto custom-scrollbar scrollbar-thumb-[#5f83cc] scrollbar-track-[#172031]">

        {/* Hero-section */}
        <div id="home" className={`pt-24 min-h-screen flex items-center p-4 bg-[#0e162a]`}>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-24">
              {/* Image Section (now first) */}
              <div className='hero-image-container'>
                <img src={withbg} alt="digital marketer's profile" className='w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[35rem] lg:h-[35rem] xl:w-[40rem] xl:h-[40rem] rounded-full ' />
              </div>

              {/* Text Section (now second) */}
              <div className="border-4 border-[#5f83cc] p-10 rounded-lg text-center lg:text-left lg:max-w-2xl xl:max-w-4xl xl:p-14">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className='font-sans text-lg font-thin text-[#5f83cc]'>Hey, I'm Fahmiduzzaman Fahim,</span> <br />
                    <span className='font-sans text-3xl md:text-3xl font-extrabold text-white'>
                      A Digital Marketing <br /> Architect with 5+ years of experience
                    </span>
                  </div>
                  <div className='font-normal text-white'>
                    focused on building impactful brand identities and high-performing <br /> marketing systems. I specialize in creating data-driven strategies, <br /> compelling ad creatives, and optimized digital experiences that help <br /> businesses scale with confidence.

                    With expertise across social media <br /> marketing, paid campaigns, SEO, and brand design, I combine <br /> creativity with analytics to deliver work that captivates audiences <br /> and achieves real results. My approach is simple—understand <br /> the brand, design smart solutions, and execute with precision. <br />

                    I’m passionate about transforming ideas into meaningful digital <br /> outcomes that elevate brands in today’s competitive market.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* service-section */}
        <div id="services" className="bg-[#1c2a3f] py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:text-left lg:pl-8">
              <h2 className="text-4xl font-extrabold text-white text-center lg:text-left">My Services</h2>

            </div>
            <div className="flex flex-wrap justify-center lg:justify-around gap-8">
              <div className="bg-[#2d4059] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/4">
                <div className="text-center">
                  <i className="fa-brands fa-google fa-3x text-[#5f83cc] mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Google Ads Management
                  </h3>
                  <p className="text-white">
                    Optimizing your campaigns to maximize ROI and drive targeted traffic with data-driven precision.
                  </p>
                </div>
              </div>

              <div className="bg-[#2d4059] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/4">
                <div className="text-center">
                  <i className="fa-solid fa-magnifying-glass-chart fa-3x text-[#5f83cc] mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Social Media SEO
                  </h3>
                  <p className="text-white">
                    Enhancing your social presence to improve search rankings and connect with your audience effectively.
                  </p>
                </div>
              </div>

              {/* Card 7: Facebook Ad Campaign */}
              <div className="bg-[#2d4059] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/4">
                <div className="text-center">
                  <i className="fa-brands fa-facebook fa-3x text-[#5f83cc] mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Facebook Ad Campaign
                  </h3>
                  <ag className="text-white">
                    Managing targeted ad campaigns on Facebook to reach your ideal customers and grow your business.
                  </ag>
                </div>
              </div>

              {/* Card 3: Editor */}
              <div className="bg-[#2d4059] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/4">
                <div className="text-center">
                  <i className="fa-solid fa-pen-to-square fa-3x text-[#5f83cc] mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Editor
                  </h3>
                  <p className="text-white">
                    Polishing your content to ensure clarity, coherence, and impact, making every word count.
                  </p>
                </div>
              </div>

              <div className="bg-[#2d4059] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/4">
                <div className="text-center">
                  <i className="fa-solid fa-palette fa-3x text-[#5f83cc] mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Designer
                  </h3>
                  <p className="text-white">
                    Creating visually stunning assets that capture your brand’s essence and engage your audience.
                  </p>
                </div>
              </div>

              <div className="bg-[#2d4059] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/4">
                <div className="text-center">
                  <i className="fa-solid fa-feather-pointed fa-3x text-[#5f83cc] mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Writer
                  </h3>
                  <p className="text-white">
                    Crafting compelling narratives and copy that resonate with your audience and inspire action.
                  </p>
                </div>
              </div>

              <div className="bg-[#2d4059] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/4">
                <div className="text-center">
                  <i className="fa-solid fa-flask fa-3x text-[#5f83cc] mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Researcher
                  </h3>
                  <p className="text-white">
                    Diving deep into market trends and data to uncover insights that drive strategy and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Client-success-stories */}
        <div id="reviews" className="bg-[#0e162a] py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:text-left lg:pl-8">
              <h2 className="text-4xl font-extrabold text-white text-center lg:text-left">Client Success Stories</h2>
              <p className="mt-4 text-lg text-white">
                Hear directly from clients who have experienced significant growth and results.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-around gap-8">
              {/* Testimonial Card 1 */}
              <div className="border border-transparent bg-[#1c2a3f] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/3">
                <div className="text-center">
                  <p className="text-white italic mb-4">
                    "Bro, honestly I'm really impressed with the way you handled the ad campaign. The targeting, planning and the results were way better than expected. Your dedication and professionalism are truly commendable. Looking forward to working with you again in the future."
                  </p>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="border border-transparent bg-[#1c2a3f] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/3">
                <div className="text-center">
                  <p className="text-white italic mb-4">
                    "Working with Fahmiduzzaman was a game-changer for our online presence. Our search engine rankings have improved dramatically, and. We're seeing a consistent increase in organic traffic. The SEO strategy was clear, effective, and delivered real, measurable results."
                  </p>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="border border-transparent bg-[#1c2a3f] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/3">
                <div className="text-center">
                  <p className="text-white italic mb-4">
                    "The new brand identity and website design are stunning. It perfectly captures our company's ethos and has received amazing feedback from our customers. The attention to detail and creative vision were exceptional."
                  </p>
                </div>
              </div>

              {/* Testimonial Card 4 */}
              <div className="border border-transparent bg-[#1c2a3f] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/3">
                <div className="text-center">
                  <p className="text-white italic mb-4">
                    "The quality of the content writing is top-notch. Every blog post and piece of copy is well-researched, engaging, and perfectly aligned with our brand voice. Our content marketing has never been stronger."
                  </p>
                </div>
              </div>

              {/* Testimonial Card 5 */}
              <div className="border border-transparent bg-[#1c2a3f] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/3">
                <div className="text-center">
                  <p className="text-white italic mb-4">
                    "From social media management to running complex ad campaigns, the level of expertise is outstanding. We've seen significant growth in engagement and conversions across all platforms. A true professional and a valuable partner."
                  </p>
                </div>
              </div>

              {/* Testimonial Card 6 */}
              <div className="border border-transparent bg-[#1c2a3f] p-8 rounded-xl shadow-lg w-full sm:w-2/5 lg:w-1/3">
                <div className="text-center">
                  <p className="text-white italic mb-4">
                    "The initial consultation and strategy session alone were incredibly valuable. The insights provided helped us refocus our marketing efforts and create a clear roadmap for success. Highly recommended for anyone looking for strategic guidance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default App

