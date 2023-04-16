import React, { useEffect, useRef, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import React, { useState, useEffect } from 'react';


export default function Pdfviewer(props) {


    function PdfViewer(props) {
        const [pdfUrl, setPdfUrl] = useState(null);

        useEffect(() => {
            // Call an API endpoint or database query to retrieve the binary data of the PDF file
            fetch(`http://localhost:8080/collegeazy/notes/file/${props.url}`)
                .then(response => response.arrayBuffer())
                .then(buffer => {
                    // Convert the binary data to a Blob object
                    const blob = new Blob([buffer], { type: 'application/pdf' });
                    // Create a URL object from the Blob object
                    const url = URL.createObjectURL(blob);
                    // Set the URL as the source for the <iframe> element
                    setPdfUrl(url);
                });
        }, []);

        if (!pdfUrl) {
            return <div>Loading PDF...</div>;
        }

        return (
            <div>
                <iframe src={pdfUrl} width="100%" height="500px"></iframe>
            </div>
        );
    }



    // return (
    //     <>
    //         <header className="App-header">

    //             {/* <p style={{ color: "black" }}> Page {pageNumber} of {numPages}</p> */}
    //             <div className="buttt">

    //                 {/* {pageNumber > 1 &&
    //                     <button onClick={changePageBack} >Previous Page</button>
    //                 }
    //                 {
    //                     pageNumber < numPages &&
    //                     <button onClick={changePageNext}>Next Page</button> */}

    //             </div>

    //             <Viewer fileUrl={props.url} />






    //         </header>
    //     </>
    // );
}

