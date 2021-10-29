import React from 'react';
import './aboutUs.css';
import PhotoOne from '../about_us/photo1.png';
import PhotoTwo from '../about_us/photo2.png';
import PhotoThree from '../about_us/photo3.png';

function AboutUs() {
    return (
        <div>
            <div className="pageName">
                <h1 className="aboutUsTitle">About us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="aboutUsContentBox">
                            <h1>About us</h1>
                            <div className="aboutUsText">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna. In convallis diam volutpat libero tincidunt semper. Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie. In id elementum turpis. Curabitur quis tincidunt mauris. Duis pharetra a odio vitae consectetur. Nullam vitae lacinia nisi, at porta sapien. Etiam vehicula augue at lacus tempus euismod. Nullam sit amet eros ut metus pulvinar volutpat et elementum lacus. Cras mauris mi, vulputate ac justo vitae, fringilla vestibulum sapien. Sed hendrerit nulla id luctus placerat. Sed venenatis ornare augue, et viverra dolor ullamcorper id. Duis id quam hendrerit, mollis ex ut, varius ipsum. Etiam bibendum viverra nulla, at cursus leo fringilla eget. In pellentesque viverra elit id vestibulum. Sed eget leo suscipit, commodo urna vitae, efficitur ligula. Pellentesque non mauris blandit, ultrices nibh consectetur, auctor velit. Nunc ac justo lacus. Vivamus et gravida ante. Quisque cursus augue ligula, aliquam ullamcorper enim ultricies sit amet. In placerat sapien eu ligula commodo pharetra. Nunc et facilisis dolor, ut condimentum metus. Phasellus lacinia efficitur diam sed pharetra. Nullam euismod magna at mauris hendrerit scelerisque vitae vel leo. Cras interdum tellus in sapien fermentum consequat. Sed sollicitudin non elit eu faucibus. Phasellus et enim ultricies, tincidunt velit eu, dictum dui. Proin laoreet semper sapien vitae aliquet. Vestibulum accumsan nibh pharetra dui vulputate commodo. Pellentesque a justo eu diam cursus auctor. Quisque sit amet maximus lacus, in mollis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center photos">
                        <img src={PhotoOne} alt="Photo"/>
                        <div className="row">
                            <div className="col">
                                <img src={PhotoTwo} alt="Photo"/>
                            </div>
                            <div className="col">
                                <img src={PhotoThree} alt="Photo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
