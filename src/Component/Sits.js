

function Sits() {

    const golden = [
        {
            seatName:"a1",
            imge:require("./image/sit.jpg"),
            isbook:false
        },

    ]

    let silver = [
       
    ]


console.log(golden)
    return (
        <>
            <section className='container'>
                <div className="seet_name">
                    <h4>Platinum :- $150</h4>
                </div>
                <div className="sit_row "  >



                    { golden && 
                        golden.map((v, i) => {
                            return (
                                <>
                                        <div  >
                                            <img src={v.imge} alt="img" className="sit_img" />  
                                            <div className="seet_name" >{v.seatName}</div>
                                        </div>
                                </>
                            )
                        })
                    }
                </div>

                <div className="seet_name">
                    <h4>Silver :- $240</h4>
                </div>
                <div className="sit_row">
                    {/* {
                        golden.map((v) => {
                            return (
                                <>
                                    <div className="sit_col">
                                        <div className="sit_img">
                                            {/* <img src={v.image} alt="" /> 
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    } */}
                </div>

                <div className="seet_name">
                    <h4>Golden :- $340</h4>
                </div>
                <div className="sit_row">
                    {/* {
                        silver.map((v) => {
                            return (
                                <>
                                    <div className="sit_col">
                                        <div className="sit_img">
                                            {/* <img src={v.image} alt="" /> 
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    } */}
                </div>

            </section>
        </>
    )
}

export default Sits;
