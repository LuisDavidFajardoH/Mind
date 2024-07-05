import React from "react";
import "./footer.css";
import { FacebookFill, LinkedinBoxFill, InstagramFill, Envelope, Phone, Location } from 'akar-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <h4>Contáctanos</h4>
          <p><Location strokeWidth={2} size={13}/><a href="https://www.google.com/maps/place/Mind+SAS/@4.6253702,-74.0950724,19z/data=!4m15!1m8!3m7!1s0x8e3f9961881e369f:0x15490d5d68fd991d!2sCl.+20+%2339-35,+Bogot%C3%A1!3b1!8m2!3d4.6254378!4d-74.0946358!16s%2Fg%2F11jds3vx5w!3m5!1s0x8e3f9925245eb0f1:0xa78a08cda67a6c42!8m2!3d4.6254959!4d-74.0946273!16s%2Fg%2F11fmn0qv8f?entry=ttu" target="_blank"> Av. Américas Calle 20 # 39 - 35 Bogotá</a></p>
          <p><Envelope strokeWidth={2} size={13}/><a href="mailto:info@metalmindsa.com" target="_blank"> info@metalmindsa.com</a></p>
          <p><Phone strokeWidth={2} size={13}/><a href="https://api.whatsapp.com/send/?phone=573112897588" target="_blank"> (57) 311 289 7588</a></p>
        </div>
        <div className="footer-row">
          <h4>Siguenos</h4>
          <div className="red-social">
            <a href="https://www.facebook.com/MINDSASBIC" target="_blank"><FacebookFill strokeWidth={2} size={28}/></a>
            <a href="https://www.linkedin.com" target="_blank"><LinkedinBoxFill strokeWidth={2} size={30}/></a>
            <a href="https://www.instagram.com/metalmind.sas_bic/" target="_blank"><InstagramFill strokeWidth={2} size={30}/></a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <small>&copy; 2024 <b>METAL MIND S.A.S</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;