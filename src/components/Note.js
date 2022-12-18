import React from 'react'
import Navbar from './Navbar'

export default function Note() {
    return (
        <>          
        <div className='page3'>
            <Navbar/>
            <div className="notesPage" >
                    <div className="notebox">
                        <div className="table">
                            <div className="row">
                                <div>
                                    <body>
                                        <table className="fixed_header" id='fixed_header'>
                                            <thead>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Subject</th>
                                                    <th>Chapter</th>
                                                    <th>Date</th>
                                                    <th>Downlod</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1.</td>
                                                    <td>Physics</td>
                                                    <td>1</td>
                                                    <td>9-12-2022</td>
                                                    <td>link</td>
                                                </tr>
                                                <tr>
                                                    <td>2.</td>
                                                    <td>Chemistry</td>
                                                    <td>1</td>
                                                    <td>8-12-2022</td>
                                                    <td>link</td>
                                                </tr>
                                                <tr>
                                                    <td>3.</td>
                                                    <td>Maths</td>
                                                    <td>1</td>
                                                    <td>7-12-2022</td>
                                                    <td>link</td>
                                                </tr>
                                                <tr>
                                                    <td>4.</td>
                                                    <td>English</td>
                                                    <td>1</td>
                                                    <td>5-12-2022</td>
                                                    <td>link</td>
                                                </tr>
                                                <tr>
                                                    <td>5.</td>
                                                    <td>DSA</td>
                                                    <td>1</td>
                                                    <td>3-12-2022</td>
                                                    <td>link</td>
                                                </tr>
                                                <tr>
                                                    <td>6.</td>
                                                    <td>OPPS</td>
                                                    <td>1</td>
                                                    <td>12-12-2022</td>
                                                    <td>link</td>
                                                </tr>
                                                <tr>
                                                    <td>7.</td>
                                                    <td>IKS</td>
                                                    <td>1</td>
                                                    <td>19-12-2022</td>
                                                    <td>link</td>
                                                </tr>
                                                <tr>
                                                    <td>8.</td>
                                                    <td>PHYSICAL EDU</td>
                                                    <td>1</td>
                                                    <td>8-12-2022</td>
                                                    <td>link</td>
                                                </tr>
                                                <tr>
                                                    <td>9.</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                </tr>
                                                <tr>
                                                    <td>10.</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                </tr>
                                                <tr>
                                                    <td>11.</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                    <td>Text</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </body>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>

    )
}
