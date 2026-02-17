import VelocityMarquee from '@/components/animation/VelocityMarquee';
import VideoParallax from '@/components/animation/VideoParallax';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
      <div className="mxd-hero-03">
        <div className="mxd-hero-03__wrap loading-wrap">
          {/* top part */}
          <div className="mxd-hero-03__top">
            {/* marquee */}
            <div className="mxd-hero-03__marquee loading__item">
              {/* Marquee Start */}
              <VelocityMarquee className="marquee marquee-right--gsap">
                {/* item */}
                {/* <div className="marquee__item one-line">
                  <div className="hero-03-marquee__video">
                    <video
                      preload="auto"
                      autoPlay
                      loop
                      muted
                      poster="video/hero/hero-video-02.webp"
                    >
                      <source
                        type="video/mp4"
                        src="/video/hero/hero-video-02.mp4"
                      />
                      <source
                        type="video/webm"
                        src="/video/hero/hero-video-02.webm"
                      />
                      <source
                        type="video/ogv"
                        src="/video/hero/hero-video-02.ogv"
                      />
                    </video>
                  </div>
                </div> */}
                {/* item */}
                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-move"
                      alt="Image"
                      src="/img/hero/hero-img-01.webp"
                      width={1000}
                      height={1532}
                    />
                  </div>
                </div>
                {/* item */}
                {/* <div className="marquee__item one-line">
                  <div className="hero-03-marquee__video">
                    <video
                      preload="auto"
                      autoPlay
                      loop
                      muted
                      poster="video/hero/hero-video-01.webp"
                    >
                      <source
                        type="video/mp4"
                        src="/video/hero/hero-video-01.mp4"
                      />
                      <source
                        type="video/webm"
                        src="/video/hero/hero-video-01.webm"
                      />
                      <source
                        type="video/ogv"
                        src="/video/hero/hero-video-01.ogv"
                      />
                    </video>
                  </div>
                </div> */}
                {/* item */}
                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-rotate-slow"
                      alt="Image"
                      src="/img/hero/hero-img-02.webp"
                      width={1410}
                      height={1056}
                    />
                  </div>
                </div>
                {/* item */}
                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-move"
                      alt="Image"
                      src="/img/hero/hero-img-03.webp"
                      width={2152}
                      height={2015}
                    />
                  </div>
                </div>
                {/* item */}
                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-pulse-small"
                      alt="Image"
                      src="/img/hero/hero-img-04.webp"
                      width={800}
                      height={780}
                    />
                  </div>
                </div>
                {/* item */}
                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-pulse-small"
                      alt="Image"
                      src="/img/hero/hero-img-05.webp"
                      width={800}
                      height={780}
                    />
                  </div>
                </div>
                {/* item */}
                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-pulse-small"
                      alt="Image"
                      src="/img/hero/hero-img-06.webp"
                      width={800}
                      height={780}
                    />
                  </div>
                </div>
              </VelocityMarquee>
              {/* Marquee End */}
            </div>
            {/* headline */}
            <div className="mxd-hero-03__headline">
              <p className="hero-03-headline__caption loading__item">
                Transforming Ideas into Scalable Technology & Intelligent
                Solutions
              </p>
              <div className="mxd-section-title__title">
                <h2
                  className="reveal-type"
                  style={{ color: '#fff', fontSize: '300px' }}
                >
                  Kivva Tech
                </h2>
              </div>
            </div>
          </div>
          {/* bottom part */}
          <div className="mxd-hero-03__bottom">
            <div className="mxd-container">
              {/* video divider */}
              <div className="mxd-divider">
                <div className="mxd-divider__video">
                  <VideoParallax
                    className="video parallax-video"
                    src="/video/1920x1080_video-04.webm"
                    poster="/video/1920x1080_video-04.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
