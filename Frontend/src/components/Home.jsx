import React from 'react';
import {useNavigate} from 'react-router-dom'

const Home = ({loggedIn}) => {

    const navigate = useNavigate();
    if(loggedIn){
      navigate('/user/editor')
    }
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f4f4f4',
    color: '#333',
  };

  const headerStyle = {
    background: '#1a1a1a',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
  };

  const heroStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1503252947848-7338d3f92f31?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',

    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: '#fff',
  };

  const heroOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  };

  const heroContentStyle = {
    position: 'relative',
    textAlign: 'center',
    padding: '0 20px',
    zIndex: 1,
  };

  const heroHeadingStyle = {
    fontSize: '3em',
    marginBottom: '10px',
  };

  const heroParagraphStyle = {
    fontSize: '1.2em',
    marginBottom: '20px',
  };

  const buttonStyle = {
    background: '#e91e63',
    padding: '10px 20px',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const featuresSectionStyle = {
    padding: '60px 20px',
    textAlign: 'center',
  };

  const featuresHeadingStyle = {
    marginBottom: '40px',
    fontSize: '2.5em',
    color: '#1a1a1a',
  };

  const featureCardStyle = {
    display: 'inline-block',
    width: '300px',
    margin: '20px',
    background: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    verticalAlign: 'top',
  };

  const featureImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '15px',
  };

  const featureTitleStyle = {
    color: '#e91e63',
    marginTop: 0,
  };

  const callToActionStyle = {
    padding: '40px 20px',
    background: '#1a1a1a',
    textAlign: 'center',
    color: '#fff',
  };

  const ctaHeadingStyle = {
    marginBottom: '20px',
    fontSize: '2em',
  };

  const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <h1>AI Code Reviewer</h1>
        <p>Elevate your code quality with AI-powered reviews</p>
      </header>

      {/* Hero Section */}
      <section style={heroStyle} loading="lazy">
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <h2 style={heroHeadingStyle}>Automate Your Code Reviews</h2>
          <p style={heroParagraphStyle}>
            Instant feedback and insights for cleaner, more efficient code.
          </p>
          <button onClick={()=>navigate('/signup')} style={buttonStyle}>Check You'r Code</button>
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresSectionStyle}>
        <h2 style={featuresHeadingStyle}>Features</h2>
        <div style={featureCardStyle}>
       
          <h3 style={featureTitleStyle}>Real-time Analysis</h3>
          <p>
            Experience immediate code feedback as you work, ensuring best practices every step of the way.
          </p>
        </div>
        <div style={featureCardStyle}>
          
          <h3 style={featureTitleStyle}>Seamless Integration</h3>
          <p>
            Integrate effortlessly with your favorite development tools and workflow.
          </p>
        </div>
        <div style={featureCardStyle}>
          
          <h3 style={featureTitleStyle}>Comprehensive Reports</h3>
          <p>
            Receive detailed insights and actionable recommendations to improve your code.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={callToActionStyle}>
        <h2 style={ctaHeadingStyle}>Ready to Revolutionize Your Code Reviews?</h2>
        <button onClick={()=>navigate('/signup')} style={buttonStyle}>Get Started</button>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2025 AI Code Reviewer. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
