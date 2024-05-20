import React from 'react';
import '../Css/SocialLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faInstagram,
}from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  const socialLinks = [
    { icon: faTwitter, link: 'https://twitter.com/Marshall07032'},
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/marshall-keyser-5501b224a/'},
    { icon: faInstagram, link: 'https://www.instagram.com/marshall0.0/'},
  ];

  return (
    <div className="social-links">
      {socialLinks.map((social) => (
        <a key={social.link} href={social.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={social.icon} size="2x" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;