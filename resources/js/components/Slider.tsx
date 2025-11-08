import { Link } from '@inertiajs/react';
import { Component } from 'react';

import slide1 from './../assets/images/main-slider/slider2/slide1.jpg';
import slide2 from './../assets/images/main-slider/slider2/slide2.jpg';
import slide3 from './../assets/images/main-slider/slider2/slide3.jpg';

interface MyModalState {
    isOpen: boolean;
}

class Slider extends Component<{}, MyModalState> {
    componentDidMount() {
        const loadScript = (src: string): Promise<void> => {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            });
        };

        loadScript('./assets/js/rev-script-2.js');
    }
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        return (
            <>
                <div
                    id="rev_slider_one_wrapper"
                    className="rev_slider_wrapper fullscreen-container"
                    data-alias="mask-showcase"
                    data-source="gallery"
                    style={{ background: '#aaaaaa', padding: 0 }}
                >
                    {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
                    <div
                        id="rev_slider_one"
                        className="rev_slider fullscreenbanner"
                        style={{ display: 'none' }}
                        data-version="5.4.1"
                    >
                        <ul>
                            {/* SLIDE 1 */}
                            <li
                                data-index="rs-70"
                                data-transition="fade"
                                data-slotamount="default"
                                data-hideafterloop={0}
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed={300}
                                data-thumb={slide3}
                                data-rotate={0}
                                data-saveperformance="off"
                                data-title
                                data-param1={1}
                                data-param2
                                data-param3
                                data-param4
                                data-param5
                                data-param6
                                data-param7
                                data-param8
                                data-param9
                                data-param10
                                data-description
                            >
                                {/* MAIN IMAGE */}
                                <img
                                    src={slide3}
                                    alt=""
                                    data-bgcolor="#f8f8f8"
                                    style={{}}
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat"
                                    data-bgparallax="off"
                                    className="rev-slidebg"
                                    data-no-retina
                                />
                                {/* LAYER 1  right image overlay dark*/}
                                <div
                                    className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-tobggroup"
                                    id="slide-70-layer-1"
                                    data-x="['right','right','right','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-fontweight="['100','100','400','400']"
                                    data-width="['full','full','full','full']"
                                    data-height="['full','full','full','full']"
                                    data-whitespace="nowrap"
                                    data-type="shape"
                                    data-basealign="slide"
                                    data-responsive_offset="off"
                                    data-responsive="off"
                                    data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                                    data-textalign="['left','left','left','left']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 6,
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                    }}
                                ></div>
                                {/* LAYER 3  Thin text title*/}
                                <div
                                    className="tp-caption tp-resizeme slider-tag-line"
                                    id="slide-70-layer-3"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-50','-50','-50','-50']"
                                    data-fontsize="['22',22','20','16']"
                                    data-lineheight="['26','26','26','22']"
                                    data-width="['700','650','620','380']"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[10,10,10,10]"
                                    data-paddingright="[20,20,20,20]"
                                    data-paddingbottom="[10,10,10,10]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    Modern
                                </div>
                                {/* LAYER 4  Bold Title*/}
                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-70-layer-4"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['10','10','10','10']"
                                    data-fontsize="['64','64','60','40']"
                                    data-lineheight="['74','74','70','50']"
                                    data-width="['700','700','700','90%']"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[20,20,20,20]"
                                    data-paddingright="[20,20,20,20]"
                                    data-paddingbottom="[30,30,30,30]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        textTransform: 'uppercase',
                                        whiteSpace: 'normal',
                                        fontWeight: 800,
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    Architecture
                                </div>
                                {/* LAYER 5  Paragraph*/}
                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-70-layer-5"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['80','80','80','80']"
                                    data-fontsize="['16','16','16','16']"
                                    data-lineheight="['22','22','22','22']"
                                    data-width="['600','600','600','380']"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":3500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[20,20,20,20]"
                                    data-paddingright="[20,20,20,20]"
                                    data-paddingbottom="[30,30,30,30]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        whiteSpace: 'normal',
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    Analysis and planning services that help
                                    both the client and architects to work out
                                    the forthcoming project...
                                </div>
                                {/* LAYER 6  Read More*/}
                                <div
                                    className="tp-caption rev-btn tp-resizeme"
                                    id="slide-70-layer-6"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['160','160','160','160']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="button"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":4000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{ zIndex: 9, lineHeight: 30 }}
                                >
                                    <Link
                                        href={'/about-1'}
                                        className="site-button btn-half"
                                    >
                                        <span> Read More</span>
                                    </Link>
                                </div>
                            </li>
                            {/* SLIDE 2 */}
                            <li
                                data-index="rs-71"
                                data-transition="fade"
                                data-slotamount="default"
                                data-hideafterloop={0}
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed={300}
                                data-thumb={slide1}
                                data-rotate={0}
                                data-saveperformance="off"
                                data-title
                                data-param1={1}
                                data-param2
                                data-param3
                                data-param4
                                data-param5
                                data-param6
                                data-param7
                                data-param8
                                data-param9
                                data-param10
                                data-description
                            >
                                {/* MAIN IMAGE */}
                                <img
                                    src={slide1}
                                    alt=""
                                    data-bgcolor="#f8f8f8"
                                    style={{}}
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat"
                                    data-bgparallax="off"
                                    className="rev-slidebg"
                                    data-no-retina
                                />
                                {/* LAYER 1  right image overlay dark*/}
                                <div
                                    className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-tobggroup"
                                    id="slide-71-layer-1"
                                    data-x="['right','right','right','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-fontweight="['100','100','400','400']"
                                    data-width="['full','full','full','full']"
                                    data-height="['full','full','full','full']"
                                    data-whitespace="nowrap"
                                    data-type="shape"
                                    data-basealign="slide"
                                    data-responsive_offset="off"
                                    data-responsive="off"
                                    data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                                    data-textalign="['left','left','left','left']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 6,
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                    }}
                                ></div>
                                {/* LAYER 3  Thin text title*/}
                                <div
                                    className="tp-caption tp-resizeme slider-tag-line"
                                    id="slide-71-layer-3"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-50','-50','-50','-50']"
                                    data-fontsize="['22',22','20','16']"
                                    data-lineheight="['26','26','26','22']"
                                    data-width="['700','650','620','380']"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[10,10,10,10]"
                                    data-paddingright="[20,20,20,20]"
                                    data-paddingbottom="[10,10,10,10]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    Modish
                                </div>
                                {/* LAYER 4  Bold Title*/}
                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-71-layer-4"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['10','10','10','10']"
                                    data-fontsize="['64','64','60','40']"
                                    data-lineheight="['74','74','70','50']"
                                    data-width="['700','700','700','90%']"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[20,20,20,20]"
                                    data-paddingright="[20,20,20,20]"
                                    data-paddingbottom="[30,30,30,30]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        textTransform: 'uppercase',
                                        whiteSpace: 'normal',
                                        fontWeight: 800,
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    Deluxe Room
                                </div>
                                {/* LAYER 5  Paragraph*/}
                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-71-layer-5"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['80','80','80','80']"
                                    data-fontsize="['16','16','16','16']"
                                    data-lineheight="['22','22','22','22']"
                                    data-width="['600','600','600','380']"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":3500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[20,20,20,20]"
                                    data-paddingright="[20,20,20,20]"
                                    data-paddingbottom="[30,30,30,30]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        whiteSpace: 'normal',
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    We combine Interior and Exterior Design
                                    services and often provide them as a single
                                    solution. It helps us...
                                </div>
                                {/* LAYER 6  Read More*/}
                                <div
                                    className="tp-caption rev-btn tp-resizeme"
                                    id="slide-71-layer-6"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['160','160','160','160']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="button"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":4000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{ zIndex: 9, lineHeight: 30 }}
                                >
                                    <Link
                                        href={'/about-1'}
                                        className="site-button btn-half"
                                    >
                                        <span> Read More</span>
                                    </Link>
                                </div>
                            </li>
                            {/* SLIDE 3 */}
                            <li
                                data-index="rs-72"
                                data-transition="fade"
                                data-slotamount="default"
                                data-hideafterloop={0}
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed={300}
                                data-thumb={slide2}
                                data-rotate={0}
                                data-saveperformance="off"
                                data-title
                                data-param1={1}
                                data-param2
                                data-param3
                                data-param4
                                data-param5
                                data-param6
                                data-param7
                                data-param8
                                data-param9
                                data-param10
                                data-description
                            >
                                {/* MAIN IMAGE */}
                                <img
                                    src={slide2}
                                    alt=""
                                    data-bgcolor="#f8f8f8"
                                    style={{}}
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat"
                                    data-bgparallax="off"
                                    className="rev-slidebg"
                                    data-no-retina
                                />
                                {/* LAYER 1  right image overlay dark*/}
                                <div
                                    className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-tobggroup"
                                    id="slide-72-layer-1"
                                    data-x="['right','right','right','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-fontweight="['100','100','400','400']"
                                    data-width="['full','full','full','full']"
                                    data-height="['full','full','full','full']"
                                    data-whitespace="nowrap"
                                    data-type="shape"
                                    data-basealign="slide"
                                    data-responsive_offset="off"
                                    data-responsive="off"
                                    data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                                    data-textalign="['left','left','left','left']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 6,
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                    }}
                                ></div>
                                {/* LAYER 3  Thin text title*/}
                                <div
                                    className="tp-caption tp-resizeme slider-tag-line"
                                    id="slide-72-layer-3"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-50','-50','-50','-50']"
                                    data-fontsize="['22',22','20','16']"
                                    data-lineheight="['26','26','26','22']"
                                    data-width="['700','650','620','380']"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[10,10,10,10]"
                                    data-paddingright="[20,20,20,20]"
                                    data-paddingbottom="[10,10,10,10]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    Modish
                                </div>
                                {/* LAYER 4  Bold Title*/}
                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-72-layer-4"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['10','10','10','10']"
                                    data-fontsize="['64','64','60','40']"
                                    data-lineheight="['74','74','70','50']"
                                    data-width="['700','700','700','700']"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[20,20,20,20]"
                                    data-paddingright="[20,20,20,0]"
                                    data-paddingbottom="[30,30,30,30]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        textTransform: 'uppercase',
                                        whiteSpace: 'normal',
                                        fontWeight: 800,
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    Deluxe Kitchen
                                </div>
                                {/* LAYER 5  Paragraph*/}
                                <div
                                    className="tp-caption tp-resizeme"
                                    id="slide-72-layer-5"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['80','80','80','80']"
                                    data-fontsize="['16','16','16','16']"
                                    data-lineheight="['22','22','22','22']"
                                    data-width="['600','600','600','380']"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":3500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[20,20,20,20]"
                                    data-paddingright="[20,20,20,20]"
                                    data-paddingbottom="[30,30,30,30]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                        zIndex: 10,
                                        whiteSpace: 'normal',
                                        color: '#fff',
                                        fontFamily: '"Poppins", sans-serif',
                                    }}
                                >
                                    We offer comprehensive Architectural
                                    Engineering Services including Interior
                                    design, Master planning, 3D modeling...
                                </div>
                                {/* LAYER 6  Read More*/}
                                <div
                                    className="tp-caption rev-btn tp-resizeme"
                                    id="slide-72-layer-6"
                                    data-x="['left','left','left','center']"
                                    data-hoffset="['50','50','70','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['160','160','160','160']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="button"
                                    data-responsive_offset="on"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":4000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                    data-textalign="['left','left','left','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{ zIndex: 9, lineHeight: 30 }}
                                >
                                    <Link
                                        href={'/about-1'}
                                        className="site-button btn-half"
                                    >
                                        <span> Read More</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div
                            className="tp-bannertimer"
                            style={{
                                height: 10,
                                background: 'rgba(0, 0, 0, 0.15)',
                            }}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Slider;
