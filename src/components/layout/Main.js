import React from 'react'
import Content from './Content';
export default function Main() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            {/* <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Page</h1>
                            </div> */}
                            {/* <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active">Starter Page</li>
                                </ol>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                                <Content/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
