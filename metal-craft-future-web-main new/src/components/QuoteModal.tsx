
import React, { useState } from 'react';

const QuoteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'window-frames',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, projectType, message } = formData;
    const subject = `Quick Quote Request - ${projectType.replace('-', ' ')}`;
    const body = `Hello Next Century Metal Craft,

I would like to request a quote for ${projectType.replace('-', ' ')}.

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Project Details:
${message}

Please contact me at your earliest convenience.

Best regards,
${name}`;

    window.location.href = `mailto:nextcenturymetalcraft@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsOpen(false);
  };

  // This component is managed by FloatingButtons, so we return null
  // The actual modal is rendered in FloatingButtons component
  return null;
};

export default QuoteModal;
