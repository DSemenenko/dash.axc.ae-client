import '../Assets/review.css'
import React, { useEffect } from 'react';
const Review = () => {
    useEffect(() => {
        var Swiper = window.Swiper;
        new Swiper('.blog-slider', {
          spaceBetween: 30,
          effect: 'fade',
          loop: true,
          autoplay: {
            delay: 10000,
          },
          mousewheel: {
            invert: false,
          },
          pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
          }
        });
      }, []);
    return <>
        <dib className="body-review">
            <div class="logo-review">
                <svg fill="none" viewBox="0 0 140 39" xmlns="http://www.w3.org/2000/svg" class="icon-svg-logo"><path d="M57.1836 23.1184H65.9264C65.7914 22.7633 65.6563 22.4082 65.5163 22.0581H57.5987C57.4587 22.4082 57.3236 22.7783 57.1836 23.1184Z" fill="url(#ugf7p)"></path><path d="M94.7106 37.4933C93.9299 36.9954 93.2512 36.3538 92.71 35.6027C92.1428 34.8786 91.6891 34.0724 91.3645 33.2119C90.8994 31.9865 88.6087 26.4097 85.1525 18.007C87.0632 14.2858 88.9703 10.5629 90.8744 6.83838C92.3749 3.95247 93.7603 2.24192 95.4309 1.92682L95.6759 1.9018H95.881V0.901483H87.3783V1.94683L88.1485 1.98683C88.8823 2.01835 89.577 2.32557 90.0941 2.84711C90.3607 3.21963 90.4983 3.6695 90.4843 4.12753C90.4843 4.9778 87.8484 10.3895 84.6274 16.7416L78.1003 0.896484H72.5235L73.5238 3.30226C73.8574 4.07584 74.1805 4.85442 74.4941 5.638C76.8649 11.3198 79.1856 17.0267 81.5414 22.7185C81.4314 22.9235 81.3263 23.1286 81.2213 23.3337C79.4857 26.6648 77.7852 29.9158 76.3597 32.6217C73.6689 25.4494 71.6482 20.2477 70.0627 16.1464C68.6672 12.4902 66.6816 7.30353 64.2408 0.901483H58.649C59.3793 2.79209 60.108 4.68437 60.8347 6.57829L55.8731 20.0826L50.8265 33.8771C48.9359 37.7083 46.6001 37.8083 46.6001 37.8083V38.7136H57.4386V37.7833C57.4386 37.7833 53.3723 38.0084 52.5671 35.0424C52.3325 33.9633 52.3895 32.8412 52.7321 31.7914L55.1679 25.0993C55.7781 23.4321 56.3918 21.7515 57.0085 20.0576L61.4099 8.05377C62.9569 12.0551 64.5009 16.0563 66.0414 20.0576L66.7716 22.0183L67.2318 23.1437L67.947 25.0993C69.6876 29.6358 71.4131 34.1522 73.1337 38.6886H74.5441L75.7745 36.2828C76.1547 35.5526 76.5348 34.8074 76.9149 34.0771C78.5354 30.9261 80.1409 27.7801 81.7615 24.6191L82.0766 24.0089C83.2534 26.8432 84.4423 29.6774 85.6427 32.5116C85.7963 32.9521 85.9083 33.4059 85.9778 33.8671C86.2529 35.5577 85.6627 36.5479 84.8725 37.0981C84.0362 37.6281 83.0614 37.8979 82.0716 37.8734V38.7136H95.876V37.8734L95.5409 37.8333C95.2488 37.7611 94.9692 37.6465 94.7106 37.4933Z" fill="url(#y6zvxf)"></path><path d="M46.6 22.0635H0V23.1088H46.6V22.0635Z" fill="url(#ym09i)"></path><path d="M140 22.0635H95.8706V23.1088H140V22.0635Z" fill="url(#src6l)"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="ugf7p" x1="61.555" x2="61.555" y1="1.85667" y2="38.2082"><stop offset="0.09" stop-color="#AF6F57"></stop><stop offset="0.12" stop-color="#CA927A"></stop><stop offset="0.14" stop-color="#E0AD96"></stop><stop offset="0.17" stop-color="#F0C1AA"></stop><stop offset="0.2" stop-color="#F9CDB6"></stop><stop offset="0.22" stop-color="#FCD1BA"></stop><stop offset="0.26" stop-color="#F7CBB4"></stop><stop offset="0.32" stop-color="#EABBA3"></stop><stop offset="0.33" stop-color="#E6B69E"></stop><stop offset="0.34" stop-color="#E1AF97"></stop><stop offset="0.35" stop-color="#CD967C"></stop><stop offset="0.36" stop-color="#BD8166"></stop><stop offset="0.38" stop-color="#B17155"></stop><stop offset="0.41" stop-color="#A8654A"></stop><stop offset="0.44" stop-color="#A35F43"></stop><stop offset="0.53" stop-color="#A25D41"></stop><stop offset="0.59" stop-color="#BA7051"></stop><stop offset="0.66" stop-color="#D08160"></stop><stop offset="0.72" stop-color="#DD8C69"></stop><stop offset="0.79" stop-color="#DE8C6A"></stop><stop offset="0.81" stop-color="#C87B5B"></stop><stop offset="0.83" stop-color="#B76E4F"></stop><stop offset="0.86" stop-color="#AB6447"></stop><stop offset="0.89" stop-color="#A45F42"></stop><stop offset="0.99" stop-color="#A25D41"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="y6zvxf" x1="71.2381" x2="71.2381" y1="1.06154" y2="38.6486"><stop offset="0.09" stop-color="#AF6F57"></stop><stop offset="0.12" stop-color="#CA927A"></stop><stop offset="0.14" stop-color="#E0AD96"></stop><stop offset="0.17" stop-color="#F0C1AA"></stop><stop offset="0.2" stop-color="#F9CDB6"></stop><stop offset="0.22" stop-color="#FCD1BA"></stop><stop offset="0.26" stop-color="#F7CBB4"></stop><stop offset="0.32" stop-color="#EABBA3"></stop><stop offset="0.33" stop-color="#E6B69E"></stop><stop offset="0.34" stop-color="#E1AF97"></stop><stop offset="0.35" stop-color="#CD967C"></stop><stop offset="0.36" stop-color="#BD8166"></stop><stop offset="0.38" stop-color="#B17155"></stop><stop offset="0.41" stop-color="#A8654A"></stop><stop offset="0.44" stop-color="#A35F43"></stop><stop offset="0.53" stop-color="#A25D41"></stop><stop offset="0.59" stop-color="#BA7051"></stop><stop offset="0.66" stop-color="#D08160"></stop><stop offset="0.72" stop-color="#DD8C69"></stop><stop offset="0.79" stop-color="#DE8C6A"></stop><stop offset="0.81" stop-color="#C87B5B"></stop><stop offset="0.83" stop-color="#B76E4F"></stop><stop offset="0.86" stop-color="#AB6447"></stop><stop offset="0.89" stop-color="#A45F42"></stop><stop offset="0.99" stop-color="#A25D41"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="ym09i" x1="23.3025" x2="23.3025" y1="5.103" y2="36.033"><stop offset="0.09" stop-color="#AF6F57"></stop><stop offset="0.12" stop-color="#CA927A"></stop><stop offset="0.14" stop-color="#E0AD96"></stop><stop offset="0.17" stop-color="#F0C1AA"></stop><stop offset="0.2" stop-color="#F9CDB6"></stop><stop offset="0.22" stop-color="#FCD1BA"></stop><stop offset="0.26" stop-color="#F7CBB4"></stop><stop offset="0.32" stop-color="#EABBA3"></stop><stop offset="0.33" stop-color="#E6B69E"></stop><stop offset="0.34" stop-color="#E1AF97"></stop><stop offset="0.35" stop-color="#CD967C"></stop><stop offset="0.36" stop-color="#BD8166"></stop><stop offset="0.38" stop-color="#B17155"></stop><stop offset="0.41" stop-color="#A8654A"></stop><stop offset="0.44" stop-color="#A35F43"></stop><stop offset="0.53" stop-color="#A25D41"></stop><stop offset="0.59" stop-color="#BA7051"></stop><stop offset="0.66" stop-color="#D08160"></stop><stop offset="0.72" stop-color="#DD8C69"></stop><stop offset="0.79" stop-color="#DE8C6A"></stop><stop offset="0.81" stop-color="#C87B5B"></stop><stop offset="0.83" stop-color="#B76E4F"></stop><stop offset="0.86" stop-color="#AB6447"></stop><stop offset="0.89" stop-color="#A45F42"></stop><stop offset="0.99" stop-color="#A25D41"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="src6l" x1="117.938" x2="117.938" y1="4.54782" y2="35.7779"><stop offset="0.09" stop-color="#AF6F57"></stop><stop offset="0.12" stop-color="#CA927A"></stop><stop offset="0.14" stop-color="#E0AD96"></stop><stop offset="0.17" stop-color="#F0C1AA"></stop><stop offset="0.2" stop-color="#F9CDB6"></stop><stop offset="0.22" stop-color="#FCD1BA"></stop><stop offset="0.26" stop-color="#F7CBB4"></stop><stop offset="0.32" stop-color="#EABBA3"></stop><stop offset="0.33" stop-color="#E6B69E"></stop><stop offset="0.34" stop-color="#E1AF97"></stop><stop offset="0.35" stop-color="#CD967C"></stop><stop offset="0.36" stop-color="#BD8166"></stop><stop offset="0.38" stop-color="#B17155"></stop><stop offset="0.41" stop-color="#A8654A"></stop><stop offset="0.44" stop-color="#A35F43"></stop><stop offset="0.53" stop-color="#A25D41"></stop><stop offset="0.59" stop-color="#BA7051"></stop><stop offset="0.66" stop-color="#D08160"></stop><stop offset="0.72" stop-color="#DD8C69"></stop><stop offset="0.79" stop-color="#DE8C6A"></stop><stop offset="0.81" stop-color="#C87B5B"></stop><stop offset="0.83" stop-color="#B76E4F"></stop><stop offset="0.86" stop-color="#AB6447"></stop><stop offset="0.89" stop-color="#A45F42"></stop><stop offset="0.99" stop-color="#A25D41"></stop></linearGradient></defs></svg>
                <h1>Google reviews</h1>
            </div>
            <div class="blog-slider">
                <div class="google-section">
                    <h3>AX CAPITAL Dubai</h3>
                    <p>Business Bay Office Tower - 14th Floor Westburry - Marasi Dr - Dubai</p>
                    <div class="rate">
                    <h5>4.8</h5>
                    <ul>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                    </ul>
                    <span class="reviews-total">
                        527 reviews
                    </span>
                    </div>
                </div>
                <div class="blog-slider__wrp swiper-wrapper">
                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                    
                    <img src="https://upload-5b6ed3f1470f864e3426fe4c1fe063ed.s3.amazonaws.com/main/45a/45ae2a01451fb255d118e2afc8fbd65c/Screenshot+2023-05-23+135558.png" alt=""/>
                    </div>
                    <div class="blog-slider__content">
                    {/* <!-- <span class="blog-slider__code">26 December 2019</span> --> */}
                    <div class="blog-slider__title"><span class="avatar" style={{background: "#f4511f"}}>D</span>Danillo Luglime</div>
                    <div class="date-star">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <div class="date">a day ago</div>
                    </div>
                    <div class="blog-slider__text">Mariana Dalvesco, an excellent professional who contributed in a very thoughtful way to our learning about the real estate market in Dubai in real estate o new real estate in Brazil.</div>
                    {/* <!-- <a href="#" class="blog-slider__button">READ MORE</a> --> */}
                    </div>
                </div>
                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                    <img src="https://upload-5b6ed3f1470f864e3426fe4c1fe063ed.s3.amazonaws.com/main/558/5585b5cd1f276898768e70a05a0e6f83/WhatsApp+Image+2022-10-25+at+1.25.09+PM.jpeg" alt=""/>
                    </div>
                    <div class="blog-slider__content">
                    {/* <!-- <span class="blog-slider__code">26 December 2019</span> --> */}
                    <div class="blog-slider__title"><span class="avatar" style={{background: "#455a65"}}>J</span>Julia</div>
                    <div class="date-star">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <div class="date">a day ago</div>
                    </div>
                    <div class="blog-slider__text">Just bought my first property in Dubai and being a first time owner it can be overwhelming. Thanks to specialist Fahd Bouazer from AX Capital for helping me along the way! He manage to closed a great deal very efficiently and guide me thru out every steps! He’s super friendly, professional, knowledgeable and hardworking! I’m impressed that even on public holidays and weekends, he will still reply if I have any questions. Really happy with his service and hopefully will have more deals in the future :)</div>
                    {/* <!-- <a href="#" class="blog-slider__button">READ MORE</a> --> */}
                    </div>
                </div>
                
                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                    <img src="https://upload-5b6ed3f1470f864e3426fe4c1fe063ed.s3.amazonaws.com/main/2e1/2e1ce9eac679ccdc1cea973edd797988/Stephanie+Kehdy.jpg" alt=""/>
                    </div>
                    <div class="blog-slider__content">
                    {/* <!-- <span class="blog-slider__code">26 December 2019</span> --> */}
                    <div class="blog-slider__title"><span class="avatar" style={{background: "#512da8"}}>A</span>Anka Internationaal</div>
                    <div class="date-star">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <div class="date">2 days ago</div>
                    </div>
                    <div class="blog-slider__text">It has been an extreme pleasure and trouble free experience to deal with Ms. Stephanie Kehdy from AX Capital. Stepanie has handled all the paper work & details and given complete clarity on the process to be followed. Buying a property can be a daunting experience, but Stephanie with her professionalism and her in-dept knowledge has lessened the anxiety of the process. I am glad that Stephanie has been there at every step of the way.
If I had to buy property again, it would be with Stephanie along the journey.</div>
                    {/* <!-- <a href="#" class="blog-slider__button">READ MORE</a> --> */}
                    </div>
                </div>

                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                    <img src="https://upload-5b6ed3f1470f864e3426fe4c1fe063ed.s3.amazonaws.com/main/eae/eaef9bb38a995144469573a9dc47ba81/photo_2023-02-01_14-01-34+_2_.jpg" alt=""/>
                    </div>
                    <div class="blog-slider__content">
                    {/* <!-- <span class="blog-slider__code">26 December 2019</span> --> */}
                    <div class="blog-slider__title"><span class="avatar" style={{background: "#512da8"}}>M</span>Mishoo Milson</div>
                    <div class="date-star">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <div class="date">a week ago</div>
                    </div>
                    <div class="blog-slider__text">Fantastic! Nawaf Atalla is amazing…
The best agent in the region; he is knowledgeable, informed, has the latest market intelligence, is an advisor and most of all gives you the space to make the right decision for you and your family. There are no pushy tactics, and he works just as hard for you, whether you’re buying a small family home or a mansion on the palm. He is truly a seasoned agent and a true professional….</div>
                    {/* <!-- <a href="#" class="blog-slider__button">READ MORE</a> --> */}
                    </div>
                </div>

                <div class="blog-slider__item swiper-slide">
                    <div class="blog-slider__img">
                    <img src="https://upload-5b6ed3f1470f864e3426fe4c1fe063ed.s3.amazonaws.com/main/1fe/1fed2064955108b7f2bc5e10f8185112/photo_2022-09-29_18-02-32.jpg" alt=""/>
                    </div>
                    <div class="blog-slider__content">
                    {/* <!-- <span class="blog-slider__code">26 December 2019</span> --> */}
                    <div class="blog-slider__title"><span class="avatar" style={{background: "#512da8"}}>T</span>Taufique M. Ali Surve</div>
                    <div class="date-star">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <div class="date">a week ago</div>
                    </div>
                    <div class="blog-slider__text">If you want an honest estate agent who you can trust completely, then choose The Good estate Agent . Leanne from AX Capital was so supportive from start to finish and always went the extra mile when required. Delivers what she promises.
Friendly, reliable and approachable, she never failed to either pick up the phone or ring back and helpfully acted as an intermediary between me and my vendor's slow solicitor! She helped make the whole experience a little less stressful.
Thank you Leanne!
Highly recommend!</div>
                    {/* <!-- <a href="#" class="blog-slider__button">READ MORE</a> --> */}
                    </div>
                </div>
                
                </div>
                <div class="blog-slider__pagination"></div>
            </div>
        </dib>
    </>
}

export default Review;