import { Component } from 'react';

class GoogleMaps extends Component {
    render() {
        return (
            <>
                <div>
                    <iframe
                        className="w-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7305137988983!2d109.7656966!3d-7.712038799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ac700144b7c87%3A0x208bd7465b1613c9!2sMuseum%20Gerabah%20Kebumen!5e0!3m2!1sen!2sid!4v1762677878911!5m2!1sen!2sid"
                        // width="600"
                        height="450"
                        style={{ border: '0' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </>
        );
    }
}

export default GoogleMaps;
