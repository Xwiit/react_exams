import { useDispatch, useSelector } from "react-redux";
import FetchFirstTerm from "./fetchingResults/FetchFirstTerm";
import logo from "../images/logo.jpg";
import FetchPsychomotor from "./fetchingResults/Psychomotor";
import { useEffect, useState, useRef } from "react";
import AffectiveSkills from "./fetchingResults/AffectiveSkills";
import { getStduent } from "../feature/service";
import ResultHeader from "./fetchingResults/ResultHeader";
import TeachersRemark from "./fetchingResults/TeachersRemark";
import Summary from "./fetchingResults/Summary";
// import puppeteer from "puppeteer-core";
// import fs from "fs-extra";

// import ReactToPrint from "react-to-print";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ResultPreview() {
  const stdData = getStduent();

  const printRef = useRef();

  // const puppeteePdf = async () => {
  //   const element = printRef.current;
  //   try {
  //     const browser = await puppeteer.launch();
  //     const page = await browser.newPage();
  //     await page.setContent(element);
  //     await page.emulateMedia("screen");
  //     await page.pdf({
  //       path: "resutl.pdf",
  //       format: "A4",
  //       printBackground: true,
  //     });
  //     await browser.close();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // ----------------------------
  const handleGeneratePDF = () => {
    // const input = document.getElementById('content');
    const element = printRef.current;

    html2canvas(element, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("result.pdf");
    });
  };

  // ----------------------------

  // const handleDownloadPdf = async () => {
  //   const element = printRef.current;

  //   // A4 dimensions in points
  //   const a4Width = 595.28;
  //   const a4Height = 841.89;

  //   const canvas = await html2canvas(element, {
  //     scale: 2, // Adjust scale if needed for better quality
  //     width: element.scrollWidth,
  //     height: element.scrollHeight,
  //   });

  //   const imgData = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF("p", "pt", "a4");
  //   const imgProperties = pdf.getImageProperties(imgData);
  //   const pdfWidth = a4Width;
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  //   // If the content height is larger than A4, create multiple pages
  //   let position = 0;
  //   while (position < pdfHeight) {
  //     pdf.addImage(imgData, "PNG", 0, position, pdfWidth, a4Height);
  //     position += a4Height;
  //     if (position < pdfHeight) {
  //       pdf.addPage();
  //     }
  //   }

  //   pdf.save("download.pdf");
  // };

  return (
    <div
      className="w-full h-screen  flex justify-center scrollbar-thin
    scrollbar-webkit overflow-y-scroll  p-4 "
    >
      <div
        ref={printRef}
        className="bg-gray-100 border-2  py-8 px-10 h-[60rem] ml-4 w-[50rem] rounded-lg"
      >
        {/* The result header */}
        <div>
          <div className="">
            <button
              className="text-gray-300 text-sm"
              onClick={handleGeneratePDF}
            >
              download
            </button>

            {/* <button onClick={handlePrint}>Print</button> */}
          </div>
          <div className="flex items-center justify-between">
            <img
              src={logo}
              alt="School Logo"
              className="w-[15%] h-[15%] rounded-xl shadow-xl"
            />
            <div className="h-full">
              <h1 className="h-full uppercase text-gray-700 text-center text-3xl">
                Xwiit Tech Academy
              </h1>
              <h3 className="uppercase text-center text-sm mb-2">
                Beside Oramax Pharmacy Kagini, Abuja{" "}
              </h3>
            </div>
            <img
              src={`https://strapi-176070-0.cloudclusters.net${stdData?.attributes?.passport?.data.map(
                (passport) => passport?.attributes?.url
              )}`}
              // src={`http://localhost:1337/${stdData?.attributes?.passport?.data?.attributes?.url}`}
              alt=""
              className="w-[15%] h-[15%] rounded-xl shadow-2xl"
            />
          </div>
        </div>
        <h1 className="text-center uppercase font-bold text-2xl">
          {stdData?.attributes?.name}
        </h1>
        <div className="flex w-full justify-between m-2 ">
          <ResultHeader />
        </div>
        {/* ---------------result   table--------------- */}
        <div>
          <table className="resultTable w-full">
            <thead>
              <tr>
                <th>Subject</th>
                <th>1st CA</th>
                <th>2nd CA</th>
                <th>Exam</th>
                <th>Average</th>
                <th>Total</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <FetchFirstTerm />
            </tbody>
          </table>
        </div>

        <div className="mt-2 flex justify-between w-full">
          <div className="w-[48%]">
            <table className="resultTable w-full">
              <thead>
                <tr>
                  <th colSpan="2">Affective Skills</th>
                </tr>
              </thead>
              <tbody>
                <AffectiveSkills />
              </tbody>
            </table>
          </div>
          <div className="w-[48%]">
            <table className="resultTable w-full">
              <thead>
                <tr>
                  <th colSpan="2">Psychomotor</th>
                </tr>
              </thead>
              <tbody>
                <FetchPsychomotor />
              </tbody>
            </table>
          </div>
        </div>
        {/* -----------------Summary---------------- */}
        <Summary />
        {/* -----------------Remarks---------------- */}
        <div>
          <TeachersRemark />
        </div>
      </div>
    </div>
  );
}

export default ResultPreview;
