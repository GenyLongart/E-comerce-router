import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
      {/* Header*/}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      {/* Section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* Product price*/}
                    $40.00 - $80.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <Card />
            </div>
            <div className="col mb-5">
              <Card />
            </div>
            <div className="col mb-5">
              <Card />
            </div>
            <div className="col mb-5">
              <Card />
            </div>
            <div className="col mb-5">
              <Card />
            </div>
            <div className="col mb-5">
              <Card />
            </div>
            <div className="col mb-5">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home