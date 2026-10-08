export default function Why() {
  return (
    <section className="why-section">
      <div className="why-container">
        
        {/* Left Section */}
        <div className="why-text-section">
          <h2 className="why-heading">
            What can you expect from us?
          </h2>
          <p className="why-paragraph">
            We create <span className="why-font-semibold">campaigns</span> that look great and work even better, with consistency you can rely on.
          </p>
          <p className="why-orange-text">
            Ritz Media World , your advertising partner in Noida.
          </p>
          <button className="why-cta-button">
            Click to know more
          </button>
        </div>

        {/* Center Section */}
        <div className="why-image-section">
          <img 
            src="/why.jpeg" 
            alt="Lightbulb with butterflies representing creative campaigns" 
            className="why-image"
          />
        </div>

        {/* Right Section */}
        <div className="why-stats-grid">
          <div className="why-stat-card why-border-bottom why-border-right">
            <span className="why-stat-number">1M+</span>
            <span className="why-stat-label">Campaigns Executed</span>
          </div>
          <div className="why-stat-card why-border-bottom">
            <span className="why-stat-number">1K+</span>
            <span className="why-stat-label">Happy Clients</span>
          </div>
          <div className="why-stat-card why-border-right">
            <span className="why-stat-number">500+</span>
            <span className="why-stat-label">Solutions</span>
          </div>
          <div className="why-stat-card">
            <span className="why-stat-number">1B+</span>
            <span className="why-stat-label">Impressions</span>
          </div>
        </div>

      </div>
    </section>
  );
}