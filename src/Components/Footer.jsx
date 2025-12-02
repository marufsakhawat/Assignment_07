import React from 'react';
import iFacebook from '../assets/i-facebook.png';
import iTwitter from '../assets/i-twitter.png';
import iLinkedin from '../assets/i-linkdien.png';
import iMessage from '../assets/i-message.png';
const Footer = () => {
  return (
  <div>
    <footer class="bg-black text-gray-300 px-8 py-12 ">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-5 gap-8">
                <div>
                    <h3 class="text-white font-semibold mb-2">CS — Ticket System</h3>
                    <p class="text-sm">Barmuda is simply wonder of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-2">Company</h4>
                    <ul class="space-y-1 text-sm">
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-2">Services</h4>
                    <ul class="space-y-1 text-sm">
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-2">Information</h4>
                    <ul class="space-y-1 text-sm">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-2">Social Links</h4>
                    <ul class="space-y-1 text-sm">
                        <li className='flex gap-2'><img src={iFacebook}/><span>@CS — Ticket System</span></li>
                        <li className='flex gap-2'><img src={iTwitter}/><span>@CS — Ticket System</span></li>
                        <li className='flex gap-2'><img src={iLinkedin}/><span>@CS — Ticket System</span></li>
                        <li className='flex gap-2'><img src={iMessage}/><span>support@cst.com</span></li>
                    </ul>
                </div>
            </div>
            <div class="border-t-1 text-center pt-5 border-gray-500 text-white-500 text-sm mt-8">&copy; 2025 CS - Ticket System. All rights reserved.
            </div>
        </div>
    </footer>
  </div>
  )
}

export default Footer