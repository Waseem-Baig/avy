"use client";
import React from "react";

export const GoogleMapMobile = () => {
  return (
    <div className="w-full h-full">
      <iframe
        title="VIT-AP University Map"
        className="rounded-xl w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.5271396766544!2d80.52649327475053!3d16.475685831424866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f04189a29c69%3A0x91f8cda2dfd82a88!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1695646003023!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
