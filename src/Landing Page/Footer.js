import React from 'react';
import '../Styles/footer.css';
function Footer() {
    return (
        <footer className="Footer">
            <ul class="hours">
                <li><strong>Monday:</strong> 7:00 AM – 5:00 PM</li>
                <li><strong>Tuesday:</strong> 7:00 AM – 5:00 PM</li>
                <li><strong>Wednesday:</strong> 7:00 AM – 5:00 PM</li>
                <li><strong>Thursday:</strong> 7:00 AM – 5:00 PM</li>
                <li><strong>Friday:</strong> 7:00 AM – 5:00 PM</li>
                <li><strong>Saturday:</strong> 7:00 AM – 3:00 PM</li>
                <li><strong>Sunday:</strong> Closed</li>
            </ul>
            <p>© 2024 Power Supply Coffee Co. All rights reserved.</p>
        </footer>
    );
}

export default Footer;