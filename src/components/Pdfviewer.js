import React, { useEffect, useRef, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function Pdfviewer(props) {


    return (
        <>
            <header className="App-header">

                {/* <p style={{ color: "black" }}> Page {pageNumber} of {numPages}</p> */}
                <div className="buttt">

                    {/* {pageNumber > 1 &&
                        <button onClick={changePageBack} >Previous Page</button>
                    }
                    {
                        pageNumber < numPages &&
                        <button onClick={changePageNext}>Next Page</button> */}
                    
                </div>

                <Viewer fileUrl={props.url} />



             


            </header>
        </>
    );
}

