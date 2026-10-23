import { COMPANY_NAME } from "@/app/globalConstants";
import { DOMAIN } from "@/app/urlPath";

export const getSignUpEmailVerificationMessageByCode = (
  verificationCode: string,
  verificationLinkToken: string
) => {
  return `
    <div style="background-color: #fbfbfb; font-family: Arial, sans-serif">
      <div
        style="
          margin: 0 auto;
          max-width: 600px;
          width: 95%;
          padding: 20px 0px;
          box-sizing: border-box;
        "
      >
        <img
          src=${''}
          alt="logo"
          style="margin-bottom: 15px; height: 40px; width: 120px"
        />
        <div
          style="
            box-sizing: border-box;
            width: 98%;
            text-align: center;
            border: 1px solid #e4e2e2;
            max-height: 400px;
            padding: 40px 20px;
            border-radius: 5px;
            background-color: #fff;
            margin: auto;
          "
        >
          <h3
            style="
              color: #242128;
              font-size: 25px;
              font-weight: normal;
              line-height: 1.3;
              margin: 0 !important;
              padding: 0;
            "
          >
            Verification code
          </h3>
          <p
            style="
              color: #242128;
              font-size: 70px;
              font-weight: 300;
              line-height: 1.3;
              margin: 0 !important;
              padding: 0;
            "
          >
            ${verificationCode}
          </p>
          <p style="font-size: 16px; color: #75757a">Or</p>
          <a
            style="
              color: #ffffff !important;
              display: inline-block;
              font-size: 14px;
              font-weight: 600;
              line-height: 40px;
              margin: 0 !important;
              padding: 0;
              background-color: chocolate;
              text-decoration: none;
              padding: 0px 20px;
              border-radius: 6px;
              cursor: pointer;
            "
            href="${DOMAIN}/verify-email/${verificationLinkToken}"
            >Go to verify</a
          >
        </div>
        <p style="text-align: center; margin-top: 40px">
          <a
            href="${DOMAIN}"
            style="
              margin: 0;
              color: #cccccc;
              font-size: 13px;
              font-weight: 300;
              line-height: 1.3;
              margin: 0 !important;
              padding: 0;
              text-decoration: none;
            "
            target="_blank"
            >©&nbsp;${new Date().getFullYear()}&nbsp;${COMPANY_NAME}&nbsp;|
            Lagos, NG</a
          >
        </p>
      </div>
    </div>
  `;
};