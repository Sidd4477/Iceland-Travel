import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      destination,
      date,
      time,
      adults,
      children,
      guests,
      pricePerPerson,
      basePrice,
      taxes,
      total,
    } = body;

    /* =========================================================
       VALIDATION
    ========================================================= */

    if (!firstName || !lastName) {
      return NextResponse.json(
        {
          success: false,
          message: "First name and last name are required.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Customer email is required.",
        },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required.",
        },
        { status: 400 }
      );
    }

    /* =========================================================
       ENVIRONMENT VARIABLES
    ========================================================= */

    // ---------------- BREVO ----------------

    const brevoApiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName =
      process.env.BREVO_SENDER_NAME || "G. Hermannsson";

    // ---------------- WASENDER ----------------

    const wasenderApiKey = process.env.WASENDER_API_KEY;
    const wasenderTo = process.env.WASENDER_WHATSAPP_TO;

    /* =========================================================
       BREVO ENV VALIDATION
    ========================================================= */

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "BREVO_API_KEY is missing in .env.local",
        },
        { status: 500 }
      );
    }

    if (!senderEmail) {
      console.error("BREVO_SENDER_EMAIL is missing.");

      return NextResponse.json(
        {
          success: false,
          message:
            "BREVO_SENDER_EMAIL is missing in .env.local",
        },
        { status: 500 }
      );
    }

    /* =========================================================
       WASENDER ENV VALIDATION
    ========================================================= */

    if (!wasenderApiKey) {
      console.error("WASENDER_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message:
            "WASENDER_API_KEY is missing in .env.local",
        },
        { status: 500 }
      );
    }

    if (!wasenderTo) {
      console.error("WASENDER_WHATSAPP_TO is missing.");

      return NextResponse.json(
        {
          success: false,
          message:
            "WASENDER_WHATSAPP_TO is missing in .env.local",
        },
        { status: 500 }
      );
    }

    /* =========================================================
       BREVO EMAIL HTML
    ========================================================= */

    const htmlContent = `
      <!DOCTYPE html>

      <html>
        <head>
          <meta charset="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>Booking Confirmation</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            font-family: Arial, Helvetica, sans-serif;
            color: #222222;
          "
        >

          <div
            style="
              max-width: 650px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 12px;
              padding: 40px;
            "
          >

            <h1
              style="
                margin: 0 0 20px;
                font-size: 28px;
              "
            >
              Booking Confirmation
            </h1>

            <p
              style="
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 10px;
              "
            >
              Hi ${firstName},
            </p>

            <p
              style="
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 30px;
              "
            >
              Thank you for choosing G. Hermannsson.
              We have received your booking request successfully.
            </p>

            <h2
              style="
                font-size: 20px;
                margin-bottom: 15px;
              "
            >
              Booking Details
            </h2>

            <table
              width="100%"
              cellpadding="10"
              cellspacing="0"
              style="
                border-collapse: collapse;
                width: 100%;
                font-size: 15px;
              "
            >

              <tr>
                <td>
                  <strong>Name</strong>
                </td>

                <td>
                  ${firstName} ${lastName}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Email</strong>
                </td>

                <td>
                  ${email}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Phone</strong>
                </td>

                <td>
                  ${phone}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Destination</strong>
                </td>

                <td>
                  ${destination || "-"}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Date</strong>
                </td>

                <td>
                  ${date || "-"}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Time</strong>
                </td>

                <td>
                  ${time || "-"}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Adults</strong>
                </td>

                <td>
                  ${adults ?? 0}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Children</strong>
                </td>

                <td>
                  ${children ?? 0}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Total Guests</strong>
                </td>

                <td>
                  ${guests ?? 0}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Price Per Person</strong>
                </td>

                <td>
                  $${Number(pricePerPerson || 0).toFixed(2)}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Base Price</strong>
                </td>

                <td>
                  $${Number(basePrice || 0).toFixed(2)}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Taxes</strong>
                </td>

                <td>
                  $${Number(taxes || 0).toFixed(2)}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Total</strong>
                </td>

                <td>
                  <strong>
                    $${Number(total || 0).toFixed(2)}
                  </strong>
                </td>
              </tr>

            </table>

            <p
              style="
                margin-top: 30px;
                font-size: 16px;
                line-height: 1.6;
              "
            >
              We look forward to welcoming you.
            </p>

            <p
              style="
                margin-top: 25px;
                color: #777777;
                font-size: 14px;
              "
            >
              G. Hermannsson
            </p>

          </div>

        </body>
      </html>
    `;

    /* =========================================================
       SEND EMAIL THROUGH BREVO API
    ========================================================= */

    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "api-key": brevoApiKey,
        },

        body: JSON.stringify({
          sender: {
            name: senderName,
            email: senderEmail,
          },

          to: [
            {
              email: email,
              name: `${firstName} ${lastName}`,
            },
          ],

          subject:
            "Booking Confirmation - G. Hermannsson",

          htmlContent,
        }),
      }
    );

    /* =========================================================
       BREVO ERROR
    ========================================================= */

    if (!brevoResponse.ok) {
      const brevoError =
        await brevoResponse.text();

      console.error(
        "Brevo API Error:",
        brevoError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Brevo could not send the email.",
          brevoError,
        },
        {
          status: brevoResponse.status,
        }
      );
    }

    /* =========================================================
       BREVO SUCCESS
    ========================================================= */

    const brevoResult =
      await brevoResponse.json();

    console.log(
      "Brevo Email Sent:",
      brevoResult
    );

    /* =========================================================
       WHATSAPP MESSAGE
    ========================================================= */

    const whatsappMessage = `
*New Booking - G. Hermannsson*

*Customer Details*
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

*Booking Details*
Destination: ${destination || "-"}
Date: ${date || "-"}
Time: ${time || "-"}

Adults: ${adults ?? 0}
Children: ${children ?? 0}
Total Guests: ${guests ?? 0}

*Price Details*
Price Per Person: $${Number(pricePerPerson || 0).toFixed(2)}
Base Price: $${Number(basePrice || 0).toFixed(2)}
Taxes: $${Number(taxes || 0).toFixed(2)}

*Total: $${Number(total || 0).toFixed(2)}*

Booking confirmation email has also been sent.
    `.trim();

    /* =========================================================
       SEND WHATSAPP THROUGH WASENDER API
    ========================================================= */

    const wasenderResponse = await fetch(
      "https://www.wasenderapi.com/api/send-message",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${wasenderApiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          to: wasenderTo,
          text: whatsappMessage,
        }),
      }
    );

    /* =========================================================
       WASENDER ERROR
    ========================================================= */

    if (!wasenderResponse.ok) {
      const wasenderError =
        await wasenderResponse.text();

      console.error(
        "Wasender API Error:",
        wasenderError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Booking email was sent, but WhatsApp notification could not be sent.",
          whatsappError: wasenderError,
          messageId:
            brevoResult.messageId || null,
        },
        {
          status: wasenderResponse.status,
        }
      );
    }

    /* =========================================================
       WASENDER SUCCESS
    ========================================================= */

    const wasenderResult =
      await wasenderResponse.json();

    console.log(
      "Wasender WhatsApp Sent:",
      wasenderResult
    );

    /* =========================================================
       FINAL SUCCESS
    ========================================================= */

    return NextResponse.json(
      {
        success: true,

        message:
          "Booking confirmation email and WhatsApp notification sent successfully.",

        emailMessageId:
          brevoResult.messageId || null,

        whatsappMessageId:
          wasenderResult?.data?.msgId || null,

        whatsappStatus:
          wasenderResult?.data?.status || null,
      },
      {
        status: 200,
      }
    );

  } catch (error) {
    console.error(
      "Booking API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while processing the booking.",
      },
      {
        status: 500,
      }
    );
  }
}