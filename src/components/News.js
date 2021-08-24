import React from 'react'

function News(){
    return(
    <>
       
        <h2 className="mt-4">Featured News</h2>
        <div className="card-group">
            <div className="card">
                <img src="https://www.telegraph.co.uk/multimedia/archive/01834/grad_1834543a.jpg" className="card-img-top" alt="Class 2021"/>
                <div className="card-body">
                <h5 className="card-title">Class 2021 Graduation</h5>
                <p className="card-text">Commencement marks the end of a long journey for college students and the beginning of another chapter of their respective lives, whether that means stepping 
                into the workforce or continuing their education. It's a proud moment for students and parents alike, and one that many didn't get to formally celebrate in 2020 as the coronavirus pandemic scrambled college graduation plans.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F5e15abeb-fc40-47f4-8b44-8741e6656483.jpg?fit=scale-down&source=next&width=700" class="card-img-top" alt="Seminar"/>
                <div className="card-body">
                <h5 className="card-title">Health Awareness Virtual Seminar</h5>
                <p className="card-text">This seminar and webinar educate and support your female employees to help them manage their health and wellness at work. It provides education and vital guidance about women’s health issues and concerns, and gives practical advice on how to live a healthier lifestyle.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f889bea6639b29f4c618578%2F0x0.jpg" class="card-img-top" alt="Faculty Benefits"/>
                <div className="card-body">
                <h5 className="card-title">Benefits of DLTU Faculty during Pandemic</h5>
                <p className="card-text">Benefits-eligible, full-time faculty members are encouraged to take advantage of the university's tuition benefits program. Full-time, benefits-eligible faculty members can also receive tuition assistance for their dependent children. </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>{/*EOF FEATURE NEWS*/}

        {/*ARCHIVE*/}
        <h2 className="mt-4">Student Life News</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
            <div className="col-md-4">
                <div className="card">
                <img src="https://images.theconversation.com/files/319639/original/file-20200310-61107-w7d9tt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" className="card-img-top" alt="Student Exchange"/>
                <div className="card-body">
                    <h5 className="card-title">Extending the Help to Afghanistan by Student Exchange</h5>
                    <p className="card-text">he Fulbright Foreign Student Program enables graduate students, young professionals, and artists from abroad to research and study in the United States for one year or longer at U.S. universities or other appropriate institutions. Go on a student exchange program abroad and open yourself to a world of opportunity. Our foreign exchange programs range from year-long exchanges to a full college program, including your diploma, at one of our accredited schools. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11E5D/production/_114890337_gettyimages-1257206941.jpg" className="card-img-top" style={{height:"420px"}} alt="Online SC Elections"/>
                <div clasName="card-body">
                    <h5 className="card-title">Online Student Council Elections</h5>
                    <p className="card-text">Elections are needed to decide who will be the leaders of the student body. Those who are elected
are often called the student Executive Committee. The elections need to be held so the executive
can claim legitimately to represent the student community. Student Elections are intended to give students the choice of their representatives </p>
                </div>
                </div>
            </div>

            
            <div className="col">
                <div className="card">
                <img src="https://www.usnews.com/dims4/USNEWS/793074b/2147483647/crop/2121x1392%2B0%2B0/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F90%2F45%2Fbe51024a47ed9f6f5fc5a788e123%2F201102-innovativeschools-stock.jpg" className="card-img-top" alt="Pfizer Collab"/>
                <div className="card-body">
                    <h5 className="card-title">Pfizer: Academe Partnerships with DLTU</h5>
                    <p className="card-text">TPfizer is proud of its long history of successfully partnering with external organizations that share in our purpose to deliver breakthroughs that change patients’ lives. We engage in partnerships with innovators to push forward great science and continually seek new partners that are actively researching bold scientific ideas, capabilities and technologies that have the potential to bring innovative treatments to patients in need. </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="https://www.qs.com/wp-content/uploads/2019/08/biggest-blunders-universities-make-talking-to-students-blog.jpg" class="card-img-top" alt="Student Org" />
                <div className="card-body">
                    <h5 className="card-title">Student Organization goes National Membership</h5>
                    <p className="card-text">A professional organization, sometimes referred to as a professional association or professional body, exists to advance a particular profession, support the interests of people working in that profession and serve the public good. It facilitates innovation, communication and connection.
                    A professional organization typically requires member dues, has an elected leadership body and includes a range of subcommittees or functional areas.  </p>
                </div>
                </div>
            </div>
        </div>
    </> 
    )
}

export default News