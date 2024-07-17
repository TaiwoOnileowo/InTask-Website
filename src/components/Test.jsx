import React from "react";

const Test = () => {
  return (
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td style="padding:10px;">
          <img src="path_to_logo.jpg" alt="GED Africa" style="height:50px;" />
        </td>
        <td style="padding:10px;">
          <p style="margin:0; font-family: Arial, sans-serif; color:#F89B2D; font-size:16px;">
            <strong>MOLLY CONCANNON</strong>
          </p>
          <p style="margin:0; font-family: Arial, sans-serif; color:#333; font-size:14px;">
            GED Africa Ltd
          </p>
          <p style="margin:0; font-family: Arial, sans-serif; color:#333; font-size:14px;">
            2nd Floor, The AXIS 26 Cybercity, Ebene
          </p>
          <p style="margin:0; font-family: Arial, sans-serif; color:#333; font-size:14px;">
            Mauritius, 72201
          </p>
          <p style="margin:0; font-family: Arial, sans-serif; color:#F89B2D; font-size:14px;">
            <a href="mailto:molly@gedafrica.com" style="color:#F89B2D;">
              molly@gedafrica.com
            </a>
          </p>
          <p style="margin:0; font-family: Arial, sans-serif; color:#333; font-size:14px;">
            <a href="tel:+243818779349" style="color:#333;">
              +243 818 779 349
            </a>
          </p>
          <p style="margin:0;">
            <a
              href="https://www.linkedin.com/company/gedafrica"
              style="margin-right:5px;"
            >
              <img
                src="path_to_linkedin_icon.png"
                alt="LinkedIn"
                style="height:20px;"
              />
            </a>
            <a
              href="https://www.facebook.com/gedafrica"
              style="margin-right:5px;"
            >
              <img
                src="path_to_facebook_icon.png"
                alt="Facebook"
                style="height:20px;"
              />
            </a>
            <a
              href="https://www.instagram.com/gedafrica"
              style="margin-right:5px;"
            >
              <img
                src="path_to_instagram_icon.png"
                alt="Instagram"
                style="height:20px;"
              />
            </a>
            <a href="https://www.gedafrica.com">
              <img
                src="path_to_website_icon.png"
                alt="Website"
                style="height:20px;"
              />
            </a>
          </p>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding:10px;">
          <p style="font-family: Arial, sans-serif; color:#999; font-size:12px;">
            The information contained in this email is confidential and may
            contain proprietary information. It is meant solely for the intended
            recipient. Access to this email by anyone else is unauthorised. If
            you are not the intended recipient, any disclosure, copying,
            distribution or any action taken or omitted in reliance on this, is
            prohibited and may be unlawful. If you have received this email in
            error, please notify the sender immediately.
          </p>
        </td>
      </tr>
    </table>
  );
};

export default Test;
