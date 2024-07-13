import React, { useState } from "react";
import "./CardWrapper.css";
import CardWrapper from "./Card";
import UserInput from "./UserInput";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Userip.css";

function App() {
  const [cardData, setCardData] = useState(null);

  const handleCardData = (data) => {
    setCardData(data);
  };

  const downloadPdf = async () => {
    const card = document.querySelector(".card-wrapper");
    const canvas = await html2canvas(card);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = imgWidth / imgHeight;
    const canvasWidth = pdfWidth * 0.8;
    const canvasHeight = canvasWidth / ratio;

    const x = (pdfWidth - canvasWidth) / 2;
    const y = (pdfHeight - canvasHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, canvasWidth, canvasHeight);

    // Calculate text position at the bottom of the card
    const textX = x + canvasWidth / 2;
    let textY = y + canvasHeight + 20; // Adjust as needed

    pdf.setFontSize(12);
    pdf.setTextColor("#0000EE");

    // Add links as text with active hyperlinks
    pdf.textWithLink("LinkedIn", textX, textY, { url: cardData.linkedin });
    textY += 10;
    pdf.textWithLink("Twitter", textX, textY, { url: cardData.twitter });
    textY += 10;
    pdf.textWithLink("Email", textX, textY, { url: `mailto:${cardData.email}` });

    pdf.save("ecard.pdf");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "600",
          backgroundImage: "conic-gradient(#553c9a, #ee4b2b, #00c2cb, #553c9a)",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          textAlign: "center",
        }}
      >
        Generate Your E-Card
      </h1>
      <UserInput onSubmit={handleCardData} />
      {cardData && (
        <>
          <CardWrapper>{cardData}</CardWrapper>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              outline: "none",
              fontWeight: "bold",
            }}
            onClick={downloadPdf}
          >
            Download PDF
            {/* Placeholder text for the button */}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
