import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


export default function Pdfviewer(props) {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }


   
   


    return (
        <>
           <header className="App-header">

                <p style={{ color: "black" }}> Page {pageNumber} of {numPages}</p>
                <div className="buttt">

                {pageNumber > 1 &&
                    <button onClick={changePageBack} >Previous Page</button>
                }
                {
                    pageNumber < numPages &&
                    <button onClick={changePageNext}>Next Page</button>
                }
                </div>
                <Document file={props.url}  onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height="550" width="600" pageNumber={pageNumber} />
                </Document>
                   

            </header>
        </>
    );
}

