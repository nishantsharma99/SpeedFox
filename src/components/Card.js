import React from 'react'

const Card = (props) => {
    // console.log(props);
    const colorOfMode = (props.data.gpsDtl.mode === 'RUNNING' ? '#d6fbe0':'#fbdbd6')
    const colorOfIcon = (props.data.gpsDtl.mode === 'RUNNING' ? '#0a8b20':'#f53f2b')
    console.log(colorOfMode)
    return (
        <div className="card mb-1" style={{ width: '25rem', maxHeight: '15rem', fontWeight: '400', margin:'0' }}>
            <div className="card-header bg-transparent" style={{ borderBottom: '0', paddingBottom : '0.2rem' }}>
                <div className="d-flex justify-content-between">
                    <h5 className="card-title m-0" style={{fontWeight: '600'}}>
                        {props.data.vehReg}

                    </h5>
                    <div className="rightallbutton">
                        <small className="available-iconruning m-0" style={{ fontSize: '15px' }}>
                            <span style={{ marginRight: '10px', background:  colorOfMode, color: colorOfIcon, padding: '4px' }}>
                                <i className="fas fa-truck-loading" style={{ marginRight: '4px' }}></i>
                                {props.data.gpsDtl.mode}
                            </span>
                            <span>
                                <i className="fa fa-share" style={{ marginRight: '4px', background: '#d6fbe0', color: '#0a8b20', padding: '6px' }}></i>
                            </span>
                        </small>
                    </div>
                </div>
            </div>
            <div className="card-body" style={{ fontSize: '15px', padding: '0.5rem 1rem' }}>
                <div className="d-flex mb-1" style={{ height: '40px' }}>
                    <i className="fas fa-map-marker-alt px-1" style={{ color: '#ff4e4e' }}></i>
                    <div className="fine">
                        <p className="addresstooltip" style={{wordBreak: 'break-word'}}>
                            {props.data.gpsDtl.latLngDtl.addr}

                        </p>
                    </div>
                </div>
                <div className="d-flex mb-1 greacolor" style={{ height: '40px' }}>
                    <i className="fas fa-clock px-1"></i>
                    <div className="fine mr">
                        {props.data.gpsDtl.latLngDtl.gpstime}

                    </div>
                </div>
                <div className="d-flex mb-1" style={{ height: '40px' }}>
                    <i className="fas fa-info-circle px-1" style={{ color: '#74b5ff' }}></i>
                    <div className="fine">
                        <p>
                            {props.data.gpsDtl.speed}
                            kmph </p>
                    </div>
                </div>
                <div className="fine" style={{ display: 'flex', justifyContent: 'space-between', height: '40px' }}>
                    <div>

                        <i className="fas fa-box px-1" style={{ color: '#b8b8b8' }}></i>
                        <span>Consignment</span>
                    </div>
                    <div className="float-right" style={{ justifyContent: 'space-between', color: 'green' }}>
                        <div className="float-right" style={{ padding: '1px' }}>
                            <span className="pr5red tooltipIngnationOn" style={{ fontSize: '12px', padding: '2px' }}>
                                <i className="fa fa-plug" aria-hidden="true" style={{ padding: '2px' }}></i>
                                {props.data.gpsDtl.ignState}

                            </span>
                            <span className="pr5red tooltipIngnationOn" style={{ fontSize: '12px', padding: '2px' }}>
                                <i className="fa fa-key" aria-hidden="true" style={{ padding: '2px' }}></i>
                                {props.data.gpsDtl.ignState}

                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer" style={{ background: '#fff', fontSize: '15px' }}>
                <div className="d-flex">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="spannamecover" style={{ display: 'flex', alignItems: 'center' }}>
                            <img className="rounded-circle" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXGBcXFxcVFxUVFxcdFxgXHRoXFxcYHSggGBolHRcYITEiJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIH/8QAIBABAQEBAAIBBQEAAAAAAAAAAAER8GGRsSFBcYGhEv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDsZBBJACCASSApIAkQCqIApAEVAS0RAkUCCQIpACkApBAEUggqaA+hF1AQkCKoApAEiAKBBd3fdIAUgChgIA1QAQQB0FAIQgSRoIQoEEQBBAREAqQQSFNAEGggiCBAFJUAUKBCQKmikAkgSK0AioCHd/UQCqIJCoClaAUVSAggGpPKZqBGIAYDigAggEQCRgBFACkAMUEQIjCAWogEiCCQHu9CJYCK1AlEASKBAoAR/rwgKSAIoEggRBBQJAigCKQDShQSIAhEEgsAiEAQdQAoUCKkBBFBIoBhW/hAkgBWBAUCCSgBIgCCgQqIIJAQQCVIgFCIEREBSQLBUgKiHfIGBEBiRBSJZ4iBAiAUCAIQEEAu+DUAIMAEUqAEjQVCIA0UggQBCIBJAioIBSQDSECpFUBqULUCCQKlCAQYARQArUoCB0AoiAUUKAEIEdWIBFCgVQWgjUgSgICKFAgiCSgtBYQQQSAhEEogCSIKDUQQSgIggEjACOoEoCARgA1BAkQCRAFAgCgBVQwDNSQClAEUgQ1RAREQBQAiEAUgB0IghqIJKCAViQBVEECAKVQDT3e1ACKFBELAMQ0ggQBBAEQgCCgBSAIgEkdBBGACEBQpoAoAkQC7vZS0AlhAFAEjUASIBLUCKQBFAgUAKQJRIAigSSARFAkkAKQClIAUgSSAFIAUgCKBJIB+kkD/2Q==" alt="img" style={{ height: '30px', width: '30px', marginRight: '10px' }} />
                            <div className="spanname" style={{ fontWeight: '100', fontFamily: 'sans-serif' }}>
                                {props.data.drivers.driverName.toUpperCase()}
                                
                            </div>
                        </div>
                        <div className="mobilenodriver" style={{ fontWeight: '100', fontFamily: 'sans-serif' }}>
                            +91 {props.data.drivers.phoneNumber}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card