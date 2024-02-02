import  { Component } from "react";
import Slider from "react-slick"; // Make sure to import Slider if you haven't already
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../Stylesheet/style.css"

interface Props{
  head: string
  data: any[]
  span: string
}
export class SliderProps extends Component<Props> {
  slider: any;
  constructor(props:any) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { data, head, span }:any = this.props; // Receive data as a prop

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="course_main">
        <div className="our_head">
          <span>Our Program Courses</span>
          <h2 className="h2">
            {head}
            <div className="butt">
              <span className="button" onClick={this.previous}>
                <RiArrowLeftLine />
              </span>
              <span className="button" onClick={this.next}>
                <RiArrowRightLine />
              </span>
            </div>
          </h2>
        </div>
        <div    style={{marginTop: "1rem"}} className="our_grid">
          <Slider
            className="carousel"
            ref={(c) => (this.slider = c)}
            {...settings}
          >
            {data.map((item:any, index:any) => (
              <div key={index} className="slide_card">
                <img src={item.image} alt="" />
                <div className="content">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_802_332)">
                        <path
                          d="M8.70644 1.45909L16.6752 4.82368C16.7717 4.86404 16.8541 4.93205 16.9121 5.01914C16.9701 5.10623 17.001 5.20851 17.001 5.31313C17.001 5.41776 16.9701 5.52004 16.9121 5.60713C16.8541 5.69422 16.7717 5.76223 16.6752 5.80259L13.4579 7.15976V10.6249C13.4579 10.7227 13.431 10.8185 13.38 10.9019C13.3002 11.0255 13.2064 11.14 13.1016 11.2433C12.9253 11.4246 12.6589 11.6541 12.2779 11.878C11.5129 12.3299 10.3115 12.7492 8.4996 12.7492C8.02289 12.7492 7.58869 12.7202 7.19202 12.6692C7.05556 12.6474 6.93295 12.5734 6.85018 12.4627C6.76742 12.3521 6.73103 12.2136 6.74872 12.0765C6.76642 11.9395 6.83681 11.8147 6.94496 11.7287C7.05311 11.6427 7.19052 11.6023 7.32802 11.6159C7.67652 11.6605 8.0661 11.6867 8.4996 11.6867C10.1408 11.6867 11.153 11.3092 11.7381 10.9635C11.9577 10.8374 12.1603 10.6823 12.3395 10.5031L12.3954 10.4429V7.60743L8.70644 9.16576C8.64099 9.19342 8.57066 9.20768 8.4996 9.20768C8.42855 9.20768 8.35822 9.19342 8.29277 9.16576L4.07252 7.38359V9.62901C4.4281 9.72038 4.75252 9.90597 5.01248 10.1659C5.4226 10.5753 5.66627 11.1647 5.66627 11.8858V15.0733C5.66589 15.1625 5.64336 15.2502 5.60071 15.3286C5.55806 15.407 5.49662 15.4736 5.4219 15.5223C5.37389 15.5527 5.32423 15.5804 5.27314 15.6052C5.15413 15.6643 5.03104 15.7147 4.90481 15.7561C4.46409 15.8964 4.00376 15.9653 3.54127 15.9601C3.07876 15.9656 2.61837 15.8967 2.17773 15.7561C2.05162 15.7144 1.92855 15.6639 1.80939 15.6052C1.75548 15.5796 1.7034 15.5502 1.65356 15.5174C1.58097 15.4686 1.5214 15.4029 1.48004 15.3258C1.43868 15.2488 1.41679 15.1628 1.41627 15.0754V11.8879C1.41627 11.1654 1.65994 10.5775 2.07006 10.1666C2.32991 9.90721 2.65446 9.72207 3.01002 9.63043V6.93663L0.32402 5.80118C0.228188 5.76035 0.146472 5.69226 0.0890357 5.60536C0.0315992 5.51846 0.000976563 5.41659 0.000976562 5.31243C0.000976562 5.20826 0.0315992 5.10639 0.0890357 5.0195C0.146472 4.9326 0.228188 4.8645 0.32402 4.82368L8.29277 1.45909C8.35822 1.43143 8.42855 1.41718 8.4996 1.41718C8.57066 1.41718 8.64099 1.43143 8.70644 1.45909ZM8.4996 8.10043L15.1027 5.31243L8.4996 2.52443L1.89652 5.31243L8.4996 8.10043ZM3.54127 10.6249C3.27423 10.6249 3.01356 10.7248 2.82089 10.9175C2.63319 11.1052 2.47877 11.4133 2.47877 11.8865V14.7354C2.69056 14.8098 3.04331 14.8969 3.54127 14.8969C4.03923 14.8969 4.39198 14.8098 4.60377 14.7354V11.8858C4.60377 11.4119 4.44935 11.1045 4.26164 10.9168C4.16663 10.8232 4.0541 10.7492 3.9305 10.6992C3.80689 10.6491 3.67463 10.6239 3.54127 10.6249Z"
                          fill="#0D0D0D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_802_332">
                          <rect width="17" height="17" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {span}
                  </span>
                  <h3>{item.head}</h3>
                  <p>{item.body}</p>
                  <Link to={'/course/139010'}>
                    Enroll Now
                    <RiArrowRightLine />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
