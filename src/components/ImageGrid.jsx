import React from 'react';

const ImageGrid = () => {
  return (
    <div className="container py-5">
      <div className="row g-3">
        {/* Left Big Image */}
        <div className="col-lg-6">
          <div className="img-wrapper big-img">
            <img src="/assets/masonry/Masonry2.jpeg" alt="Main" className="img-fluid" />
          </div>
        </div>

        {/* Right Images */}
        <div className="col-lg-6 d-flex flex-column justify-content-between">
          {/* Top Horizontal Image */}
          <div className="img-wrapper mb-3 horizontal-img">
            <img src="/assets/masonry/Masonry4.jpeg" alt="Top" className="img-fluid" />
          </div>

          {/* Two Small Side-by-Side */}
          <div className="d-flex gap-3">
            <div className="img-wrapper small-img flex-fill">
              <img src="/assets/masonry/Masonry1.jpeg" alt="Bottom Left" className="img-fluid" />
            </div>
            <div className="img-wrapper small-img flex-fill">
              <img src="/assets/masonry/Masonry3.jpeg" alt="Bottom Right" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;

