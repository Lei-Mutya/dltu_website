import React from "react";

function News() {
  return (
    <>
      {/*100x160 image size*/}
      <div>
        <h2
          // className="mt-4"
          style={{ color: "#fec00f", marginTop: "100px", marginBottom: "50px" }}
        >
          Featured News
        </h2>
      </div>
      <div className="card-group">
        <div className="card">
          <img
            src="https://www.telegraph.co.uk/multimedia/archive/01834/grad_1834543a.jpg"
            className="card-img-top"
            alt="Class 2021"
            style={{ height: "200px", width: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">Class 2021 Graduation</h5>
            <p className="card-text" style={{ padding: "20px 0px" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F5e15abeb-fc40-47f4-8b44-8741e6656483.jpg?fit=scale-down&source=next&width=700"
            class="card-img-top"
            alt="Seminar"
            style={{ height: "200px", width: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">Health Awareness Virtual Seminar</h5>
            <p className="card-text" style={{ padding: "20px 0px" }}>
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f889bea6639b29f4c618578%2F0x0.jpg"
            class="card-img-top"
            alt="Faculty Benefits"
            style={{ height: "200px", width: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">Benefits of DLTU Faculty in Pandemic</h5>
            <p className="card-text" style={{ padding: "20px 0px" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      {/*EOF FEATURE NEWS*/}

      {/*ARCHIVE*/}
      <div className="container_news">
        <h2
          // className="mt-4"
          style={{
            color: "#fec00f",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          Student Life News
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div className="col-md-3">
          <div className="card" style={{ height: "400px" }}>
            <img
              src="https://images.theconversation.com/files/319639/original/file-20200310-61107-w7d9tt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
              className="card-img-top"
              alt="Student Exchange"
              style={{ height: "200px", width: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Extending the Help to Afghanistan by Student Exchange
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ height: "400px" }}>
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11E5D/production/_114890337_gettyimages-1257206941.jpg"
              className="card-img-top"
              alt="Online SC Elections"
              style={{ height: "200px", width: "auto" }}
            />
            <div clasName="card-body">
              <h5 className="card-title">Online Student Council Elections</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ height: "400px" }}>
            <img
              src="https://www.usnews.com/dims4/USNEWS/793074b/2147483647/crop/2121x1392%2B0%2B0/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F90%2F45%2Fbe51024a47ed9f6f5fc5a788e123%2F201102-innovativeschools-stock.jpg"
              className="card-img-top"
              alt="Pfizer Collab"
              style={{ height: "200px", width: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Pfizer: Academe Partnerships with DLTU
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ height: "400px" }}>
            <img
              src="https://www.qs.com/wp-content/uploads/2019/08/biggest-blunders-universities-make-talking-to-students-blog.jpg"
              class="card-img-top"
              alt="Student Org"
              style={{ height: "200px", width: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Student Organization goes National Membership
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
